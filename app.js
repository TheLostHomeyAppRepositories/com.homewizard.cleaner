'use strict';

const Homey = require('homey');
const axios = require('axios');

module.exports = class HomewizardCleanerApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('HomeWizard Cleaner has been initialized');
  }

};
