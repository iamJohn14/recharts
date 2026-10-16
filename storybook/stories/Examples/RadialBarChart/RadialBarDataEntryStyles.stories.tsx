import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Legend, RadialBar, RadialBarChart, RechartsThemeProvider, Tooltip } from '../../../../src';

export default {
  title: 'Examples/RadialBarChart/Data entry styles',
  component: RadialBarChart,
} satisfies Meta<typeof RadialBarChart>;

const theme = {
  graphicalItems: [{ fill: 'purple', stroke: 'indigo' }],
};

const strokeOnlyData = [
  { name: 'Stroke only', value: 70, stroke: 'lime' },
  { name: 'Theme', value: 40 },
];

/**
 * Left: a stroke-only entry ignores the theme fill. Its legend icon and tooltip use the stroke.
 * Right: an explicit RadialBar fill wins over the entry stroke in both the sector and the tooltip.
 */
export const DataEntryStyles: StoryObj = {
  render: () => {
    return (
      <RechartsThemeProvider value={theme}>
        <div style={{ display: 'flex', gap: 24, background: 'white', padding: 16 }}>
          <RadialBarChart width={360} height={360} data={strokeOnlyData}>
            <RadialBar dataKey="value" isAnimationActive={false} />
            <Legend />
            <Tooltip defaultIndex={0} />
          </RadialBarChart>
          <RadialBarChart width={360} height={360} data={[{ name: 'Explicit fill', value: 70, stroke: 'lime' }]}>
            <RadialBar dataKey="value" fill="#123456" isAnimationActive={false} />
            <Legend />
            <Tooltip defaultIndex={0} />
          </RadialBarChart>
        </div>
      </RechartsThemeProvider>
    );
  },
};
