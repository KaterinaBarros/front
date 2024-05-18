import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ListaInstrumentos from "../componentes/ListaInstrumento";
import DetalleInstrumento from "../componentes/DetalleInstrumento";
import Home from "../componentes/Home";
import DondeEstamos from "../componentes/DondeEstamos";
import InstrumentosABM from "../componentes/InstrumentosABM";

class AppRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<ListaInstrumentos />} />
        <Route path="productos/detalle/:id" element={<DetalleInstrumento />} />
        <Route path="DondeEstamos" element={<DondeEstamos />} />
        <Route path="InstrumentosABM" element={<InstrumentosABM />} />
      </Routes>
    );
  }
}

export default AppRoutes;