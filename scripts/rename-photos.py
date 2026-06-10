"""
Rename + deduplicate DCF photos.

Walks D:\\dcf-photos\\<section>\\, hashes each file, dedupes,
applies descriptive names parsed from the agent reports,
and writes the cleaned set to D:\\dcf-renamed\\<section>\\.

Also produces D:\\dcf-renamed\\_index.csv with the full mapping.
"""

import csv
import hashlib
import re
import shutil
from pathlib import Path

PROJECT = Path(r"D:\Reflow automations\Reflow ai coding folder\projects\Demo websites\website DCF")
SRC = PROJECT / "assets" / "source-archive" / "Website Digital Concepts Factory BV"
DST = PROJECT / "assets" / "photos"
REPORTS = DST / "reports"  # already moved here

# Map section folder slug → page area for nicer prefixes
SECTION_LABELS = {
    "01-home": "home",
    "02-talent-aantrekken": "talent-aantrekken",
    "02a-innovatie-talent": "talent-aantrekken-innovatie",
    "02b-employer-branding": "employer-branding",
    "02c-waarom-werkgevers": "waarom-werkgevers",
    "02d-dooh-effectief": "dooh-effectief",
    "03-talent-behouden": "talent-behouden",
    "03a-innovatie-behoud": "talent-behouden-innovatie",
    "03b-arbeidsvoorwaarden": "arbeidsvoorwaarden",
    "03c-vervangingskosten": "vervangingskosten",
    "03d-bereken-kosten": "bereken-kosten",
    "04-ziekteverzuim": "ziekteverzuim",
    "04a-innovatie-verzuim": "ziekteverzuim-innovatie",
    "04b-gevolgen-verzuim": "gevolgen-verzuim",
    "05-inkoop": "inkoop",
    "05a-innovatie-inkoop": "inkoop-innovatie",
    "05b-aanbesteden": "aanbesteden",
    "05c-contractmanagement": "contractmanagement",
    "06-marketing": "marketing",
    "06a-innovatie-marketing": "marketing-innovatie",
    "07-over-ons": "over-ons",
    "07a-visie-kernwaarden": "visie-kernwaarden",
    "07b-team": "team",
}


def md5(path: Path) -> str:
    h = hashlib.md5()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def slugify(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def parse_reports() -> dict[str, str]:
    """Return dict: original-filename → suggested kebab-case name (without .png)."""
    mapping: dict[str, str] = {}
    if not REPORTS.exists():
        return mapping
    for report in REPORTS.glob("*.md"):
        text = report.read_text(encoding="utf-8")
        # Match markdown table rows: | <filename>.png | <description> | <suggested> |
        # Allow ".png" or absent in suggested cell
        for m in re.finditer(
            r"\|\s*([0-9a-z][0-9a-z\-]+-\d+\.png)\s*\|[^|]*\|\s*([^|]+?)\s*\|",
            text,
            re.IGNORECASE,
        ):
            orig = m.group(1).strip().lower()
            suggested = m.group(2).strip()
            # Clean up: drop .png suffix, slugify
            suggested = re.sub(r"\.png$", "", suggested, flags=re.IGNORECASE)
            suggested = slugify(suggested)
            if suggested and not re.match(r"^image[-_]?\d+$", suggested):
                mapping[orig] = suggested
    return mapping


def main():
    if DST.exists():
        shutil.rmtree(DST)
    DST.mkdir(parents=True)

    suggested_names = parse_reports()
    print(f"Loaded {len(suggested_names)} suggested names from reports")

    seen_hashes: dict[str, Path] = {}  # hash → first destination path
    index_rows: list[dict] = []

    for section_dir in sorted(SRC.iterdir()):
        if not section_dir.is_dir():
            continue
        if section_dir.name == "reports":
            continue
        label = SECTION_LABELS.get(section_dir.name, section_dir.name)
        target_dir = DST / label
        target_dir.mkdir(parents=True, exist_ok=True)

        files = sorted([p for p in section_dir.iterdir() if p.suffix.lower() == ".png"])
        counter = 1
        for src_path in files:
            digest = md5(src_path)
            duplicate_of = seen_hashes.get(digest)
            orig_name = src_path.name.lower()
            suggested = suggested_names.get(orig_name)

            if duplicate_of:
                # Skip writing — record duplicate
                index_rows.append({
                    "section": label,
                    "original": src_path.name,
                    "renamed_to": "(duplicate)",
                    "duplicate_of": str(duplicate_of.relative_to(DST)),
                    "hash": digest,
                    "size_kb": src_path.stat().st_size // 1024,
                    "suggested": suggested or "",
                })
                continue

            # Pick new name
            if suggested:
                base = f"{label}-{suggested}"
            else:
                base = f"{label}-{counter:02d}"
            # Ensure uniqueness within target dir
            new_name = f"{base}.png"
            n = 2
            while (target_dir / new_name).exists():
                new_name = f"{base}-{n}.png"
                n += 1

            dst_path = target_dir / new_name
            shutil.copy2(src_path, dst_path)
            seen_hashes[digest] = dst_path

            index_rows.append({
                "section": label,
                "original": src_path.name,
                "renamed_to": new_name,
                "duplicate_of": "",
                "hash": digest,
                "size_kb": src_path.stat().st_size // 1024,
                "suggested": suggested or "",
            })
            counter += 1

    # Write index
    index_path = DST / "_index.csv"
    with open(index_path, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=[
            "section", "original", "renamed_to", "duplicate_of",
            "hash", "size_kb", "suggested",
        ])
        w.writeheader()
        w.writerows(index_rows)

    total = len(index_rows)
    kept = len([r for r in index_rows if not r["duplicate_of"]])
    dups = total - kept
    print(f"Total: {total}, unique kept: {kept}, duplicates skipped: {dups}")
    print(f"Index written to {index_path}")


if __name__ == "__main__":
    main()
