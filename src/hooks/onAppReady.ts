import { waitFor } from "@/helpers";
import { SplashScreen } from "@capacitor/splash-screen";

export function onAppReady() {
  waitFor(200).then(() => SplashScreen.hide());
}
