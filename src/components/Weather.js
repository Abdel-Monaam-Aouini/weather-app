import React from 'react'

const Weather = (props) => {
    return (
      <div>
        <div className="container">
          <div className="cards pt-4">
            <h1>{props.city}</h1>
            <h5 className="py-4">
              <i className={`wi ${props.weatherIcon} display-1`}></i>
            </h5>
            {props.temp_celsuis?<h1 className="py-2">{props.temp_celsuis}&deg;</h1>:null}
            {minMaxTemp(props.temp_min,props.temp_max)}
    <h4 className="py-3">{props.description}</h4>
          </div>
        </div>
        
      </div>
    
    )
};

function minMaxTemp(min,max){
  if(min && max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
  }
}

export default Weather;
