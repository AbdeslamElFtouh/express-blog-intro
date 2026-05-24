import express from 'express';
const app = express();
const serverPort = process.env.SERVER_PORT;
const serverUrl = process.env.SERVER_URL;

app.use(express.static('public'));

const posts = [
    {
        title:'Primo post',
        content:'Contenuto primo post del blog.',
        img:'/imgs/apple.jpg',
        tags:[
            'vini', 'vidi' , 'vici'
        ]
    },
    {
        title:'Secondo post',
        content:'Contenuto secondo post del blog.',
        img:'/imgs/sunrise.jpg',
        tags:[
            'divide', 'et' , 'impera'
        ]
    },
    {
        title:'Terzo post',
        content:'Contenuto terzo post del blog.',
        img:'/imgs/apple.jpg',
        tags:[
            'alea', 'iacta' , 'est'
        ]
    },
    {
        title:'Quarto post',
        content:'Contenuto quarto post del blog.',
        img:'/imgs/sunrise.jpg',
        tags:[
            'memento', 'amori' 
        ]
    },
    {
        title:'Quinto post',
        content:'Contenuto quinto post del blog.',
        img:'/imgs/apple.jpg',
        tags:[
            'audentes', 'fortuna' , 'iuvat'
        ]
    }
]

app.get('/' , (request , response) => {
    response.send('<h1>Server del mio blog</h1>')
})

app.get('/bacheca', (request, response) => {
    response.json(posts.map(post => {
        return{
            ...post,
            img:`http://${serverUrl}:${serverPort}${post.img}`
        }
    }))
})

app.listen(`${serverPort}`, (error) => {
    if(error) {
        console.log('Si è verificato un errore nel server...');
    } else {
        console.log(`Server in ascolto su ${serverUrl}:${serverPort}`);
    }
})