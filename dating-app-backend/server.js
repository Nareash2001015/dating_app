import express from "express";
import mongoose from "mongoose";

const app = express()
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://nareash20010150:7ArZVG4GiIq6XTn8@cluster0.4kqysyr.mongodb.net/test";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.get('/', (req, res) => res.status(200).send("Hello The WebDev"))

app.listen(port, () => console.log("Listening on localhost: ${port}"))

