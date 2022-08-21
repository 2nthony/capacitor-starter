/// <reference types="@capacitor/splash-screen" />

import { ip } from "address";
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "myAppName.2nthony.com",
  appName: "capacitor-app",
  bundledWebRuntime: false,
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
  server: {
    url: `http://${ip()}:5173`,
  },
};

export default config;
