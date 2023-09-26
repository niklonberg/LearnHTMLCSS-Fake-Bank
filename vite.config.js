import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/LearnHTMLCSS-Fake-Bank/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        onboarding: resolve(__dirname, "pages/onboarding.html"),
        dashboard: resolve(__dirname, "pages/dashboard.html"),
        profile: resolve(__dirname, "pages/profile.html"),
        services: resolve(__dirname, "pages/services.html"),
        signin: resolve(__dirname, "pages/signin.html"),
        transactions: resolve(__dirname, "pages/transactions.html"),
      },
    },
  },
});
