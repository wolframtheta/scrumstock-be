/**
 * store controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::store.store', {
  getAllStoresByMe: async (ctx, next) => {
    try {
      const response = await strapi.service('api::store.store').getAllStoresByMe();
      ctx.body = response;
    } catch (err) {
      ctx.body = err;
    }
  },
  getAllStoresJoined: async (ctx, next) => {
    try {
      const response = await strapi.service('api::store.store').getAllStoresJoined();
      ctx.body = response;
    } catch (err) {
      ctx.body = err;
    }
  },
  getStoreById: async (ctx, next) => {
    try {
      const response = await strapi.service('api::store.store').getStoreById();
      ctx.body = response;
    } catch (err) {
      ctx.body = err;
    }
  }


});
