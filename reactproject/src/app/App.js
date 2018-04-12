import React, { Component } from 'react';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import 'whatwg-fetch'
import { View as Header } from '../components/header/'
import store from '../store/'
import './reset.css'
import styles from './style.mcss'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { View as Home} from '../page/home/'
import { View as Detail} from '../page/detail/'

class App extends Component {
  render() {
    return (
    	<Provider store = {store}>
	        <div className={styles.wrapper}>
	        
           <BrowserRouter>
           <div>
            <Route path="/" component = {Header}></Route>
           <Switch>

              <Route path = '/detail/:id' component={Detail}></Route>
              <Route path = '/' component={Home}></Route>
            </Switch>
            </div>

           </BrowserRouter>
	       	
	        
	        </div>
        </Provider>
     
    );
  }
}

export default App;