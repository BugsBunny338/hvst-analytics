import * as React from 'react';
import { Component } from 'react'

import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

const PROJECT_ID = 'a8ujccqht6hb5l9f8rfbag2277h4yo0o';

export default class PageStatistics extends Component {
  public render() {
    return (
      <div>
        Basic Page Stats
        <div>
          Date Picker
        </div>
        <div className="s-headline" style={{ display: 'flex' }} >
          <style>
            {`
              .column {
                flex: '1 1 50%'
              }
            `}
          </style>
          <div className="column">
            Total Page Visits
            <Visualization
              projectId={PROJECT_ID}
              identifier={'acysX8CHdYJK'}
            />
          </div>
          <div className="column">
            Financial Advisor
            <Visualization
              projectId={PROJECT_ID}
              identifier={'aaJnN02Fg1f8'}
            />
          </div>
          <div className="column">
            Asset Manager
            <Visualization
              projectId={PROJECT_ID}
              identifier={'acAn78iEhBK6'}
            />
          </div>
          <div className="column">
            Qualified Institutional Investor
            <Visualization
              projectId={PROJECT_ID}
              identifier={'ab8oaDPDhaC4'}
            />
          </div>
          <div className="column">
            Other Financial Professional
            <Visualization
              projectId={PROJECT_ID}
              identifier={'abvog1kNcrM8'}
            />
          </div>
        </div>
        <div style={{ display: 'flex', height: 300 }} >
          <style>
            {`
              .column {
                flex: '1 1 50%'
              }
            `}
          </style>
          <div className="column">
            <Visualization
              projectId={PROJECT_ID}
              identifier={'advnGIgfa2ga'}
            />
          </div>
          <div className="column">
            <Visualization
              projectId={PROJECT_ID}
              identifier={'aaqtnjy5a75D'}
            />
          </div>
          <div className="column">
            <Visualization
              projectId={PROJECT_ID}
              identifier={'aastn6qSg2Oj'}
            />
          </div>
          <div className="column">
            <Visualization
              projectId={PROJECT_ID}
              identifier={'aawtpiLIeyWg'}
            />
          </div>
          <div className="column">
            <Visualization
              projectId={PROJECT_ID}
              identifier={'abBtm4KDfnTG'}
            />
          </div>
        </div>
        <div style={{ height: 300 }} >
          Top 5 Countries
          <Visualization
            projectId={PROJECT_ID}
            identifier={'ac9oJNGFbfkJ'}
          />
        </div>
        <div style={{ height: 300 }} >
          Top 5 States
          <Visualization
            projectId={PROJECT_ID}
            identifier={'aa8ov5bCeJsr'}
          />
        </div>
        <div style={{ height: 300 }} >
          Total Posts Published
          <Visualization
            projectId={PROJECT_ID}
            identifier={'aadLx3ZEgNIg'}
          />
        </div>
        <div style={{ height: 300 }} >
          Total Impressions
          <Visualization
            projectId={PROJECT_ID}
            identifier={'aaWLxsb9g2jb'}
          />
        </div>
        <div style={{ height: 300 }} >
          Total Opens
          <Visualization
            projectId={PROJECT_ID}
            identifier={'aa2LyQCfeBz0'}
          />
        </div>
        <div style={{ height: 300 }} >
          Post Impressions Over Time Linechart
          <Visualization
            projectId={PROJECT_ID}
            identifier={'abELxndmgDpg'}
          />
        </div>
      </div>
    )
  }
}
