import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import {useState } from "react";
import { useDispatch } from "react-redux";
import { addPalabra } from "../../../redux/dictionary/dictionaryActions";

const ModalAgregarPalabra = ({ show, close}) => {

    const [espanol, setEspanol] = useState('');
    const [ingles, setIngles] = useState('');
    const [portugues, setPortugues] = useState('');
    const dispatch = useDispatch();

    const agregarPalabra = () => {
        const palabra = {
            espanol: espanol,
            ingles: ingles,
            portugues: portugues
        };
        dispatch(addPalabra(palabra));
        console.log(palabra);
        setEspanol('');
        setIngles('');
        setPortugues('');
        close();
    }

    if (!show) return null;
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
            <Modal.Title>Traductor USIP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row" style={{marginBottom: '10px'}}>
                    <div className="form-group col-md-3">
                        <label>Español: </label>
                    </div>
                    <div className="form-group col-md-9">
                        <input
                            className="form-control"
                            type="text"
                            id="espanol"
                            name="espanol"
                            value={espanol}
                            onChange={(e) => setEspanol(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" style={{marginBottom: '10px'}}>
                    <div className="form-group col-md-3">
                        <label>Inglés: </label>
                    </div>
                    <div className="form-group col-md-9">
                        <input
                            className="form-control"
                            type="text"
                            id="ingles"
                            name="ingles"
                            value={ingles}
                            onChange={(e) => setIngles(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label>Portugues: </label>
                    </div>
                    <div className="form-group col-md-9">
                        <input
                            className="form-control"
                            type="text"
                            id="portugues"
                            name="portugues"
                            value={portugues}
                            onChange={(e) => setPortugues(e.target.value)}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Close
            </Button>
            <Button variant="primary" onClick={() =>{
                        agregarPalabra();
                        close();
                    }
                }>
                Agregar
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAgregarPalabra;