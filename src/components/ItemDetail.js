import ItemCount from './ItemCount';
import { Button } from '@material-ui/core';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item.image
            ? 
                <div>
                    <picture>
                        <img src={item.image[0]} />
                    </picture>
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <spam>$ {item.cost}</spam>
                        <p>{item.stock} unidades en stock</p>
                    </div>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;