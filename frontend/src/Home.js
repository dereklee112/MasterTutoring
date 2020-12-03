import React from 'react';
import './Home.css';
import Banner from './Banner';
import TutorPage from './tutorform';
import Login from './login';
import RegistrationForm from './registerForm';

function Home() {
    return(
        <div className='home'> 
            <Banner />
            <TutorPage />
            <Login />
            <br></br> 
            <RegistrationForm />
        </div>
    )
}

export default Home
