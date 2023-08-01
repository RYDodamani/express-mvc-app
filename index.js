const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');


app.get('/',(req,res)=>{
	res.send("Hello World");
	res.end();
});

app.use('/users',userRoutes);

app.listen(3000);
