module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/logs/:idStore',
      handler: 'log.getLogsByStore',
    }
  ],
}
