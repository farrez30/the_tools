import * as express from "express";
const app = express;
import * as cors from "cors";

app.use(cors());

app.get('/', (req, res) => {
    res.json('hello')
});

app.listen(5000, ()=>console.log('API is working!'))