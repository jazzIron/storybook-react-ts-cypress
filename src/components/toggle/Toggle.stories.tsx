import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Toggle } from './Toggle';
import { useState, ChangeEvent } from 'react';

export default {
  title: `Components/Toggle`,
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  // const [{ value }, updateArgs] = useArgs();
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   updateArgs({ checked: e.target.value });
  // };

  return <Toggle {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
