
const express=require('express')
const app=express()
const cors= require('cors');
const path=require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname,'react-app','build')))
const Quotes=[
    {
        author:'Ashish',
        quote:'Education is a big hoax'
    },
    {
        author:'Meenu',
        quote:'Education is not a hoax'    
    },
    
    {
        author:'Ashish',
        quote:'Education is a big hoax'
    },
    {
        author:'Ashish Tiwari',
        quote:'Education is a big big big hoax'
    },
    {
        author:'Nitya',
        quote:'What the hell'
    },
    {
        author:'Ashivavash',
        quote:'Education is a big hoax'
    },
    {
        author:'Ashish',
        quote:'Education is a big hoax'
    },
    {
        author:'Ashdasdish',
        quote:'Educatiasdasdon is a big hoax'
    },
    {
        author:'Ashiadsdsh',
        quote:'Educatiasdaon is a big hoax'
    },
    {
        author:'Ashcagewsh',
        quote:'Educatiqfwfon is a big hoax'
    }
]






function getQuote(){
    return {
        Quote:Quotes[Math.floor((Math.random()*9))]
    }
   
}
app.get('/api',(req,res)=>{
  console.log(getQuote())
    res.json(getQuote()); 
})


app.listen(5000,()=>console.log('listening'))