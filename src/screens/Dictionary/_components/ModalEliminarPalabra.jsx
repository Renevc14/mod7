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
        <Modal show={show} onHide={close} className="custom-modal">
            <Modal.Header closeButton>
            <Modal.Title>Eliminar Palabra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row" style={{marginBottom: '2px'}}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            id="palabra"
                            name="palabra"
                            placeholder="Ingrese la palabra a eliminar"
                            value={palabra}
                            onChange={(e) => setPalabra(e.target.value)}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Cerrar
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