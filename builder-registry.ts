import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Button")),
  {
    name: "Button",
    friendlyName: "Button",
    inputs: [
      {
        name: "text",
        type: "string",
        friendlyName: "Text",
        required: true,
        defaultValue: "Click Me",
      },
      {
        name: "type",
        type: "string",
        friendlyName: "Type",
        required: true,
        defaultValue: "primary",
        enum: [
          {
            label: "Primary",
            value: "primary",
          },
          {
            label: "Secondary",
            value: "secondary",
          },
          {
            label: "Tertiary",
            value: "tertiary",
          },
          {
            label: "Link",
            value: "link",
          }
        ],
      },
      {
        name: "href",
        type: "string",
        friendlyName: "Link",
        required: true,
        defaultValue: "/",
      },
      {
        name: "icon",
        type: "string",
        friendlyName: "Icon",
        required: false,
        defaultValue: "arrow-right",
        enum: [
          {
            label: "None",
            value: "",
          },
          {
            label: "Arrow Right",
            value: "arrow-right",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ColorChangingSection")),
  {
    name: "ColorChangingSection",
    friendlyName: "Color Changing Section",
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Text",
          options: { text: "I am child text block!" },
        },
      },
    ],
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
        name: "theme",
        type: "string",
        friendlyName: "Theme",
        enum: [
          {
            label: "Light",
            value: "light",
          },
          {
            label: "Dark",
            value: "dark",
          },
        ],
        required: true,
        defaultValue: "light",
      },
      {
        name: "checklistItems",
        type: "list",
        required: true,
        defaultValue: [
          {
            title: "Checklist Item",
            documents: [
              {
                title: "Name of Document",
              },
            ],
          },
        ],
        subFields: [
          {
            name: "title",
            type: "text",
            required: true,
            defaultValue: "Checklist Item",
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
                defaultValue: "Document Title",
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
        name: "theme",
        type: "string",
        friendlyName: "Theme",
        enum: [
          {
            label: "Light",
            value: "light",
          },
          {
            label: "Dark",
            value: "dark",
          },
        ],
        required: true,
        defaultValue: "light",
      },
      {
        name: "faqs",
        type: "list",
        required: true,
        subFields: [
          {
            name: "question",
            type: "string",
            required: true,
            defaultValue: "Question",
          },
          {
            name: "answer",
            type: "text",
            required: true,
            defaultValue: "Answer",
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
            defaultValue: "Section Name",
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
                defaultValue: "Card Content",
              },
              {
                name: "illustration",
                type: "code",
                required: true,
                defaultValue: "<svg>...</svg>",
              },
            ],
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Typewriter")),
  {
    name: "Typewriter",
    friendlyName: "Typewriter",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/EMICalculator")),
  {
    name: "EMICalculator",
    friendlyName: "EMI Calculator",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/BoardOfDirectors")),
  {
    name: "BoardOfDirectors",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ManagementTeam")),
  {
    name: "ManagementTeam",
  }
);
