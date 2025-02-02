// import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  SiVuedotjs,
  SiReact,
  SiNuxtdotjs,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiPytorch,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiKotlin,
  SiCplusplus,
  SiLinkedin,
  SiGithub,
  SiMaildotru,
} from "oh-vue-icons/icons/si";

// import * as SiIcons from "oh-vue-icons/icons/si";

const Si = Object.values({
  SiVuedotjs,
  SiReact,
  SiNuxtdotjs,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiPytorch,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiKotlin,
  SiCplusplus,
  SiLinkedin,
  SiGithub,
  SiMaildotru,
});
addIcons(...Si);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
