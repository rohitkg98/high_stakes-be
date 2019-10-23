import express from "express";

// const router = express();
// const {PORT = 3000} = process.env;

// const server = http.createServer(router);

// server.listen(PORT, () =>
//     console.log(`Server is running http://localhost:${PORT}...`)
// );

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello world!');
});

app.listen(3000, () => 
    console.log('Server listening on port 3000!')
);