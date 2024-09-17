import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

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
    
        // Si no se encuentra la palabra, devolver un mensaje de error
        if (!palabraEncontrada) {
            return `La palabra '${texto}' no se encuentra en el diccionario.`;
        }
    
        // Devolver la traducción según el idioma solicitado
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
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Traductor USIP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Qué palabra desea traducir en el diccionario?</p>
                <p>Agregue su palabra y después seleccione el idioma a traducir.</p>
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="form-group col-md-3">
                        <label>Palabra a traducir: </label>
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
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="form-group col-md-3">
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
                    Close
                </Button>
                <Button variant="primary" onClick={handleTranslate}>
                    Traducir
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalTraducir;
