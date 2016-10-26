FusionCharts.register('module', ['private', 'modules.renderer.js-extension',
    function () {

        var global = this,
            lib = global.hcLib,
            extend2 = lib.extend2;

        FusionCharts.register('component', ['extension', 'update', {
            type : 'mscolumn',

            inhereitBaseExtension : true,

            init : function (chart) {
                var extension = this;

                extension.chart = chart;
                extension._update();
            },

            _update : function () {
                var extension = this,
                    chart = extension.chart,
                    chartInstance = chart.chartInstance;

                chartInstance.update = function (chartObj) {
                    var jsonData = chart.jsonData,
                        newChartObj = extend2(jsonData, chartObj);
                    chartInstance.setJSONData(newChartObj);
                };
            }
        }]);
    }
]);
