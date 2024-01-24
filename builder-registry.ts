import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/ColorChangingSection")),
  {
    name: "ColorChangingSection",
    inputs: [
      {
        name: "beforeColor",
        type: "color",
        friendlyName: "Before Color",
        required: true,
      },
      {
        name: "bgColor",
        type: "color",
        friendlyName: "After Color",
        required: true,
      },
      {
        name: "text",
        type: "richText",
        friendlyName: "Text",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ChecklistDocuments")),
  {
    name: "ChecklistDocuments",
    inputs: [
      {
        name: "checklistItems",
        type: "list",
        required: true,
        subFields: [
          {
            name: "title",
            type: "text",
            required: true,
          },
          {
            name: "documents",
            type: "list",
            required: true,
            subFields: [
              {
                name: "title",
                type: "string",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/FAQs")),
  {
    name: "FAQs",
    inputs: [
      {
        name: "faqs",
        type: "list",
        required: true,
        subFields: [
          {
            name: "question",
            type: "string",
            required: true,
          },
          {
            name: "answer",
            type: "text",
            required: true,
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/BlogPreview")),
  {
    name: "BlogPreview",
  }
);
