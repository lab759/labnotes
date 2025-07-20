import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/labnotes/",
  title: "Lab759 Docs",
  description: "Notes on used MCU boards and other hardware",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Hardware",
        items: [
          {
            text: "MCU Boards",
            link: "/hardware/mcuboards",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
