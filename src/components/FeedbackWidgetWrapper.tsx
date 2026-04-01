"use client";

import { FeedbackWidget } from "./FeedbackWidget";

const appId = process.env.NEXT_PUBLIC_THUEBRIDGE_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_THUEBRIDGE_API_KEY;
const apiBaseUrl = process.env.NEXT_PUBLIC_THUEBRIDGE_API_BASE_URL;

export default function FeedbackWidgetWrapper() {
  if (!appId || !apiKey) return null;
  return (
    <FeedbackWidget appId={appId} apiKey={apiKey} apiBaseUrl={apiBaseUrl} />
  );
}
