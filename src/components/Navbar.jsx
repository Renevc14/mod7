import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
    const form = useSelector(state => state.form);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className='container-fluid'>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/default">Default</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/loginForm">Login Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dictionary">Dictionary</Link>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" style={{ color: 'white' }}>Bienvenido {form.formData.username}: {form.formData.email}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;