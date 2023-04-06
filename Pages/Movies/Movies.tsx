import React,{useState,useEffect} from 'react';
import './Movies.css';
import Header from '../../Compoents/Header/Header';
import Footer from '../../Compoents/Footer/Footer';
import Card from '../../Compoents/Card/Card';
import Loader from '../Loading/Loading';
import placeholder from '../../assets/store/placeholder.png'


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading,setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        getData();
        setLoader(false);
    },[]);
    
    const getData = async() => {
        let jsonData = require('../../Data/sample.json');
        let data = jsonData?.entries.filter((x) => x.programType == "movie" && x.releaseYear>=2010); 
        const sortedArray = data.sort((a, b) => {
            const titleA = a.title ? a.title.toUpperCase() : '';
            const titleB = b.title ? b.title.toUpperCase() : '';
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
          }).slice(0, 21);

          setMovies(sortedArray)  
          console.log(movies)
    }
  
    return(
        <React.Fragment>
            <Header subHeader='Movies'/>
            <div className="card-container">
            {
            loading==true ?
            <Loader loaderMessage='Loading...'/>
            :
            movies.map((movie: any,index: number) => (
                <Card
                key={index}
                title="MOVIES"
                imageUrl={placeholder}
                alt={placeholder}
                footerText={movie.title}
                onClick="/movies"
                width='150px'
                height='250px'
                />
            ))
            }

            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Movies;