import React, { Component} from 'react';
import './App.css';
import FormChat from './components/FormChat.js'
import { 
    BrowserRouter as Router, 
    Route,
    Switch,
    Link
} from 'react-router-dom';


function IndexPage () {
    return (
        <section className = 'index-page'>
          <h1>Messenger</h1>
          <Link to='/user/signin'> Sign in </Link>
          <Link to='/user/signup'>Sign up</Link>
        </section>
        )
}

function SignIn () {
    return (
        <section className = 'user-page'>
          <h1>User Menu</h1>
          <ul>
            <li>
              <Link to='/chats'> Chats </Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
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
    <Router>
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
