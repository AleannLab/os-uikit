import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '.';

import { ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Components/Button',
  component: Button.Group,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <Button.Group {...args}>
    <Button color="blue">Profile</Button>
    <Button color="blue">Settings</Button>
    <Button color="blue">Messages</Button>
  </Button.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'ButtonGroup';
DefaultAvatarGroup.args = {};
