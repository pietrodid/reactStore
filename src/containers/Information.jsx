import React, {useRef, useContext} from "react";
import '../styles/components/Information.css';
import { Link, useNavigate } from "react-router-dom";
import {AppContext} from '../context/AppContext';

const Information = () => {
    const {state, addToBuyer} = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();
    const {cart} = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone')
        }
        addToBuyer(buyer);
        navigate('/checkout/payment');
    }
    return (
        <div className="Infomation">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre Completo" name="name"/>
                        <input type="text" placeholder="Correo Electronico" name="email"/>
                        <input type="text" placeholder="Dirección" name="address"/>
                        <input type="text" placeholder="Apto" name="apto"/>
                        <input type="text" placeholder="Ciudad" name="city"/>
                        <input type="text" placeholder="Pais" name="country"/>
                        <input type="text" placeholder="Estado" name="state"/>
                        <input type="text" placeholder="Codigo Postal" name="cp"/>
                        <input type="text" placeholder="Telefono" name="phone"/>
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-Back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-Next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
                <div className="Information-sidebar">
                    <h3>Pedido:</h3>
                    {cart.map((item) => 
                        <div className="Information-element" key={item.title}>
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
);
};

export {Information};