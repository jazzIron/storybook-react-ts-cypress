import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_SHAPE, BUTTON_SIZE, BUTTON_THEME } from '.';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  theme: BUTTON_THEME.DEFAULT,
  size: BUTTON_SIZE.DEFAULT,
  shape: BUTTON_SHAPE.DEFAULT,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  theme: BUTTON_THEME.PRIMARY,
  size: BUTTON_SIZE.DEFAULT,
  shape: BUTTON_SHAPE.DEFAULT,
};

export const Link = Template.bind({});
Link.args = {
  children: 'Link',
  theme: BUTTON_THEME.LINK,
  size: BUTTON_SIZE.DEFAULT,
  shape: BUTTON_SHAPE.DEFAULT,
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  theme: BUTTON_THEME.TEXT,
  size: BUTTON_SIZE.DEFAULT,
  shape: BUTTON_SHAPE.DEFAULT,
};

export const Circle = Template.bind({});
Circle.args = {
  children: 'A',
  theme: BUTTON_THEME.PRIMARY,
  size: BUTTON_SIZE.DEFAULT,
  shape: BUTTON_SHAPE.CIRCLE,
};

export const Round = Template.bind({});
Round.args = {
  children: 'Round',
  theme: BUTTON_THEME.PRIMARY,
  size: BUTTON_SIZE.DEFAULT,
  shape: BUTTON_SHAPE.ROUND,
};
