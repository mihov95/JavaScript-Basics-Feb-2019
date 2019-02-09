function getCircleAreaAndPerimeter(input) {
    let r = input[0];
    let pi = Math.PI;
    
    let area = pi * r * r;
    let perimeter = 2 * pi * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

