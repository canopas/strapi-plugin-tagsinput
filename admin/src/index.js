import pluginId from "./pluginId";

export default {
  register(app) {
    app.customFields.register({
      name: "tags",
      pluginId: pluginId,
      type: "text",
      intlLabel: {
        id: "tagsinput.tag.label",
        defaultMessage: "TagsInput",
      },
      intlDescription: {
        id: "tagsinput.tag.description",
        defaultMessage: "TagsInput to add custom tags",
      },
      components: {
        Input: async () =>
          import(
            /* webpackChunkName: "input-component" */ "./components/Input"
          ),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: "tagsinput.tags.section.apiUrl",
              defaultMessage: "API Url",
            },
            items: [
              {
                intlLabel: {
                  id: "tagsinput.tags.section.apiUrl",
                  defaultMessage: "Rest API URL for suggestions",
                },
                name: "options.apiUrl",
                type: "text",
                value: "",
                options: [],
              },
            ],
          },
        ],
      },
    });
  },
};
