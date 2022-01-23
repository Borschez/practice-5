import React, { useState } from 'react';

import ModalWindow from './components/ModalWindow';
import ModalRoot from './components/ModalRoot';

import './App.css'

function App() {
  // признак отображения модального окна
  const [showModal, setShowModal] = useState(false);

  // обработчик нажатия кнопки отображения модального окна
  const handleClick = (e) => {
    setShowModal(true);
  }

  // обработчик нажатия кнопки закрытия модального окна
  // передается в компонент окна 
  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        Пример использования портала
      </header>
      <div id="content">
        <article>
          <button onClick={handleClick}>Показать модальное окно</button>
        </article>
        {/* условный рендеринг компонента-обертки с модальным окном в потомках */}
        {showModal && <ModalRoot><ModalWindow onClose={handleClose} /></ModalRoot>}
      </div>
    </div>
  );
}

export default App;
