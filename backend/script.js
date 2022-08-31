const express = require('express');
const app = express();


app.use(express.json())

app.listen(4040, ()=> console.log("running port on 4040"))