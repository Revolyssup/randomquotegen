import React,{ Component } from 'react';
import { Provider } from 'react-redux'
import store from '../store'
import ConnectedComponent from './RandomQuote'
class  App extends Component {

  render(){
    return (
     <Provider store={store}>
       <ConnectedComponent />
     </Provider>
    );
  }
  
}

export default App;
