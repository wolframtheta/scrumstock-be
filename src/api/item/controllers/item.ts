/**
 * item controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::item.item', {
  getAllItemsStore: async (ctx, next) => {
    try {
      // console.log('Controoolerr Hereee', strapi);
      const response = await strapi.service('api::item.item').getAllItemsStore();
      ctx.body = response;
    } catch (err) {
      ctx.body = err;
    }
  },
  createItemStore: async (ctx, next) => {
    try {
      // console.log('Controoolerr Hereee', strapi);
      const response = await strapi.service('api::item.item').createItemStore(ctx);
      ctx.body = response;
    } catch (err) {
      ctx.body = err;
    }
  }


});
