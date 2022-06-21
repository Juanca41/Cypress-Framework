const cypress = require('cypress')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    batch: {
      id: '7cb45098-eb62-4d96-923a-5c3614af7bae',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 31077,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://admin:BetterVetisAwesome@app-qa.bettervet.com',
    excludeSpecPattern: '**/2-advanced-examples/*',
  },
  video: true,
  screenshotsFolder: "cypress/screenshots",
  env:{
    user:"juancarlosgularte@bettervet.com",
    password:"Helloworld10"
  },
  projectId: "7b7ug4",
  // reporter: "cypress-multi-reporters",
  // reporterOptions: {
  //   configFile: "reporterOptions.json"
  // }

  //Files will be created in ./mochawesome-report
  reporter: "mochawesome",
  reporterOptions: {
        "overwrite": false,
        "html": false,
        "json": true
    },
  retries: {
    runMode: 1, //For the headless mode
    openMode: 2 //For the open runner mode (cypress UI runner)
  }
})
