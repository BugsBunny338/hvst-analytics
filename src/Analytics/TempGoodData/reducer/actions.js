// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import * as Types from './types';

export const setDateGranularity = (granularity) => ({
    type: Types.SET_DATE_GRANULARITY,
    granularity
});

export const setAttributeGranularity = (granularity) => ({
    type: Types.SET_ATTRIBUTE_GRANULARITY,
    granularity
});

export const setHeatmapThresholds = (thresholds) => ({
    type: Types.SET_HEATMAP_THRESHOLDS,
    thresholds
});
