// export default [
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];

module.exports = {
  //...
  settings: {
    cors: {
      origin: ['*'], //allow all origins
      headers: ['*'], //allow all headers
    },
  },
};
