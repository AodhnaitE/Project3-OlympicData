
d3.json('pageone').then(function (data) {


    console.log(data);

    let olympic_year_f = data["female"].map(function (year) {
        return year.year;
    });
    console.log("Year:", olympic_year_f);

    let olympic_year_m = data["male"].map(function (year) {
        return year.year;
    });
    console.log("Year:", olympic_year_m);

    let olympic_f = data["female"].map(function (data) {
        return data.count;
    });
    console.log("Female:", olympic_f);

    let olympic_m = data["male"].map(function (data) {
        return data.count;
    });
    console.log("Male:", olympic_m);



    trace1 = {
        x: olympic_year_f,
        y: olympic_f,
        type: 'bar'
    };
    trace2 = {
        x: olympic_year_m,
        y: olympic_m,
        type: 'bar'
    };

    layout = {

        title: 'Gender of Participants Over the Years',
        xaxis: {
            tickangle: -45
        },
        barmode: 'group'

    }
    let data1 = [trace1, trace2];
    Plotly.newPlot('plot', data1, layout)

});