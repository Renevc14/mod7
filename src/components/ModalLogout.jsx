import { motion } from "framer-motion";

const ModalLogout = ({ visible, onClose, onLogoutClick}) => {
    if (!visible) return null;

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div>
                    <p>¿Estás seguro que quieres cerrar sesión?</p>
                    <button
                        className="btn btn-primary"
                        onClick={onLogoutClick}>
                        Cerrar sesión
                    </button>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalLogout;