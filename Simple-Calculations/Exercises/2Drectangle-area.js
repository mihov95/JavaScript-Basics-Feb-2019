function getAreaAndPerimeter(data) {
    let x1 = Number(data[0]);
    let y1 = Number(data[1]);
    let x2 = Number(data[2]);
    let y2 = Number(data[3]);

    let l = Math.abs(x1 - x2);
    let w = Math.abs(y1 - y2);

    let area = l * w;
    let perimeter = 2 * (l + w);

    console.log(area.toFixed(2))
    console.log(perimeter.toFixed(2))
}
