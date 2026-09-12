import posthog from "posthog-js";

const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string | undefined;
const apiHost =
  (import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string | undefined) ??
  "https://us.i.posthog.com";
const deployContext = import.meta.env.VITE_CONTEXT as string | undefined;

/**
 * Analytics stays off unless a key is configured, and never runs on Netlify
 * deploy previews or branch deploys so production numbers stay clean.
 */
const isEnabled =
  Boolean(apiKey) &&
  (deployContext === undefined || deployContext === "production");

let initialized = false;

export const initAnalytics = () => {
  if (!isEnabled || initialized || !apiKey) return;
  initialized = true;

  posthog.init(apiKey, {
    api_host: apiHost,
    // Client-side routes never reload the page, so pageviews are captured
    // manually via `usePageView` instead.
    capture_pageview: false,
    capture_pageleave: true,
    // Avoid creating person profiles for anonymous recruiters/visitors.
    person_profiles: "identified_only",
    autocapture: true,
  });
};

export const trackPageView = (path: string) => {
  if (!isEnabled) return;

  posthog.capture("$pageview", {
    path,
    $current_url: `${window.location.origin}${path}`,
  });
};

export const track = (event: string, properties?: Record<string, unknown>) => {
  if (!isEnabled) return;

  posthog.capture(event, properties);
};
