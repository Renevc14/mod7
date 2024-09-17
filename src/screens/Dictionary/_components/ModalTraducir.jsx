import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../DisctionaryPage.css'

const ModalTraducir = ({ show, close }) => {
    const [palabra, setPalabra] = React.useState('');
    const [idioma, setIdioma] = React.useState('espanol');
    const [traduccion, setTraduccion] = React.useState('');
    const dispatch = useDispatch();
    const palabras = useSelector(state => state.dictionary.formData.palabras);

    const traducirPalabra = (texto, idioma) => {
        // Buscar la palabra en el array de palabras
        const palabraEncontrada = palabras.find(palabra => 
            palabra.espanol === texto || 
            palabra.ingles === texto || 
            palabra.portugues === texto
        );
        if (!palabraEncontrada) {
            return `La palabra '${texto}' no se encuentra en el diccionario.`;
        }
        switch (idioma) {
            case 'espanol':
                return palabraEncontrada.espanol;
            case 'ingles':
                return palabraEncontrada.ingles;
            case 'portugues':
                return palabraEncontrada.portugues;
            default:
                return `Idioma no soportado: '${idioma}'.`;
        }
    };

    const handleTranslate = () => {
        const resultado = traducirPalabra(palabra, idioma);
        setTraduccion(resultado);
    };
    
    if (!show) return null;
    return (
        <Modal show={show} onHide={close} className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Traductor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="form-group col-md-3 fw-bold">
                        <label>Palabra: </label>
                    </div>
                    <div className="form-group col-md-9">
                        <input
                            className="form-control"
                            type="text"
                            id="palabra"
                            name="palabra"
                            placeholder={`Ingrese la palabra a traducir`}
                            value={palabra}
                            onChange={(e) => setPalabra(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="form-group col-md-3 fw-bold">
                        <label>Idioma de Traducción: </label>
                    </div>
                    <div className="form-group col-md-9">
                        <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
                            <option value="espanol">Español</option>
                            <option value="ingles">Inglés</option>
                            <option value="portugues">Portugués</option>
                        </select>
                    </div>
                </div>
                {traduccion && <p>Traducción: {traduccion}</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleTranslate}>
                    Traducir
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalTraducir;
