import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "../../../store/carts";
import { getItem, fetchItem } from "../../../store/items";
import { Link } from "react-router-dom";

import './CartIndexForm.css';
import bells from '../../../assets/images/bells.png';


const CartIndexForm = ({cartItem}) => {
   const dispatch = useDispatch();
   const item = useSelector(getItem(cartItem.itemId));
   const currentUser = useSelector(state => state.session.user);
   

   useEffect(() => {
      dispatch(fetchItem(cartItem.itemId))
   }, [])

   if (item === undefined) return null;

   const handleUpdate = (e) => {
      dispatch(updateCart({id: cartItem.id,
                           owner_id: currentUser.id, 
                           item_id: cartItem.itemId, 
                           quantity: parseInt(e.currentTarget.value)}))
   }

   return (
      <>
         <div className='price'>Price</div>
         <hr className="cart-form-spacer"/>
         <div className="cart-index-form">
            <Link className='cart-image-container' to={`/items/${item.id}`}>
               <img className='cart-image' src={item.photoUrls[1]} alt='' />
            </Link>
            <div className='cart-form'>
               <Link to={`/items/${item.id}`}>
                  {item.itemName}
               </Link>
               <div className="green-stock">
                  In Stock
               </div>
               <div className="cart-info">
                  <span>Size:</span> {item.dimensions}
               </div>
               <div className="cart-info">
                  <span>Color:</span> {item.colors}
               </div>
               <div className="cart-form-bottom-container">
                  <div className="cart-form-bottom">
                     <select className='cart-form-select' value={cartItem.quantity} onChange={handleUpdate}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        <option value='13'>13</option>
                        <option value='14'>14</option>
                        <option value='15'>15</option>
                        <option value='16'>16</option>
                        <option value='17'>17</option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                        <option value='21'>21</option>
                        <option value='22'>22</option>
                        <option value='23'>23</option>
                        <option value='24'>24</option>
                        <option value='25'>25</option>
                        <option value='26'>26</option>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                     </select>
                     <div className="cart-form-vert"/>
                     <div className='cart-delete' onClick={() => dispatch(deleteCart(cartItem.id))}>
                        Delete
                     </div>
                  </div>
               </div>
            </div>
            <div className="cart-item-price">
               <img className='cart-bells' src={bells}/>{item.bells}
            </div>
         </div>
      </>
   )
}

export default CartIndexForm;