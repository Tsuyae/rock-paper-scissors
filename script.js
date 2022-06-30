
const threedie = parseInt(((Math.random()*10) % 3))

function bot() {
    if (threedie === 0) {
        return "Rock"
    }
    else if (threedie === 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

const result = bot()

// Bot randomly chooses rock paper or scissors above


function game(input) {
    if (input === result) {
        alert("You tied.")
    }
    else if ((input === "Rock") && (result === "Paper")) {
        alert(`You lost to ${result}!`);
        location.reload();
    }
    else if ((input === "Rock") && (result === "Scissors")) {
        alert(`You beat ${result}!`);
        location.reload();
    }
    else if ((input === "Paper") && (result === "Rock")) {
        alert(`You beat ${result}!`);
        location.reload();
    }
    else if ((input === "Paper") && (result === "Scissors")) {
        alert(`You lost to ${result}!`);
        location.reload();
    }
    else if ((input === "Scissors") && (result === "Rock")) {
        alert(`You beat ${result}!`);
        location.reload();
    }
    else if ((input === "Scissors") && (result === "Paper")) {
        alert(`You beat ${result}!`);
        location.reload();
    }
}

//this approach is different to TOP's approach because I found it unfit to the situation



console.log(result)
//console log to verify