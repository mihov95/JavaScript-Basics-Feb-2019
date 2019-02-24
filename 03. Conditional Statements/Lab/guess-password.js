function guessPass(input) {
    const realPass = "s3cr3t!P@ssw0rd"; 
    let password = input[0];


    if (password == realPass) {
        console.log("Welcome")
    }
    else {
        console.log("Wrong password!");
        
    }
}
