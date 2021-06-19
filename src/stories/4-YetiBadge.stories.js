// Button.stories.js

import React from "react";
import YetiBadge from "../Components/YetiBadge";

export default {
  title: "YetiBadge",
  component: YetiBadge
};

// export const Text = () => <YetiBadge img src={"../YetiBadge/redAvaxLogo.svg"} alt={"redAvaxLogo"} />

export const Primary = () => {
  return <img src={"redAvaxLogo.svg"} alt={"redAvaxLogo"} />;
};

// //👇 We create a “template” of how args map to rendering
// const YetiBadge = (args) => <YetiBadge {...args} />;

// //👇 Each story then reuses that template
// export const Primary = YetiBadge.bind({});

// Primary.args = {
//   primary: true,
//   label: "YetiBadge",
// };

// export const Secondary = YetiBadge.bind({});

// Secondary.args = {
//   ...Primary.args,
//   primary: false,
// };
