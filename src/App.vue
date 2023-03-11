<script lang="ts">
import { SplashScreen } from '@capacitor/splash-screen'
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { defineComponent } from 'vue'
import { sleep } from './helpers'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  mounted() {
    sleep(200).then(() => {
      SplashScreen.hide()
    })
  },
})
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>
