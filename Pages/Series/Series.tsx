import React,{useState,useEffect} from 'react';
import './Series.css';
import Header from '../../Compoents/Header/Header';
import Footer from '../../Compoents/Footer/Footer';
import Card from '../../Compoents/Card/Card';
import placeholder from '../../assets/store/placeholder.png'


const Series = () => {
    const [Series, setSeries] = useState<any>([]);

    useEffect(() => {
        getData();
    },[]);
    
    const getData = async() => {
        let jsonData = require('../../Data/sample.json');
        const data = jsonData?.entries.filter((x) => x.programType == "series" && x.releaseYear>=2010); 
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

          setSeries(sortedArray)  
    }
  
    return(
        <React.Fragment>
            <Header subHeader='Series'/>
            <div className="card-container">
            {
            Series.map((series:any,index:number) => (
                <Card
                key={index}
                title="Series"
                imageUrl={placeholder}
                footerText={series.title}
                onClick="/Series"
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

export default Series;