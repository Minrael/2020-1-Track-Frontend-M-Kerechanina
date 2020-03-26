import React, { Component} from 'react';
import './App.css';
import FormChat from './components/FormChat.js'
import { 
    Router, 
    Route,
    Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();


function IndexPage () {
    return (
        <section className = 'index-page'>
          <div className = 'AppName'>Messenger</div>
          <Link to='/user/signin'> Sign in </Link>
          <Link to='/user/signup'>Sign up</Link>
        </section>
        )
}

export function SignIn () {
    return (
        <section className = 'user-page'>
          <div className = 'AppName'>User Menu</div>
          <Link to='/chats'> Chats </Link>
          <Link to='/profile'>Profile</Link>
        </section>
    )
        
}

class App extends Component {

constructor (props){
    super(props);
    this.props = props;
}



render() {
  return (
    <Router history = { history } basename = {process.env.MODE_ENV === 'production'? '/2020-1-Track-Frontend-M-Kerechanina/':'/'}>
      <div>
        <Route exact path='/' component = { IndexPage } />
        <Route exact path='/user/signin' component = { SignIn } />
        <Route exact path='/chats' component = { FormChat } />
      </div>
    </Router>
    )
}
}

export default App;
