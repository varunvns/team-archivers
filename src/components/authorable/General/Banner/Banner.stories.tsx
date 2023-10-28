// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Banner, { BannerProps } from './Banner';
import defaultData from './Banner.mock-data';

const meta: Meta<typeof Banner> = {
  title: 'Authorable/General/Banner',
  component: Banner,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  render: (args) => {
    return <Banner {...(expandObj({ ...args }) as BannerProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
