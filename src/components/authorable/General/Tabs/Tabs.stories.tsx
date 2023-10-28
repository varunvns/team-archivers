// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Tabs, { TabsProps } from './Tabs';
import defaultData from './Tabs.mock-data';

const meta: Meta<typeof Tabs> = {
  title: 'Authorable/General/Tabs',
  component: Tabs,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => {
    return <Tabs {...(expandObj({ ...args }) as TabsProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
