import React from 'react';
import Header from '../../Compoents/Header/Header';
import Footer from '../../Compoents/Footer/Footer';
import Card from '../../Compoents/Card/Card';
import placeholder from '../../assets/store/placeholder.png';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return (
        <React.Fragment>
            <Header subHeader='Home'></Header>
            <div className="container">
            <Card
            title="MOVIES"
            imageUrl={placeholder}
            footerText="Popular Movies."
            onClick="/movies"
            width='150px'
            height='250px'
            />
            <Card
            title="SERIES"
            imageUrl={placeholder}
            footerText="Popular Series."
            onClick="/series"
            />
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;