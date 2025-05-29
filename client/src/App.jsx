import { useState } from 'react';
import './App.css';

export default function FormComponent() {
  // Стейт для отслеживания открыт ли форм или нет
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения состояния формы
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`form ${isOpen ? 'open' : ''}`}>
      {/* Заголовок с обработчиком клика */}
      <div 
        className="glass glass--gradient glass--heading"
        onClick={toggleForm}
        style={{ cursor: 'pointer' }}
      >
        <span className="form-header">
          <span className="form-icon"></span>
          <span className="form-title">What would you like to build today?</span>
        </span>
        <button className="form-close-button">✕</button>
      </div>
      
      {/* Инпут */}
      <div id="input" className="glass">
        <input 
          type="text" 
          placeholder="Type your request here"
        />
      </div>
    </div>
  );
}
