function coding(input) {
    let n = Number(input.shift());
    let nStr = n.toString();
    
    for (let i = 0; i < nStr.length; i++) {
        let digit = Math.floor(n % 10);
        n /= 10;
        let symbol = String.fromCharCode(digit + 33);
        let line = "";
        
        for (let j = 1; j <= digit; j++) {
            
            line += symbol;

        }
                if (digit == 0) {
                    console.log("ZERO")
                } else {
                    console.log(line)
                }
    }

}

coding([2049])