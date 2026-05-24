import express, { response } from 'express';
const app = express();
const serverPort = process.env.SERVER_PORT;
const serverUrl = process.env.SERVER_URL;

const posts = [
    {
        title:'Primo post',
        content:'Contenuto primo post del blog.',
        img:'apple.jpg',
        tags:[
            'vini', 'vidi' , 'vici'
        ]
    },
    {
        title:'Secondo post',
        content:'Contenuto secondo post del blog.',
        img:'sunrise.jpg',
        tags:[
            'divide', 'et' , 'impera'
        ]
    },
    {
        title:'Terzo post',
        content:'Contenuto terzo post del blog.',
        img:'apple.jpg',
        tags:[
            'alea', 'iacta' , 'est'
        ]
    },
    {
        title:'Quarto post',
        content:'Contenuto quarto post del blog.',
        img:'sunrise.jpg',
        tags:[
            'memento', 'amori' 
        ]
    },
    {
        title:'Quinto post',
        content:'Contenuto quinto post del blog.',
        img:'apple.jpg',
        tags:[
            'audentes', 'fortuna' , 'iuvat'
        ]
    }
]

app.get('/' , (request , response) => {
    response.send('<h1>Server del mio blog</h1>')
})



app.listen(`${serverPort}`, (error) => {
    if(error) {
        console.log('Si è verificato un errore nel server...');
    } else {
        console.log(`Server in ascolto su ${serverUrl}:${serverPort}`);
    }
})