exports.config = {
  user: process.env.LT_USERNAME || "jayak",
  key: process.env.LT_ACCESS_KEY || "b4JOibh8UrnB8Ce2eL2VgHtc9P91eu4xCSc2IdXA7nibD30lX1",

  updateJob: false,
  specs: ["../test/**/*.demo.js"],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: "webdriverIO-parallel_test",
    build: "webdriverIO-lambdatest",
    visual: true,
    video: true,
    console: true,
    network: true,
  },

  capabilities: [
    {
      browserName: "chrome",
      version: "latest",
      platform: "WIN10",
    },
    {
      browser: "firefox",
      version: "latest",
      platform: "WIN7",
    },
    {
      browser: "internet explorer",
      version: "latest",
      platform: "WIN10",
    },
    {
      browser: "MicrosoftEdge",
      version: "latest",
      platform: "WIN10",
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
