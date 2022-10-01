import { sleep } from "@/helpers";
import { SplashScreen } from "@capacitor/splash-screen";

export function onAppReady() {
  sleep(200).then(() => SplashScreen.hide());
}
