// Inside src/stories/2-Header.stories.js

import React from "react";

import Bar from "../Components/Bar";

export default {
  title: "Bar",
  component: Bar,
};

export const Text = () => <Bar>Yeti Bridge</Bar>;
