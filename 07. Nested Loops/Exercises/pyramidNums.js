function pyramidNums(input) {
    let n = Number(input.shift());

    let currentLine = "";
    let current = 1;
    let isBigger = false;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            currentLine += current + " ";
            
            current++;
        }
        console.log(currentLine);
        currentLine = "";
        if (isBigger) {
            break;
        }
    }
}

pyramidNums([10])