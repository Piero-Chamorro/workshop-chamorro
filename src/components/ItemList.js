import React from 'react';
import Item from "./Item";

const ItemList = ({services}) => {

    return(
        <>
        {services.map((items)=>
            <div key={items.id} className="card">
                <Item service_name={items.service_name} description={items.description} price={items.price} currency={items.currency} thumb={items.thumb}/>
            </div>
        )}
        </>
    )
}

export default ItemList;