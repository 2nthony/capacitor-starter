/// <reference types="@capacitor/splash-screen" />

import { ip } from "address";
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capacitorjs.app",
  appName: "capacitor-app",
  bundledWebRuntime: false,
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 6000,
    },
  },
  server: {
    url: `http://${ip()}:5173`,
  },
};

export default config;
