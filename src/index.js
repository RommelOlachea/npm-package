const messages = [
    "Rommel",
    "Mary",
    "Osmar",
    "Romina",
    "Alma",
    "Patricia",
    "Ernesto",
    "juan",
    "Mayra",
    "Paty",
    "Erendira",
    "josafat"
];


const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};



