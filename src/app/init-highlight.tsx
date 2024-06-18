"use client";
import { H } from "highlight.run";
import { useEffect } from "react";
import Cookies from "js-cookie";

export function InitHighlight() {
  useEffect(() => {
    const initResult = H.init("lgxj7qdm", {
      serviceName: "frontend-app",
      debug: true,
      tracingOrigins: true,
      networkRecording: {
        enabled: true,
        recordHeadersAndBody: true,
        urlBlocklist: [
          // insert full or partial urls that you don't want to record here
          // Out of the box, Highlight will not record these URLs (they can be safely removed):
          "https://www.googleapis.com/identitytoolkit",
          "https://securetoken.googleapis.com",
        ],
      },
    });

    H.identify("otel@vercel.com");

    if (initResult?.sessionSecureID) {
      Cookies.set("sessionSecureID", initResult.sessionSecureID);

      console.log("sessionSecureID", initResult?.sessionSecureID);
    }
  }, []);

  return null;
}
