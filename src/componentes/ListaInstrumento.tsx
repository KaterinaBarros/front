import { useState, useEffect } from "react";
import {Instrumento}  from '../models/Instrumento';
import ItemIngrediente from './ItemInstrumento';
import { getInstrumentosApi } from "../services/ApiServicio";
import { CarritoContextProvider } from '../context/CarritoContext';
import { Carrito } from './Carrito';

const ListaInstrumentos = () => {
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

    const getInstrumentos = async () => {
        const data: any = await getInstrumentosApi();
        setInstrumentos(data.instrumentos);
    }

    useEffect(() => { getInstrumentos(); }, []);

    if (!instrumentos) {
        return(
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <div>
            <CarritoContextProvider>
                <h1>Instrumentos</h1>
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                {instrumentos.map((instr:Instrumento) => {
                                    return(
                                        <ItemIngrediente ingredienteObject={instr}  id={instr.id} instrumento={instr.instrumento} precio={instr.precio} categoria={instr.categoria} imagen={instr.imagen} descripcion={instr.descripcion} marca={instr.marca} modelo={instr.modelo} costoEnvio={instr.costoEnvio} cantidadVendida={instr.cantidadVendida} initialHayStock={true}></ItemIngrediente>
                                    )})}
                            </div>
                        </div>
                        <div className="col-3">
                            <b>Carrito Compras</b>
                            <hr></hr>
                            <Carrito></Carrito>
                        </div>
                    </div>
                </CarritoContextProvider>
        </div>
    );
};

export default ListaInstrumentos;
