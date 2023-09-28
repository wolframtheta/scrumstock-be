module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/stores/me',
      handler: 'store.getAllStoresByMe',
    },
    {
      method: 'GET',
      path: '/stores/joined',
      handler: 'store.getAllStoresJoined'
    },
    {
      method: 'GET',
      path: '/stores/:id',
      handler: 'store.getStoreById'
    }
  ],
}
