import React from 'react';
import fakadata from '../../fakedata';
import {useState} from 'react';
import './Crouse.css';
import CrouseDetails from '../CrouseDetails/CrouseDetails';
import Cart from '../Cart/Cart';

const Crouse = () => {
    
    const first15 = fakadata.slice(0,15);
    const [crouseDetails, setCrouseDetails] = useState(first15);
    const [cart, setCart] = useState([]);
   
    const handleEnroll = (crouseDetails) =>{
        const newCart = [...cart, crouseDetails];
        setCart(newCart);
    }
    return (
        
            <div className="crouse-container">
                <div className="crouseDetails-container">
                 
                    { crouseDetails.map(cd=> <CrouseDetails handleEnroll = {handleEnroll} crouseDetails={cd}></CrouseDetails>)}
                  
                </div>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>

                </div>
            </div>

            
            
      
    );
};

export default Crouse;