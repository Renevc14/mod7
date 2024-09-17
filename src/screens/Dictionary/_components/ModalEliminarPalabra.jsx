import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import {useState } from "react";
import { useDispatch } from "react-redux";
import { removePalabra } from "../../../redux/dictionary/dictionaryActions";

const ModalEliminarPalabra = ({ show, close}) => {
    

    const [palabra, setPalabra] = useState('');
    const dispatch = useDispatch();
    const eliminarPalabra = () => {
        dispatch(removePalabra(palabra));
        close();
    }
    if (!show) return null;
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
            <Modal.Title>Traductor USIP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Que palabra desea eliminar del diccionario?</p>
                <p>Puede escribir su palabra en ESPAÑOL, INGLÉS O PORTUGUES </p>
                <div className="row" style={{marginBottom: '10px'}}>
                    <div className="form-group col-md-3">
                        <label>Palabra: </label>
                    </div>
                    <div className="form-group col-md-9">
                        <input
                            className="form-control"
                            type="text"
                            id="palabra"
                            name="palabra"
                            value={palabra}
                            onChange={(e) => setPalabra(e.target.value)}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Close
            </Button>
            <Button variant="primary" onClick={() =>{
                        eliminarPalabra();
                    }
                }>
                Eliminar
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEliminarPalabra;