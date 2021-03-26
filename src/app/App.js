import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

import { WEATHER_KEY} from './keys';
class App extends Component{

    state = {
        temperatura:'',
        descripcion :'',
        humedad:'',
        velocidad_del_viento:'',
        Pais:'',
        ciudad:'',
        error: null
    };

    getWeather =  async e =>{
      e.preventDefault();
      const  { Ciudad, Pais } = e.target.elements; 
      const CiudadValue = Ciudad.value;
      const PaisValue = Pais.value;   
      
      if (CiudadValue && PaisValue){
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${CiudadValue},${PaisValue}&appid=${WEATHER_KEY}&units=metric`;
        
        const response = await fetch(API_URL); 
        const data =  await response.json();
  
        this.setState({
            temperatura: data.main.temp,
            descripcion: data.weather[0].description,
            humedad:     data.main.humidity,
            velocidad_del_viento: data.wind.speed,
            pais: data.sys.country,
            ciudad: data.name,
            error: null
  
        });
      }else {
          this.setState({error:'Por favor ingrese ciudad y pais'})
      }
     
    }

    render (){
        return( 
            
           <div className=" container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;