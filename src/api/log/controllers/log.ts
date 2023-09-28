/**
 * log controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::log.log', {
  getLogsByStore: async (ctx, next) => {
    try {
      const response = await strapi.service('api::log.log').getLogsByStore();
      ctx.body = response;
    } catch (err) {
      ctx.body = err;
    }
  }
});
