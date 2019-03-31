function solve(input) {
    let number = input.shift();
    let firstNum = number % 10;
    number /= 10;
    let secondNum = number % 10;
    number /= 10;
    let thirdNum = number % 10;
    number /= 10;


    for (let i = 1; i <= firstNum; i++) {
        for (let j = 1; j <= secondNum; j++) {
            for (let k = 1; k <= thirdNum; k++) {
                let multiply = i * j * k;

                console.log(`${i} * ${j} * ${k} = ${multiply};`)
                
            }
            
        }
        
    }
}

solve([222])