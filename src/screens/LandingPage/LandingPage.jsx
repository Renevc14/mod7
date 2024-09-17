import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
    return (
        <div>
            <div className="hero-section text-center p-4 bg-success text-white">
                <h1 className="display-5 fw-bold">Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </div>
            
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <h2>Bienvenido</h2>
                        <hr size="50px" color="green" />
                        <p>
                            Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <h3>Temas Cubiertos</h3>
                        <hr size="50px" color="green" />
                        <ul className="list-unstyled">
                            <li>Componentes funcionales y de clase</li>
                            <li>Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></li>
                            <li>Creación de <strong>custom hooks</strong> como <strong>useForm</strong></li>
                            <li>Gestión de variables de estado con <strong>useState</strong></li>
                            <li>Gestión de estado global con <strong>Redux</strong></li>
                            <li>Integración de <strong>Redux</strong> con <strong>React</strong></li>
                            <li>Manejo de formularios en <strong>React</strong></li>
                            <li>Publicando nuestra página con <strong>GitHub Pages</strong></li>
                        </ul>
                    </div>
                </div>

                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <h3>Recursos Adicionales</h3>
                        <hr size="50px" color="green" />
                        <p>
                            Para profundizar en los temas cubiertos, consulta los siguientes recursos:
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default LandingPage;
