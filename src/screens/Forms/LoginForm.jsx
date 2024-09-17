import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { clearFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo, { modalInfo } from "../../components/ModalInfo";
import ModalLogout from "../../components/ModalLogout";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({username: '', email: '', password: ''});
    const form = useSelector(state => state.form);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const [show_hide, setShowHide] = useState(false);
    const hideModalInfo = () => {
        setShowModalInfo(false);
    }

    const show_ModalLogout = () => {
        setShowModalLogout(true);
    }

    const showHidePassword = () => {
        if (show_hide) {
            setShowHide(false);
        }else{
            setShowHide(true);
        }
    }
    const dispatch = useDispatch();

    const resetFormAndGlobalState = () => {
        resetForm();            
        dispatch(clearFormData());
        setShowModalLogout(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if(values.password === form.formData.password){
            console.log('Login correcto');
            dispatch(saveFormData(values));
        }else{
            console.log('Login incorrecto');
            console.log(form.formData);
            setShowModalInfo(true);
        }
        
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <ModalInfo 
                    visible={showModalInfo} 
                    message="Password Incorrecto" 
                    onClose={hideModalInfo}
                    />
            <ModalLogout
                    visible={showModalLogout}
                    onClose={() => setShowModalLogout(false)}
                    onLogoutClick={resetFormAndGlobalState}
                    />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center">Login Form</h4>
                    <h5>Username: {form.formData.username}</h5>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label>Username: </label>
                        </div>
                        <div className="form-group col-md-9">
                            <input
                                className="form-control"
                                type="text"
                                id="username"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label>Email: </label>
                        </div>
                        <div className="form-group col-md-9">
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label>Password: </label>
                        </div>
                        <div className="form-group col-md-6">
                            <input
                                className="form-control"
                                type={show_hide ? "text" : "password"}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <button className="btn" type="button" onClick={showHidePassword}>
                                <i id="show_hide_image" className={show_hide ? "bi bi-eye-fill" : "bi bi-eye"}></i>
                            </button>
                        </div>
                    </div>
                    <div className="row button-container">
                        <div className="form-group col-md-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <a className="btn btn-link" onClick={show_ModalLogout}>Logout</a>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>        
    );
};

export default LoginForm;