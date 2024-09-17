import { useState } from "react";
import ModalAgregarPalabra from "./_components/ModalAgregarPalabra";
import ModalEliminarPalabra from "./_components/ModalEliminarPalabra";
import ModalTraducir from "./_components/ModalTraducir";


const DictionaryPage = () => {

    const [showModalAgregarPalabra, setShowModalAgregarPalabra] = useState(false);
    const [showModalEliminarPalabra, setShowModalEliminarPalabra] = useState(false);
    const [showModalTraducir, setShowModalTraducir] = useState(false);

    const handleCloseAgregarPalabra = () => setShowModalAgregarPalabra(false);
    const handleCloseEliminarPalabra = () => setShowModalEliminarPalabra(false);
    const handleCloseTraducir = () => setShowModalTraducir(false);

    const agregarPalabra = () => {
        setShowModalAgregarPalabra(true);
    }

    const eliminarPalabra = () => {
        setShowModalEliminarPalabra(true);
    }

    const traducir = () => {
        setShowModalTraducir(true);
    }


    return (
        <div className="App-header">
            <h1>DICTIONARY USIP</h1>
            <ModalAgregarPalabra
                show={showModalAgregarPalabra}
                close={handleCloseAgregarPalabra}
            />
            <ModalEliminarPalabra
                show={showModalEliminarPalabra}
                close={handleCloseEliminarPalabra}
            />
            <ModalTraducir
                show={showModalTraducir}
                close={handleCloseTraducir}
            />
            <p>
                Este modulo(diccionario) corresponde al recuperatorio del <code>modulo-7</code> ReactJS.
            </p>
            <p>
                URL <a href="https://github.com/Renevc14/mod7">https://github.com/Renevc14/mod7</a>
            </p>

            <div className="row button-container">
                <div className="form-group col-md-12 d-flex justify-content-center">
                            <button className="btn btn-primary" style={{marginRight: '10px'}} onClick={agregarPalabra}>Agregar Palabra</button>
                            <button className="btn btn-primary" style={{marginLeft: '10px'}} onClick={eliminarPalabra}>Eliminar Palabra</button>            
                </div>
                <div className="form-group col-md-12 d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={traducir}>Traducir</button>
                </div>
            </div>

        </div>
    );
};

export default DictionaryPage;