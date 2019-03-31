function sequence(input) {
    let n = Number(input.shift());
    let sequence = 1;

    while (sequence <= n) {
        console.log(sequence);
        sequence = sequence * 2 + 1;
    }
}

sequence([8]);