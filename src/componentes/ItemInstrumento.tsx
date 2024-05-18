
import { useCarrito } from '../hooks/useCarrito.tsx'
import {Instrumento} from '../models/Instrumento.tsx';
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getInstrumentosApi } from "../services/ApiServicio";
import { CarritoContextProvider } from '../context/CarritoContext';
import { Carrito } from './Carrito';

type InstrumentoParams = {
    id: string;
    instrumento: string;


    imagen: string;
    precio: number;
    costoEnvio: string;
    cantidadVendida: 0;
    descripcion: string;
    categoria: string;
    initialHayStock:boolean;
    isProductInCart?:boolean;
    ingredienteObject:Instrumento;
}

function ItemInstrumento(instrumento : InstrumentoParams) {

    const [contador, incrementarCantidad] = useState(0);
    const text = instrumento.initialHayStock ? 'Comprar' : 'Sin Stock';
    const buttonClassName = instrumento.initialHayStock
        ? 'btn btn-primary'
        : 'btn btn-primary buttonSinStock';
    const handleClick = () => {
        instrumento.initialHayStock ? incrementarCantidad((contador) => contador ++) : 0;
    }
    //
    const {addCarrito, removeCarrito, cart, removeItemCarrito} = useCarrito()

    const verificaInstrumentoEnCarrito = (product: Instrumento) => {
        return cart.some(item => item.id === product.id)
    }

    const isInstrumentoInCarrito = verificaInstrumentoEnCarrito(instrumento.ingredienteObject)

    return (

        <>

            <Card key={instrumento.id} className="mb-3 text-start mb-sm-3 espacio"  style={{maxWidth: '800px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Card.Img src={`src/assets/img/${instrumento.imagen}`} className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <Card.Title className="fw-normal">{instrumento.instrumento}</Card.Title>
                            <Card.Text className="fs-4 fw-bold">${instrumento.precio}</Card.Text>
                            <div className="d-flex">
                                {instrumento.costoEnvio === "G" ?
                                    <img src={`src/assets/img/camion.png`}/> : null}
                                <Card.Text
                                    className={instrumento.costoEnvio === "G" ? 'text-success' : 'text-warning'}>{instrumento.costoEnvio === "G" ? "Envío gratis a todo el país" : `Costo de envío interior de Argentina $${instrumento.costoEnvio}`}</Card.Text>
                            </div>
                            <Card.Text>
                                <small className="text-muted">{instrumento.cantidadVendida} vendidos</small>
                            </Card.Text>


                            <button className="btn btn-primary">
                                <Link className="nav-link" to={`detalle/${instrumento.id}`}>Ver
                                    detalle</Link>
                            </button>
                            <div>
                                <p>
                                    <button className='iconoMasMenos' onClick={() => removeItemCarrito(instrumento.ingredienteObject)}>
                                        -
                                    </button>
                                    <button className='colorFondoBlanco'
                                            onClick={() => {
                                                isInstrumentoInCarrito
                                                    ? removeCarrito(instrumento.ingredienteObject)
                                                    : addCarrito(instrumento.ingredienteObject)
                                            }}
                                    >
                                        {
                                            isInstrumentoInCarrito
                                                ? <img src={`./img/deleteCart.png`} title='Quitar'/>
                                                : <img src={`./img/addCart.png`} title='Comprar'/>
                                        }
                                    </button>
                                    <button className='iconoMasMenos' onClick={() => addCarrito(instrumento.ingredienteObject)}>
                                        +
                                    </button>
                                </p>
                            </div>
                        </Card.Body>
                    </div>
                </div>
            </Card>


        </>
    )
}

export default ItemInstrumento