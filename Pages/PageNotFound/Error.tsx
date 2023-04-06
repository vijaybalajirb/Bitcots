import React from 'react';
import Header from '../../Compoents/Header/Header';
import Footer from '../../Compoents/Footer/Footer';
import './Error.css';


interface ErrorScreen {
    errorMessage:string;
}


const ErrorScreen = (props:ErrorScreen) => {
    return(
        <React.Fragment>
            <Header subHeader='ErrorScreen'/>
            <div className='error'>
                {props.errorMessage}
            </div>
            <Footer/>
        </React.Fragment>
    )
}


export default ErrorScreen;