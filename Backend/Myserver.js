const express = require('express');
const dbConnect = require('./connection/dbConnect');
const userroute = require('./routes/userroute');
const cors = require('cors');
const app = express();
const PORT = 1234;

dbConnect('mongodb://127.0.0.1:27017/Person-Detail')
    .then(() => console.log("MongoDB Connected..."))

app.use(cors());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('<h1>Hello Welcome to My Website...</h1>')
});
app.use("/user", userroute);
app.listen(PORT, () => `Server is starting on port ${PORT}`);