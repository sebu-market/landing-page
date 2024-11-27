import type { Meta, StoryObj } from '@storybook/react';

import { LandingPage } from './landing-page';

const meta = {
  component: LandingPage,
} satisfies Meta<typeof LandingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};