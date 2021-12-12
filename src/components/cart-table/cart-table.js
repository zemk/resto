import React from 'react';
import './cart-table.scss';
import {deleteFromCart}   from '../../actions'
import { connect } from 'react-redux';


const CartTable = ({items, deleteFromCart}) => {
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item =>{
                        
                        const{ title, price, url,id} =item;
                        return(
                             <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={()=>deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
               
            </div>
        </>
    );
};
const mapStateToPros =({items})=>{
    return {
        items
    }
}

const mapDisatchToProps ={
    deleteFromCart
    
};
export default connect(mapStateToPros, mapDisatchToProps)(CartTable);