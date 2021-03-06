import React from 'react';

const WeatherInfo = props => {

  return (
    <div>
      {
        props.error &&
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      }
      {
        props.temperatura ?
          <div className="card card-body">
            <p>
              Ubicacion: {props.ciudad}, {props.pais}
            </p>
            <p>
              Temperatura: {props.temperatura} ℃, {props.descripcion}
            </p>
            <p>
              Humedad: {props.humedad} %
               </p>
            <p>
              Velocidad del Viento: {props.velocidad_del_viento} m/s
               </p>
          </div>
          :
          <div className="card card-body">
            <p>No hay peticion aun</p>
          </div>
      }
    </div>
  )
}

export default WeatherInfo;