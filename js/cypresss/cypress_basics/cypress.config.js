import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    viewportWidth: 1920,
    viewportHeight: 1080
  },
  server: {
    ignore: (xhr) => {
      return true;
    }
  }

});

