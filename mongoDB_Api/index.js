require("dotenv").config();

const app = require("./app");
const env = process.env.PORT || 3000
const mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL)
    .then(() => { 
app.listen(process.env.PORT, () => {
  console.log(`API listening on ${env}`);
})

    })
    .catch(e => console.log(e))

