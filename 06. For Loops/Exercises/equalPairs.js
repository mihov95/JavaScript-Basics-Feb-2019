function equalPairs(input) {
    let n = Number(input.shift());
    let sum = 0;
    let previousSum = 0;
    
    
    for (let i = 1; i < n; i++) {
        
        let diff = 0;
        
        let x1 = Number(input.shift());
        let x2 = Number(input.shift());
        
        sum = x1 + x2;

        previousSum = sum;

        if (previousSum != sum) {
            
        }
        

    }

}

equalPairs([2,
    1,
    2,
    2,
    2,
    ]);