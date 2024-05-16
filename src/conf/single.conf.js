exports.config = {
    user: process.env.LT_USERNAME || "jayak",
    key: process.env.LT_ACCESS_KEY || "b4JOibh8UrnB8Ce2eL2VgHtc9P91eu4xCSc2IdXA7nibD30lX1",
  
    updateJob: false,
    specs: ["../test/**/*.demo.js"],
    exclude: [],
  
    capabilities: [
      {
        browserName: "chrome",
        version: "latest",
        platform: "WIN10",
        name: "webdriverIO-single_test",
        build: "webdriverIO-lambdatest",
        visual: false,
        video: true,
        console: false,
        network: false,
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

