import * as React from 'react';
import { Component } from 'react'

import { Headline, LineChart, Table } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

const PROJECT_ID = 'a8ujccqht6hb5l9f8rfbag2277h4yo0o';

export default class PageStatistics extends Component {
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
    const percVisitsByState = {
      measure: {
        localIdentifier: 'percVisitsByState',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'abQor0KQguiw'
            }
          }
        }
      }
    }
    const financialAdvisorVisits = {
      measure: {
        localIdentifier: 'financialAdvisorVisits',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'adgnGEHSexsv'
            }
          }
        }
      }
    }
    const assetManagerVisits = {
      measure: {
        localIdentifier: 'assetManagerVisits',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'adInUtIZcGVT'
            }
          }
        }
      }
    }
    const qualifiedIInvestorVisits = {
      measure: {
        localIdentifier: 'qualifiedIInvestorVisits',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'ac1nUXy9cNjH'
            }
          }
        }
      }
    }
    const otherProfessionalVisits = {
      measure: {
        localIdentifier: 'otherProfessionalVisits',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'aaXn1Qvdf28C'
            }
          }
        }
      }
    }
    const demographicsPrimaryAttribute = {
      visualizationAttribute: {
        displayForm: {
          identifier: 'label.audiencegeoanddemographics.audiencedemographicsprimary'
        },
        localIdentifier: 'demographicsPrimaryAttribute'
      }
    }
    const audienceCountryAttribute = {
      visualizationAttribute: {
        displayForm: {
          identifier: 'label.audiencegeoanddemographics.audiencecountry'
        },
        localIdentifier: 'audienceCountryAttribute'
      }
    }
    const audienceStateAttribute = {
      visualizationAttribute: {
        displayForm: {
          identifier: 'label.audiencegeoanddemographics.audiencestate'
        },
        localIdentifier: 'audienceStateAttribute'
      }
    }
    const dateByDayAttribute = {
      visualizationAttribute: {
        displayForm: {
          identifier: 'date.date.mmddyyyy'
        },
        localIdentifier: 'dateByDayAttribute'
      }
    }
    return (
      <div>
        Basic Page Stats
        <div>
          Date Picker
        </div>
        <div className="s-headline" style={{ display: 'flex' }} >
          <style jsx>
            {`
              .column {
                flex: '1 1 50%'
              }
            `}
          </style>
          <div className="column">
            Total Page Visits
            <Headline
              projectId={PROJECT_ID}
              primaryMeasure={totalPageVisits}
            />
          </div>
          <div className="column">
            Financial Advisor
            <Headline
              projectId={PROJECT_ID}
              primaryMeasure={financialAdvisorVisits}
            />
          </div>
          <div className="column">
            Asset Manager
            <Headline
              projectId={PROJECT_ID}
              primaryMeasure={assetManagerVisits}
            />
          </div>
          <div className="column">
            Qualified Institutional Investor
            <Headline
              projectId={PROJECT_ID}
              primaryMeasure={qualifiedIInvestorVisits}
            />
          </div>
          <div className="column">
            Other Financial Professional
            <Headline
              projectId={PROJECT_ID}
              primaryMeasure={otherProfessionalVisits}
            />
          </div>
        </div>
        <div style={{ height: 300 }} >
          Visits Over Time
          <LineChart
            projectId={PROJECT_ID}
            measures={[totalPageVisits]}
            trendBy={dateByDayAttribute}
            segmentBy={demographicsPrimaryAttribute}
            config={{
              legend: {
                enabled: true,
                position: 'bottom'
              }
            }}
          />
        </div>
        <div style={{ height: 300 }} >
          Top 5 Countries
          <Table
            projectId={PROJECT_ID}
            measures={[totalPageVisits,percVisitsByCountry]}
            attributes={[audienceCountryAttribute]}
          />
        </div>
        <div style={{ height: 300 }} >
          Top 5 States
          <Table
            projectId={PROJECT_ID}
            measures={[totalPageVisits,percVisitsByState]}
            attributes={[audienceStateAttribute]}
          />
        </div>
      </div>
    )
  }
}
