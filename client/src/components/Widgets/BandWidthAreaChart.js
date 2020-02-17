/**
 * BandWidth Area Chart Widget
 */
import React from 'react';

// dynamic line chart
import DynamicLineChart from 'components/Charts/DynamicLineChart';

// intl messages
import IntlMessages from 'util/IntlMessages';

// rct card box
import { RctCard, RctCardContent } from 'components/RctCard';

const BandwidthAreaChart = () => (
    <RctCard customClasses="gradient-primary overflow-hidden">
        <div className="p-20">
            <h2><IntlMessages id="widgets.bandwidthUse" /></h2>
            <h2>50 GB</h2>
        </div>
        <RctCardContent noPadding>
            <DynamicLineChart />
        </RctCardContent>
    </RctCard>
);

export default BandwidthAreaChart;
