import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio';
import { useArgs } from '@storybook/client-api';
import { sampleData } from './sample.data';

export default {
  title: `Components/Radio`,
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  return <Radio {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options: sampleData,
};
