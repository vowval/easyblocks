import { NoCodeComponentDefinition } from "@easyblocks/core";

export const ExternalCardDefinition: NoCodeComponentDefinition = {
  id: "externalCard",
  label: "External Card",
  type: "card",
  allowSave: true,
  schema: [
    {
      prop: "externalCard",
      type: "externalCard",
    },
  ],
};
