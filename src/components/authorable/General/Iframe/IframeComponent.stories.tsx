// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Iframe, { IframeProps } from './IframeComponent';
import defaultData from './IframeComponent.mock-data';

const meta: Meta<typeof Iframe> = {
  title: 'Authorable/General/Iframe',
  component: Iframe,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Iframe>;

export const Default: Story = {
  render: (args) => {
    return <Iframe {...(expandObj({ ...args }) as IframeProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
