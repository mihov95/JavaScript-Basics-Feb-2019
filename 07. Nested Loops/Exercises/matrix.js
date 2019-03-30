function matrix(input) {
    let x1 = Number(input.shift());
    let x2 = Number(input.shift());
    let x3 = Number(input.shift());
    let x4 = Number(input.shift());

    for (let i = x1; i <= x2; i++) {
        for (let j = x1; j <= x2; j++) {
            for (let k = x3; k <= x4; k++) {
                for (let l = x3; l < x4; l++) {
                    if ((i + l) == (j + k)) {
                        if (i != j && k != l) {
                            console.log(`${i}${j}`);
                            console.log(`${k}${l}`);
                            console.log("  ");
                            
                            
                        }
                    }
                    
                }
                
            }
            
        }
        
    }
}
