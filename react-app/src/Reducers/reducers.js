
const GIVE_QUOTES='GIVE_QUOTES'


const initialState={
        author:'unfilled',
        quote:'unfilled'
}
function giveQuote(state=initialState,action){
        switch(action.type){
            case GIVE_QUOTES:
                return {
                        ...state,
                        author:action.author,
                        quote:action.quote
                }
            default:
                return state    
        };
       
       
}
export default giveQuote;