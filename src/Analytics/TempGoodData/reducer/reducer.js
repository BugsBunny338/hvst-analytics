// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import { AfmTypes } from '@gooddata/gdc-afm-connect';
import * as Types from './types';

export const granularity = (state = {}, action) => {
  switch (action.type) {
    case Types.SET_DATE_GRANULARITY: {
      const { granularity } = action;

      return {
        ...state,
        date: granularity
      };
    }

    case Types.SET_ATTRIBUTE_GRANULARITY: {
      const { granularity } = action;

      return {
        ...state,
        attribute: granularity
      };
    }

    // when date filter is updated, when date range is more than a single day
    // switch granularity to date (cannot have hour or minute granularity for multiple days)
    case AfmTypes.UPDATE_DATE_FILTER: {
      const { start, end } = action;

      if (start !== null && end !== null && (start === end)) {
        return state;
      }

      return {
        ...state,
        date: 'day'
      };
    }

    default:
      return state;
  }
};

export const heatmapThresholds = (heatmapThresholds = {}, action) => {
  switch (action.type) {
    case Types.SET_HEATMAP_THRESHOLDS: {
      const { thresholds } = action;

      return thresholds.thresholds;
    }

    default:
      return heatmapThresholds;
  }
};
