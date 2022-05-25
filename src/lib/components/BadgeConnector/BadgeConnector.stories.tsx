import { Meta, Story } from '@storybook/react/types-6-0';

import { BadgeConnector, BadgeConnectorProps } from '.';

export default {
  title: 'Components/BadgeConnector',
  component: BadgeConnector,
} as Meta;

const Template: Story<BadgeConnectorProps> = (args) => (
  <div className="flex w-80 items-center">
    <BadgeConnector {...args} />
  </div>
);

export const DefaultBadgeConnector = Template.bind({});
DefaultBadgeConnector.storyName = 'Default';
DefaultBadgeConnector.args = {
  color: 'blue',
};
