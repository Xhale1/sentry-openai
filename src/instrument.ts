import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "...",
  // The following lines are required to see the issue
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1,
});
