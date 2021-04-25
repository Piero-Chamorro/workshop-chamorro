import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';


function ItemListContainer(){

    const[items, setItems] = useState([]);



    useEffect(() => {
        const prueba = new Promise((resolve, reject)=>{
            const servo = [
                {
                    id:1,
                    service_name: "Servicio de Cocina",
                    description: "Una rica comida de nuestro amigo Kirby.",
                    price: 350,
                    currency: "$",
                    thumb: "./images/kirby_chef.png"
                },
                {
                    id:2,
                    service_name: "Servicio de Dibujo",
                    description: "Disfruta de un sesión de dibujo de nuestro amigo Kirby.",
                    price: 650,
                    currency: "$",
                    thumb: "./images/kirby_artist.png"
                },
                {
                    id:3,
                    service_name: "Servicio de Baile",
                    description: "Disfruta de un baile de nuestro amigo Kirby.",
                    price: 300,
                    currency: "$",
                    thumb: "./images/kirby_dancer.png"
                },
                {
                    id:4,
                    service_name: "Servicio de Canto",
                    description: "Disfruta de un canto de nuestro amigo Kirby.",
                    price: 550,
                    currency: "$",
                    thumb: "./images/kirby_singer.png"
                }
            ];
            setTimeout(() => {
                resolve(servo)
            },2000)
        })
        prueba.then((res)=>{
            setItems(res)
        })
        .catch(()=>{
            console.log("Error")
        })
        .finally(()=>{
            console.log("Finish")
        })
    },[])

    return(
        <div className="main-content">
            {items.length > 0 ? <ItemList services={items} /> : <img src="./images/kirby_sad.png" alt="nada"/> }
        </div>
    )
}
export default ItemListContainer;