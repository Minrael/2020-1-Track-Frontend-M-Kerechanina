import React, { Component} from 'react';
import './App.css';
import FormChat from './components/FormChat.js'
import { 
    BrowserRouter as Router, 
    Route,
    //Switch,
    Link
} from 'react-router-dom';


function IndexPage () {
    return (
        <section className = 'index-page'>
          <div className = 'AppName'>Messenger</div>
          <Link to={`${process.env.PUBLIC_URL}/user/signin`}> Sign in </Link>
          <Link to={`${process.env.PUBLIC_URL}/user/signup`}>Sign up</Link>
        </section>
        )
}

export function SignIn () {
    return (
        <section className = 'user-page'>
          <div className = 'AppName'>User Menu</div>
          <Link to={`${process.env.PUBLIC_URL}/chats`}> Chats </Link>
          <Link to={`${process.env.PUBLIC_URL}/profile`}>Profile</Link>
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
        <Route exact path={process.env.PUBLIC_URL} component = { IndexPage } />
        <Route exact path={`${process.env.PUBLIC_URL}/user/signin`} component = { SignIn } />
        <Route exact path={`${process.env.PUBLIC_URL}/chats`} component = { FormChat } />
      </div>
    </Router>
    )
}
}

export default App;
