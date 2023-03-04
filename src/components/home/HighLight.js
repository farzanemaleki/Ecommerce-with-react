import React from "react";

import HighLightData from "../../data/HighLightData" 

const HighLightCard = ({data}) =>{
    let style= "col-sm-3";
    if(data.id === 2){
        style= "col-sm-6"
    }
    return(
        <div className={`${style} animate__animated animate__fadeInUp animate__slow`} >
            <div className="cat-item">
            <figure>
                <a href="shop-full-width.html">
                <img
                    className="img-responsive"
                    alt=""
                    src={data.img}
                />
                </a>
                <figcaption>
                <div className="cat-description">
                    <h3>{data.header}</h3>
                    <a href={data.link}>Read More</a>
                </div>
                </figcaption>
            </figure>
            </div>
        </div>
    )
}

const HighLight = () => {
    
  return (
    <div>
      <section className="highlight">
        <div className="container">
          <div className="row row-narrow">
           {
            HighLightData.map(data => (
                <HighLightCard key={data.id} data={data} />
            ))
           }
            </div>
        </div>
      </section>
       
    </div>
  );
};

export default HighLight;
