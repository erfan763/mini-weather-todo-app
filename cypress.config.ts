import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    // setupNodeEvents(on, config) {},
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: ["**/**/*.comp-spec.{js,ts,jsx,tsx}", "**/**/*.cy.{js,ts,jsx,tsx}"],
  },
});
