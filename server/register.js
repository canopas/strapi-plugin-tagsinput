"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "tags",
    plugin: "tagsinput",
    type: "json",
  });
};
