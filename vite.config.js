import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/LearnHTMLCSS-Fake-Bank/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        onboarding: "pages/onboarding.html",
        dashboard: "pages/dashboard.html",
        profile: "pages/profile.html",
        services: "pages/services.html",
        signin: "pages/signin.html",
        transactions: "pages/transactions.html",
      },
    },
  },
});
