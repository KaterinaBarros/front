import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to={"/"}>Home</Link>
                    <Link className="nav-link active" to={"productos"}>Productos</Link>
                    <Link className="nav-link active" to={"DondeEstamos"}>Donde estamos</Link>
                    <Link className="nav-link active" to={"InstrumentosABM"}>ABM Instrumentos</Link>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
