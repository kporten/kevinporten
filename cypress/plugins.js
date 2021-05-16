const injectDevServer = require('@cypress/react/plugins/next');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    injectDevServer(on, config);
  }

  return config;
};
