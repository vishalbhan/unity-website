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
