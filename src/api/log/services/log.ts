/**
 * log service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::log.log', {
  async getLogsByStore(...args) {
    const params = strapi.requestContext.get().params;

    const { results, pagination } = await strapi.service('api::log.log').find({
      populate: { user: true, store: true },
      where: {store: params.idStore}
    })
    return { data: results, pagination}
  },
});
