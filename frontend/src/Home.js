import React from 'react';
import './Home.css';
import Banner from './Banner';
import TutorPage from './tutorform';
import Login from './login';
import Logout from './logout';
import PostList from './postslist';
import RegistrationForm from './registerForm';
import { Switch, Route } from 'react-router-dom';

function Home(props) {
    return(
        <div className='home'> 
            <Banner />
            <Switch>
                <Route exact path="/">

                </Route>
                <Route path="/Login">
                    <Login setLoggedIn={props.setLoggedIn}/>
                </Route>
                <Route path="/Logout">
                    <Logout setLoggedIn={props.setLoggedIn}/>
                </Route>
                <Route path="/Tutor">
                    <TutorPage />
                </Route>
                <Route path="/RegistrationForm">
                    <RegistrationForm />
                </Route>
                <Route path="/PostList">
                    <PostList />
                </Route>
            </Switch>
        </div>
    )
}

export default Home
