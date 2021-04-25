import React from 'react';


const Item = ({thumb,service_name,description,price,currency}) => {

    return(
        <>
            <div className="card-img">
                <img src={thumb} alt="imagenes de los servicios de la página"/>
            </div>

            <div className="card-header">
                <h2>{service_name}</h2>
                <p>{description}</p>
                <p className="price">{price}<span>{currency}</span></p>
                <div className="btn">Contratar servicio</div>
            </div>
        </>
    )
}
export default Item;