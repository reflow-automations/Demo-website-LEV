"use client";

import { useEffect } from "react";

type CalFunction = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalFunction>;
  q?: unknown[][];
};

type CalWindow = Window & {
  Cal?: CalFunction;
};

const CAL_NAMESPACE = "30min";
const CAL_TARGET_ID = "my-cal-inline-30min";

function loadCalEmbed() {
  const calWindow = window as CalWindow;
  const target = document.getElementById(CAL_TARGET_ID);

  if (!target || target.dataset.calInitialized === "true") return;
  target.dataset.calInitialized = "true";

  const pushToQueue = (cal: CalFunction, args: unknown[]) => {
    cal.q = cal.q || [];
    cal.q.push(args);
  };

  if (!calWindow.Cal) {
    calWindow.Cal = function (...args: unknown[]) {
      const cal = calWindow.Cal as CalFunction;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];

        const script = document.createElement("script");
        script.src = "https://app.cal.com/embed/embed.js";
        script.async = true;
        document.head.appendChild(script);

        cal.loaded = true;
      }

      if (args[0] === "init") {
        const namespace = args[1];
        const api = function (...apiArgs: unknown[]) {
          pushToQueue(api, apiArgs);
        } as CalFunction;

        api.q = api.q || [];

        if (typeof namespace === "string") {
          cal.ns = cal.ns || {};
          cal.ns[namespace] = cal.ns[namespace] || api;
          pushToQueue(cal.ns[namespace], args);
          pushToQueue(cal, ["initNamespace", namespace]);
        } else {
          pushToQueue(cal, args);
        }

        return;
      }

      pushToQueue(cal, args);
    };
  }

  const Cal = calWindow.Cal;
  Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });

  const namespacedCal = Cal.ns?.[CAL_NAMESPACE];
  namespacedCal?.("inline", {
    elementOrSelector: `#${CAL_TARGET_ID}`,
    config: {
      layout: "month_view",
      useSlotsViewOnSmallScreen: "true",
    },
    calLink: "len-v-fiuafk/30min",
  });

  namespacedCal?.("ui", {
    hideEventTypeDetails: false,
    layout: "month_view",
  });
}

export default function CalEmbed() {
  useEffect(() => {
    loadCalEmbed();
  }, []);

  return (
    <div className="relative w-full">
      <div
        id={CAL_TARGET_ID}
        className="w-full overflow-auto bg-paper-deep border border-mist rounded-3xl"
        style={{ minHeight: 620 }}
      />
    </div>
  );
}
