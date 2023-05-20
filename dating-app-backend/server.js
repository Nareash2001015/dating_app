import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js"
import Cors from 'cors';
import dbCards from "./dbCards.js";

const app = express()
const port = process.env.PORT || 8001
const connectionString = "mongodb+srv://nareash20010150:nareash20010150@cluster0.4kqysyr.mongodb.net/Dating-app";

//Middleware
app.use(express.json());
app.use(Cors());

try{
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}catch(error){
    console.log(error);
    process.exit(1);
}

app.get('/', (req, res) => res.status(200).send("Hello The WebDev"))

app.post('/dating/cards', async (req, res) => {
        const dbCard = req.body;
        // res.status(201).send(dbCard);
        try {
            Cards.create(dbCard);
            res.status(201).send(dbCard);
        } catch (error) {
            res.status(500).send(error);
        }
    }
)

app.get('/dating/cards', async (req, res) => {
        Cards.find({})
            .then(users => {
                res.status(200).send(users);
            })
            .catch(error => {
                console.error("Error finding users:", error);
            })
})

app.listen(port, () => console.log("Listening on localhost: " + port));