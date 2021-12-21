import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Space } from './Space';

export default {
  title: `Components/Layout/Space`,
  component: Space,
  argTypes: {
    gap: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => <Space {...args} />;

export const Default = Template.bind({});
Default.args = {};
