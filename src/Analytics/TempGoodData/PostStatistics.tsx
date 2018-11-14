import * as React from 'react';
import { Component } from 'react'

import { Table } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

const PROJECT_ID = 'a8ujccqht6hb5l9f8rfbag2277h4yo0o';

export default class PostStatistics extends Component {
  public render() {
        const totalPageVisits = {
      measure: {
        localIdentifier: 'totalPageVisits',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'aazQ76XjeeSD'
            }
          }
        }
      }
    }
    const percVisitsByCountry = {
      measure: {
        localIdentifier: 'percVisitsByCountry',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'ac8oLvQQeNar'
            }
          }
        }
      }
    }
    const audienceCountryAttribute = {
      visualizationAttribute: {
        displayForm: {
          identifier: 'label.audiencegeoanddemographics.audiencedemographicsprimary'
        },
        localIdentifier: 'audienceCountryAttribute'
      }
    }
    return (
      <div>
        Top 5 Countries
        <div style={{ height: 300 }} >
        <Table
          projectId={PROJECT_ID}
          measures={[totalPageVisits,percVisitsByCountry]}
          attributes={[audienceCountryAttribute]}
        />
        </div>
      </div>
    )
  }
}