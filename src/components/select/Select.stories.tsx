import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import { sampleData } from './sample.data';

export default {
  title: `Components/Select`,
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: sampleData,
};
