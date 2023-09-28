module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/items/store/:id',
      handler: 'item.getAllItemsStore',
    },
    {
      method: 'POST',
      path: '/items/store/:id',
      handler: 'item.createItemStore',
    }
  ],
}
