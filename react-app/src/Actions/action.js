
const newQuote=()=>dispatch=>{
  
    fetch('/api/')
    .then(
        res=>{
          return  res.json();
        
        }
    
    )
    .then(
        data=>{
            console.log(data)
            dispatch({
                type:'GIVE_QUOTES',
                author:data.Quote.author,
                quote:data.Quote.quote
            })  
        }
    )
}
export default  newQuote