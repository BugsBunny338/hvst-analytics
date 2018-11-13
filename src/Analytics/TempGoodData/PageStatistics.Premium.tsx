import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

export default class PremiumPageStatistics extends Component {
  public render() {
    return (
      <div style={{ height: 300 }} className="s-visualization-chart">
        Premium Page Stats
        <Visualization
          projectId={'r7bq1uyjqe2trz9itwhu2dr3kt5elrhq'}
          identifier='aarabodYdMhq'
        />
      </div>
    )
  }
}
