// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import { AfmConnect as afmConnect, DateUtils } from '@gooddata/gdc-afm-connect';
import DatePicker from '@gooddata/goodstrap/lib/Datepicker/Datepicker';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { AfmActions } from '@gooddata/gdc-afm-connect';

import * as Actions from './reducer/actions';

import 'react-day-picker/lib/style.css';
import './datefilter.css';

import {
  FG_MAIN,
  FG_SANKEY,
  DATE_DATASET,
  DATE_GRANULARITY,
  HOUR_ATTR_DF,
  MINUTE_ATTR_DF
} from './constants';

const extractStartAndEnd = (filters) => {
  if (filters && filters[0]) {
    const filterBody = filters[0][Object.keys(filters[0])[0]]; // don't care whether relative or absolute
    const { from, to } = filterBody;
    const start = DateUtils.ensureAbsolute(from);
    const end = DateUtils.ensureAbsolute(to);

    return { start, end };
  }

  return {
    start: new Date(),
    end: new Date()
  };
};

class DateRangePicker extends Component {
  render() {
    const { filters, dispatchActions } = this.props;
    const { start, end } = extractStartAndEnd(filters);

    return (
      <div className="datefilter">
        <div className="datefilter-field">
          <span className="datefilter-field-title">From:</span>
          <DatePicker
            size="small"
            date={start}
            onChange={d => {
              dispatchActions([
                AfmActions.updateDateFilter(FG_MAIN, DATE_DATASET, DATE_GRANULARITY, d, null),
                AfmActions.updateDateFilter(FG_SANKEY, DATE_DATASET, DATE_GRANULARITY, d, null),

                AfmActions.removeAttributeFilter(FG_MAIN, HOUR_ATTR_DF),
                AfmActions.removeAttributeFilter(FG_SANKEY, HOUR_ATTR_DF),

                AfmActions.removeAttributeFilter(FG_MAIN, MINUTE_ATTR_DF),
                AfmActions.removeAttributeFilter(FG_SANKEY, MINUTE_ATTR_DF),

                Actions.setDateGranularity('day')
              ]);
            }}
          />
        </div>

        <div className="datefilter-field">
          <span className="datefilter-field-title">To:</span>
          <DatePicker
            size="small"
            date={end}
            onChange={d => {
              dispatchActions([
                AfmActions.updateDateFilter(FG_MAIN, DATE_DATASET, DATE_GRANULARITY, null, d),
                AfmActions.updateDateFilter(FG_SANKEY, DATE_DATASET, DATE_GRANULARITY, null, d),

                AfmActions.removeAttributeFilter(FG_MAIN, HOUR_ATTR_DF),
                AfmActions.removeAttributeFilter(FG_SANKEY, HOUR_ATTR_DF),

                AfmActions.removeAttributeFilter(FG_MAIN, MINUTE_ATTR_DF),
                AfmActions.removeAttributeFilter(FG_SANKEY, MINUTE_ATTR_DF),

                Actions.setDateGranularity('day')
              ]);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchActions: (actions) => dispatch(batchActions(actions))
});

export default connect(null, mapDispatchToProps)(afmConnect(DateRangePicker));