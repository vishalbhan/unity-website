import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/ColorChangingSection")),
  {
    name: "ColorChangingSection",
    friendlyName: "Color Changing Section",
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
    friendlyName: "Checklist Documents",
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
            defaultValue: "Checklist Item"
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
                defaultValue: "Document Title"
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
    friendlyName: "FAQs",
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
            defaultValue: "Question"
          },
          {
            name: "answer",
            type: "text",
            required: true,
            defaultValue: "Answer"
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
    friendlyName: "Blog Preview",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ProgressCarousel")),
  {
    name: "ProgressCarousel",
    friendlyName: "Progress Bar Carousel",
    inputs: [
      {
        name: "sections",
        type: "list",
        required: true,
        subFields: [
          {
            name: "title",
            type: "text",
            required: true,
            defaultValue: "Section Name"
          },
          {
            name: "cards",
            type: "list",
            required: true,
            subFields: [
              {
                name: "content",
                type: "richText",
                required: true,
                defaultValue: "Card Content"
              },
              {
                name: "illustration",
                type: "code",
                required: true,
                defaultValue: "<svg>...</svg>"
              }
            ],
          },
        ],
      },
    ],
  }
);
