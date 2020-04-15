import React from 'react';
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
          <Link name = 'signInLink'to={`${process.env.PUBLIC_URL}/user/signin`}> Sign in </Link>
          <Link to={`${process.env.PUBLIC_URL}/user/signup`}>Sign up</Link>
        </section>
        )
}

export function SignIn () {
    return (
        <section className = 'user-page'>
          <div className = 'AppName'>User Menu</div>
          <Link name = 'chatsLink' to={`${process.env.PUBLIC_URL}/chats`}> Chats </Link>
          <Link to={`${process.env.PUBLIC_URL}/profile`}>Profile</Link>
        </section>
    )
        
}

class App extends React.Component {

constructor (props){
    super(props);
    this.props = props;
}



render() {
  return (
    <Router 
    history = { history } 
    /*basename = {process.env.MODE_ENV === 'development'? '/':'/2020-1-Track-Frontend-M-Kerechanina'} */
    >
        <Route exact path={`${process.env.PUBLIC_URL}`} component = { IndexPage } />
        <Route exact path={`${process.env.PUBLIC_URL}/user/signin`} component = { SignIn } />
        <Route exact path={`${process.env.PUBLIC_URL}/chats`} component = { FormChat } />
    </Router>
    )
}
}

export default App;
