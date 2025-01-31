// import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as SiIcons from "oh-vue-icons/icons/si";
import * as MdIcons from "oh-vue-icons/icons/md";

const Fa = Object.values({ ...FaIcons });
const Si = Object.values({ ...SiIcons });
const Md = Object.values({ ...MdIcons });
addIcons(...Fa, ...Si, ...Md);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
