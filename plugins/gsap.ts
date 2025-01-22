import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { clamp, wrap } from "gsap";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip, Observer, ScrollToPlugin);
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gsap);
  nuxtApp.provide("gsap", gsap);
  nuxtApp.provide("ScrollTrigger", ScrollTrigger);
  nuxtApp.provide("Flip", Flip);

  nuxtApp.provide("Observer", Observer);
  nuxtApp.provide("ScrollToPlugin", ScrollToPlugin);
  //   nuxtApp.provide("clamp", clamp);
  //   nuxtApp.provide("wrap", wrap);
});
