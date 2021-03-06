var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input } from '@angular/core';
import { CollectionItemComponent } from '../common/collection-item.component';
/**
 * @hidden
 */
export var SeriesItemComponentGenerated = (function (_super) {
    __extends(SeriesItemComponentGenerated, _super);
    function SeriesItemComponentGenerated(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    SeriesItemComponentGenerated.propDecorators = {
        'aggregate': [{ type: Input },],
        'axis': [{ type: Input },],
        'border': [{ type: Input },],
        'categoryAxis': [{ type: Input },],
        'categoryField': [{ type: Input },],
        'closeField': [{ type: Input },],
        'color': [{ type: Input },],
        'colorField': [{ type: Input },],
        'connectors': [{ type: Input },],
        'currentField': [{ type: Input },],
        'dashType': [{ type: Input },],
        'data': [{ type: Input },],
        'downColor': [{ type: Input },],
        'downColorField': [{ type: Input },],
        'dynamicHeight': [{ type: Input },],
        'dynamicSlope': [{ type: Input },],
        'errorHighField': [{ type: Input },],
        'errorLowField': [{ type: Input },],
        'explodeField': [{ type: Input },],
        'field': [{ type: Input },],
        'fromField': [{ type: Input },],
        'gap': [{ type: Input },],
        'highField': [{ type: Input },],
        'holeSize': [{ type: Input },],
        'line': [{ type: Input },],
        'lowField': [{ type: Input },],
        'lowerField': [{ type: Input },],
        'margin': [{ type: Input },],
        'maxSize': [{ type: Input },],
        'meanField': [{ type: Input },],
        'medianField': [{ type: Input },],
        'minSize': [{ type: Input },],
        'missingValues': [{ type: Input },],
        'name': [{ type: Input },],
        'neckRatio': [{ type: Input },],
        'negativeColor': [{ type: Input },],
        'negativeValues': [{ type: Input },],
        'noteTextField': [{ type: Input },],
        'opacity': [{ type: Input },],
        'openField': [{ type: Input },],
        'outliersField': [{ type: Input },],
        'overlay': [{ type: Input },],
        'padding': [{ type: Input },],
        'q1Field': [{ type: Input },],
        'q3Field': [{ type: Input },],
        'segmentSpacing': [{ type: Input },],
        'size': [{ type: Input },],
        'sizeField': [{ type: Input },],
        'spacing': [{ type: Input },],
        'stack': [{ type: Input },],
        'startAngle': [{ type: Input },],
        'style': [{ type: Input },],
        'summaryField': [{ type: Input },],
        'target': [{ type: Input },],
        'toField': [{ type: Input },],
        'type': [{ type: Input },],
        'upperField': [{ type: Input },],
        'visible': [{ type: Input },],
        'visibleInLegend': [{ type: Input },],
        'visibleInLegendField': [{ type: Input },],
        'visual': [{ type: Input },],
        'width': [{ type: Input },],
        'xAxis': [{ type: Input },],
        'xErrorHighField': [{ type: Input },],
        'xErrorLowField': [{ type: Input },],
        'xField': [{ type: Input },],
        'yAxis': [{ type: Input },],
        'yErrorHighField': [{ type: Input },],
        'yErrorLowField': [{ type: Input },],
        'yField': [{ type: Input },],
        'zIndex': [{ type: Input },],
        'errorBars': [{ type: Input },],
        'extremes': [{ type: Input },],
        'highlight': [{ type: Input },],
        'labels': [{ type: Input },],
        'markers': [{ type: Input },],
        'notes': [{ type: Input },],
        'outliers': [{ type: Input },],
        'tooltip': [{ type: Input },],
    };
    return SeriesItemComponentGenerated;
}(CollectionItemComponent));
