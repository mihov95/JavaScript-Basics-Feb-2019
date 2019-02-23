function getArea(input) {
    let figure = input[0];
    let area = null;

    switch (figure) {
        case "square": {
            let a = Number(input[1]);
            area = Math.pow(a, 2);
            break;
        }


        case "rectangle": {

            let a = Number(input[1]);
            let b = Number(input[2]);
            area = a * b;
            break;
        }


        case "circle": {

            let r = Number(input[1]);
            area = Math.PI * Math.pow(r, 2);
            break;
        }

        case "triangle": {

            let a = Number(input[1]);
            let h = Number(input[2]);
            area = (a * h) / 2;
            break;
        }
    }

    console.log(area.toFixed(3));
}
