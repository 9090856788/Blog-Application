const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const PORT = 3000;

// dotenv.config();

const MONGODB_URL = `mongodb+srv://Kanhu143:Kanhu143@techify.0vh7lgg.mongodb.net/?retryWrites=true&w=majority&appName=Techify`

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log(`Database Connected Successfully ):`);
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(PORT, () => {
    console.log(`Server running on the PORT ${PORT}`);
});
