import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Checkbox } from './CheckBox';
import { sampleData } from './sample.data';

export default {
  title: `Components/Checkbox`,
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  const handleChange = (value: string) => {
    updateArgs({ value: value });
  };
  return <Checkbox {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: sampleData,
};
