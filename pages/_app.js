import '../styles/globals.css'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import Layout from "./components/Layout"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_ROUTE_ID,
  integrations: [new BrowserTracing({
    tracingOrigins: ["localhost", "https://sentry-test-sage.vercel.app/"],
  })],
  tracesSampleRate: 1.0,
});

export function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default Sentry.withProfiler(MyApp);
