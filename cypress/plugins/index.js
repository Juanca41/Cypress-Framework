/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const fs = require("fs-extra")
const path = require("path")
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("before:browser:launch", (browser = {}, args) => {
    if(browser.name === "chrome"){
      args.push("--start-fullscreen")
      // args.push("--incognito")
      return args
    }
    if(browser.name === "electron"){
      args["fullscreen"] = true
      return args
    }
  })

  function processConfigName(on, config) {
    const file = config.env.name || "default"
    return getConfigFile(file).then(function (file) {
      //return file object
      return file;
    })
  }

  function getConfigFile(file) {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
  }

  //Return the configuration file details
  return processConfigName(on, config);
}

// const cucumber = require('cypress-cucumber-preprocessor').default
// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber())
// }
require('@applitools/eyes-cypress')(module);

