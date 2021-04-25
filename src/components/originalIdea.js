import React from 'react';
import services_card from "../data/services_data";

const ItemList = () => {
    const listItems = services_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card-img">
                <img src={item.thumb} alt="imagenes de los servicios de la página"/>
            </div>

            <div className="card-header">
                <h2>{item.service_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Contratar servicio</div>
            </div>
        </div>
    );
    return(
        <div className="main-content">
            {listItems}
        </div>
    )
}
export default ItemList;