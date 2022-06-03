'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('category')
      .service('category')
      .getWelcomeMessage();
  },
};
