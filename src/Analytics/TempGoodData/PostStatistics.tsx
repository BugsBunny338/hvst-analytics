import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

export default class PostStatistics extends Component {
  public render() {
    return (
      <div>
        Basic Post Stats
        <Visualization
          projectId='r7bq1uyjqe2trz9itwhu2dr3kt5elrhq'
          identifier='acjabr3ZfGHG'
        />
      </div>
    )
  }
}