function solve(input) {

    let countTickets = 0;
    let totalTickets = 0;

    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;
    
    while (true) {
        let movieName = input.shift();
        if (movieName == "Finish") {
            break;
        }
        let seats = Number(input.shift());
        while (true) {
            let ticket = input.shift();
            if (ticket != "End") {
                
                countTickets++;
                totalTickets++;
                if (ticket == "student") {
                    studentTickets++;
                } else if (ticket == "standard") {
                    standartTickets++;
                } else if (ticket == "kid") {
                    kidsTickets++;
                }
            } 
            if (countTickets >= seats || ticket == "End") {
                let percent = countTickets / seats * 100;
                console.log(`${movieName} - ${percent.toFixed(2)}% full.`);
                countTickets = 0;
                break;
            }

            

        }
    }

    let percentStudentTickets = studentTickets / totalTickets * 100;
    let percentStandartTickets = standartTickets / totalTickets * 100;
    let percentkidsTickets = kidsTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentkidsTickets.toFixed(2)}% kids tickets.`);
    

    
}

solve(['Taxi',
    10,
    'standard',
    'kid',
    'student',
    'student',
    'standard',
    'standard',
    'End',
    'Scary Movie',
    6,
    'student',
    'student',
    'student',
    'student',
    'student',
    'student',
    'Finish'
    ]);