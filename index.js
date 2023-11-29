const express = require("express");
const Connect = require("./Config/DataBase");
const UserRouter = require("./Routes/User.Route");
const cookie = require('cookie-parser')

require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cookie())


// ejs code
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended : true }));

app.use("/User", UserRouter)

Connect();
app.listen(process.env.PORT , ()=>{
    console.log(`listening on ${process.env.PORT}`);
})


