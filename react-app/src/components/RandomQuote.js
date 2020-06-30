import React,{ Component } from 'react'
import { connect } from 'react-redux'
import newQuote from '../Actions/action'
import  './styles.css'


class RandomQuotes extends Component{
        constructor(props){
            super(props);
            this.emitQuoteAction=this.emitQuoteAction.bind(this)
        }

        componentDidMount(){
            
            this.emitQuoteAction();
            
        }
        emitQuoteAction(){
        
            this.props.newQuote()   
            console.log('State updated')

           
        }
        render(){
            const quote=this.props.quote;
            const author=this.props.author;
           
            return(
                <div className="container">
                   <div id="box1">
                        Quote:    {quote}
                   </div>
                   <div id="box2">
                        Author:{author}
                   </div>
                   
                        <button  className="btn" value="Change Quote "onClick={this.emitQuoteAction} >Change Quote</button>
                  
                </div>
            )
        }

}


const mapStateToProps=(state)=>(
    {
         author:state.quote.author,
         quote:state.quote.quote   
    }
)

const mapDispatchToProps=(dispatch)=>{
    return{
        newQuote: ()=>dispatch(newQuote())
    }
    }

const ConnectedComponent=connect(mapStateToProps,mapDispatchToProps)(RandomQuotes);
export default ConnectedComponent

