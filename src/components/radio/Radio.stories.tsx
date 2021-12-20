import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio';
import { useArgs } from '@storybook/client-api';
import { sampleData } from './sample.data';

export default {
  title: `Components/Radio`,
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  const handleChange = (value: string) => {
    updateArgs({ value: value });
  };
  return <Radio {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: sampleData,
};
