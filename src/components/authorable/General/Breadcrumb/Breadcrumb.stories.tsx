// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';
import defaultData from './Breadcrumb.mock-data';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Authorable/General/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => {
    return <Breadcrumb {...(expandObj({ ...args }) as BreadcrumbProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
