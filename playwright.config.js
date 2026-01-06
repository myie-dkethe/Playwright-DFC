// @ts-check
//import dotenv from "dotenv";
const dotenv = require( "dotenv");
console.log('ENV:', process.env.ENV);
const { defineConfig, devices } = require("@playwright/test");
//import { defineBddConfig } from "playwright-bdd";
const { defineBddConfig } = require("playwright-bdd");
require('dotenv').config({ path: `./env/.env.${process.env.ENV}` });

//dotenv.config({ path: `./env/.env.${process.env.ENV}` });

const testDir = defineBddConfig({
  features: "tests/features/*.feature",
  steps: ["tests/steps/***.steps.js", "tests/fixture/fixtures.js"],
});



module.exports = defineConfig({
  testDir,
  // Run all tests in parallel.
  fullyParallel: false,
  reporter: [["list"], ["html", { open: "never" }]], // This will generate an HTML report
  use: {
    screenshot: "on", // Take screenshots for tests
    video: {
      mode: "on", // Record video for all tests
      size: { width: 640, height: 480 },
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: 'Microsoft Edge',
      use: {
        // Supported Microsoft Edge channels are: msedge, msedge-beta, msedge-dev, msedge-canary
        channel: 'msedge',
      },
    },
  ],
});
