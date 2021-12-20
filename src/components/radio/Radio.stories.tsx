import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio';
import { useArgs } from '@storybook/client-api';

const radioData = [
  {
    id: '1',
    label: '사과',
    checked: false,
    disabled: false,
    value: '0',
  },
  {
    id: '2',
    label: '오렌지',
    checked: false,
    disabled: false,
    value: '1',
  },
  {
    id: '3',
    label: '키위',
    checked: false,
    disabled: false,
    value: '2',
  },
];

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
  options: radioData,
};
