import React from "react";

import './style.css'

// компонент модального окна
export default class ModalWindow extends React.Component {

    render() {
        // получаем обработчик закрытия окна
        const { onClose } = this.props;
        return (
            <div className="modal">
                <button onClick={onClose}>Закрыть</button>
            </div>
        )
    }
}