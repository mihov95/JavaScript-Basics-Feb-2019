function metricConverter(input) {
    let distance = Number(input[0]);
    let inputMetric = input[1];
    let outputMetric = input[2];

    if (inputMetric == "mm") {
        distance /= 1000;
    } else if (inputMetric == "cm") {
        distance /= 100;
    }

    if (outputMetric == "mm") {
        distance *= 1000;
    } else if (outputMetric == "cm") {
        distance *= 100;
    }

    console.log(distance.toFixed(3));
    
}

metricConverter([
    "150",
    "cm",
    "m"
])