import { NoCodeComponentDefinition } from "@easyblocks/core";

export const ArticleCardDefinition: NoCodeComponentDefinition = {
  id: "article",
  label: "Article Card",
  type: "card",
  allowSave: true,
  schema: [
    {
      prop: "article",
      type: "article",
    },
  ],
};
