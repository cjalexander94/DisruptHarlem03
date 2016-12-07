$(function() {
    Highcharts.chart('container-budget', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Income vs Expenses'
        },
        xAxis: {
            categories: ['July', 'August', 'September', 'October', 'November']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Dollars ($)'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Income',
            data: [2500, 3210, 4505, 1978, 2080]
        }, 
        {
            name: 'Expenses',
            data: [1875, 3405, 1017, 2750, 1560]
        }]
    });
});

$(function () {
    Highcharts.chart('container-donut', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Breakdown of Monthly Spending'
        },
        subtitle: {
            text: 'November'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Amount Spent ($)',
            data: [
                ['Food & Dining', 120],
                ['Financial', 375],
                ['Retail spending', 750],
                ['Car & Auto', 460],
                ['Travel', 2873],
                ['Uncategorized', 341],
            ]
        }]
    });
});

$(function () {
    Highcharts.chart('container-savings', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Planned Savings vs Actual Savings'
        },
        subtitle: {
            text: ' '
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Savings($)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Target Savings ($)',
            data: [49.9, 61.5, 46.4, 39.2, 54.0, 76.0, 35.6, 48.5, 56.4, 34.1, 25.6, 54.4]

        }, {
            name: 'Amount Saved ($)',
            data: [50.6, 70.8, 38.5, 33.4, 46.0, 84.5, 45.0, 34.3, 61.2, 23.5, 36.6, 52.3]

        }]
    });
});