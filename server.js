const express= require('express')
const contactRoute=require('./api/routes/contact')
const app=express()
const PORT=process.env.PORT || 5000


app.use('/api/contacts', contactRoute)

app.get('/' , (req, res)=>{
  res.send('<h1>hello bappy</h1>')
})
app.get(':/' , (req, res)=>{
  res.send('<h1>hello 222222222222bappy</h1>')
})



app.listen(PORT, ()=>{
  console.log('Example app listening on port  ${port}!')
})


const contacts= [
  {name: 'bappy r',  email: 'safjf@gjaf.com'},
  { name: 'tappy rs', email: 'asfsfiei@gjago.cok'},
  {name: 'ufksff af', email: 'adfjsifei@gjagl.com'}
]
