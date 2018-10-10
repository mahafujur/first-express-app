const express = require('express')
const contactRoute=require('./api/routes/contact')
const app=express()

const PORT=process.env.PORT || 3000

app.use('/api/contacts', contactRoute)

app.get('/', (req, res)=>{
  res.send('<h1>Hello vut</h1>')
})


app.listen(PORT, ()=>{
  console.log('server is running on port ${PORT}')
})

const contacts= [

  {name: 'bappy r',  email: 'safjf@gjaf.com'},
  { name: 'tappy rs', email: 'asfsfiei@gjago.cok'},
  {name: 'ufksff af', email: 'adfjsifei@gjagl.com'}

]






/*
app.get('/hello', function(req, res){
   res.send("Hello d!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res){
  res.send("Http method doesn't have any effect on this route!");
});
*/
/*
var things=require('./things.js');
app.use('/things', things);




app.get('/api/contacts', (req, res)=>
{
  res.json(contacts)
})



var contacts =[


]
app.listen(3000);
*/
