//Newslater widget
import React, { Component, Fragment } from 'react'

// chart
import StackedLineChart from 'components/Charts/StackedLineChart';

export default class NewslaterCampaign extends Component {
   render() {
      return (
         <Fragment>
            <StackedLineChart />
         </Fragment>
      )
   }
}
