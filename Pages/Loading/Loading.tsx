import React from 'react';
import Header from '../../Compoents/Header/Header';
import Footer from '../../Compoents/Footer/Footer';
import './Loading.css'


interface Loader {
    loaderMessage:string;
}


const Loader = (props:Loader) => {
    return(
        <React.Fragment>
            <Header subHeader='Loader'/>
            <div className='loader'>
                {props.loaderMessage}
            </div>
            <Footer/>
        </React.Fragment>
    )
}


export default Loader;