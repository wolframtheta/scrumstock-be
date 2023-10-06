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

export default [
  // ...
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['*'],
      keepHeaderOnError: true,
    },
  },
  // ...
]
