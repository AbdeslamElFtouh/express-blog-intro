import express from 'express';
const app = express();
const serverPort = process.env.SERVER_PORT;
const serverUrl = process.env.SERVER_URL;





app.listen(`${serverPort}`, (error) => {
    if(error) {
        console.log('Si è verificato un errore nel server...');
    } else {
        console.log(`Server in ascolto su ${serverUrl}:${serverPort}`);
    }
})