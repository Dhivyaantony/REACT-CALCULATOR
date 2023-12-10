import React, { useState } from 'react';
import Button from './Button';
import './calculator.css'

const Calculator = () => {
  const [display, setDisplay] = useState(''); // To display the entered values and result

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C'
    ];

    return buttons.map((button, index) => (
      <Button key={index} value={button} onClick={handleButtonClick} />
    ));
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {renderButtons()}
      </div>
    </div>
  );
};

export default Calculator;
