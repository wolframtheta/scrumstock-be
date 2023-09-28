/**
 * item service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::item.item', {
  // async getAllStoresByMe(...args) {
  //   const { results, pagination } = await strapi.service('api::store.store').find({
  //     populate: { users: true }
  //   })
  //   const user = strapi.requestContext.get().state.user;
  //   return { data: results.filter(store => store.users.some(u => u.id === user.id)), pagination}
  // },
  // async getAllStoresJoined(...args) {
  //   const { results, pagination } = await strapi.service('api::store.store').find({
  //     populate: { users: true }
  //   })
  //   const user = strapi.requestContext.get().state.user;
  //   results.map(store => {
  //     store['isJoined'] = store.users.some(u => u.id === user.id);
  //     return store;
  //   })
  //   return { data: results, pagination}
  // },
  // async getStoreById(...args) {
  //   const { results, pagination } = await strapi.service('api::store.store').find({
  //     populate: { users: true }
  //   })
  //   const params = strapi.requestContext.get().params;
  //   return { data: results.find(s => s.id === Number(params['id'])), pagination}
  // }
  async getAllItemsStore(...args) {
    const params = strapi.requestContext.get().params;

    const { results, pagination } = await strapi.service('api::item.item').find({
      populate: { store: true },
      filters: {
        store: params['id']
      }
    })
    return { data: results, pagination }
  },

  async createItemStore(ctx) {
    const params = strapi.requestContext.get().params;
    const body = ctx.request.body;
    body.quantity = body.quantity ? Number(body.quantity) : 0;
    body.store = {
      connect: [params.id]
    }
    const res = await strapi.service('api::item.item').create({
      data: body
    })
    return { data: res }
  }
});
