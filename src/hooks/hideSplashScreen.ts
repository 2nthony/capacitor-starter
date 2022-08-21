import { waitFor } from "@/helpers";
import { SplashScreen } from "@capacitor/splash-screen";

export function hideSplashScreen() {
  waitFor(200).then(() => SplashScreen.hide());
}
