const express=require("express");
const fs  = require("fs");
const path=require('path');
const app=express();
let port=8000;
app.use('/static', express.static('static')) 
app.use(express.urlencoded())

app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const params = {  }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{ 
    const params = {  }
    res.status(200).render('contact.pug',params);
});

app.get('/about', (req, res)=>{ 
    const params = {  }
    res.status(200).render('about.pug',params);
});
app.post('/contact',(req,res)=>{
    name=req.body.name;
    phone=req.body.phone;
    email=req.body.email;
    address=req.body.address;
let outputTowrite=`the name of client is ${name}, phone no ${phone}, email ${email}, and her/him address ${address}.`;
fs.writeFileSync('output.txt',outputTowrite);
const params={'massege': 'Your massege has submit'}
res.status(200).render('contact.pug',params);
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});