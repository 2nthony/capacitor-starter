/// <reference types="@capacitor/splash-screen" />

import { ip } from "address";
import type { CapacitorConfig } from "@capacitor/cli";

const isDev = process.env.APP_ENV === "dev";

const config: CapacitorConfig = {
  appId: "com.capacitorjs.app",
  appName: "capacitor-app",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 6000,
    },
  },
};

if (isDev) {
  config.server = {
    url: `http://${ip()}:5173`,
    cleartext: true,
  };
}

export default config;
