/* global document */
/* global chai */
/* global describe */
/* global it */
var data =
    {
            "chart": {
                "caption": "Comparison of Quarterly Revenue",
                "xAxisname": "Quarter",
                "yAxisName": "Revenues (In USD)",
                "numberPrefix": "$",
                "animation":"0",
                "plotFillAlpha" : "80",
            },
            "categories": [
                {
                    "category": [
                        { "label": "Q1" },
                        { "label": "Q2" },
                        { "label": "Q3" },
                        { "label": "Q4" }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Previous Year",
                    "data": [
                        { "value": "10000" },
                        { "value": "11500" },
                        { "value": "12500" },
                        { "value": "15000" }
                    ]
                },
                {
                    "seriesname": "Current Year",
                    "data": [
                        { "value": "25400" },
                        { "value": "29800" },
                        { "value": "21800" },
                        { "value": "26800" }
                    ]
                }
            ]
    },
    revenueChart;

revenueChart = new FusionCharts({
    type: 'mscolumn2d',
    renderAt: document.body,
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: data
});

revenueChart.render();

expect = chai.expect;

describe('selective-update', function () {
    it('should change caption or this test will fail', function () {
        // To update the chart caption
        revenueChart.update({
            chart: {
                caption: "My Caption"
            }
        });

        var caption = revenueChart.apiInstance.components.caption.components.text,
            isMatch = (caption === 'My Caption');

        expect(isMatch).to
            .equal(true);
    });
    it('should change subcaption or this test will fail', function () {
        // To update the chart caption
        revenueChart.update({
            chart: {
                subCaption: "My Sub Caption"
            }
        });

        var subCaption = revenueChart.apiInstance.components.subCaption.graphics.subCaptionElement.attrs.text,
            isMatch = (subCaption === 'My Sub Caption');

        expect(isMatch).to
            .equal(true);
    });
    it('should change data in dataset[0] to 492000 or this test will fail', function () {
        // To update the chart caption
        revenueChart.update({
            dataset: [{
                data: [{
                    value: 492000
                }]
            }]
        });

        var dataValue = revenueChart.apiInstance.components.dataset[0].JSONData.data[0].value,
            isMatch = (dataValue === 492000);

        expect(isMatch).to
            .equal(true);
    });

});
