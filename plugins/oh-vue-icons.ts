// import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
// import * as FaIcons from "oh-vue-icons/icons/fa";
import { FaLinkedin, FaGithub, FaEnvelope } from "oh-vue-icons/icons";
const Fa = Object.values({ FaLinkedin, FaGithub, FaEnvelope });
addIcons(...Fa);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
