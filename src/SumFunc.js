import React, { useState } from 'react';

function SumFunc() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  /* var handleCalculate = function () {
    var sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  }; */

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Összeadó</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Első szám"
          style={{ margin: '5px', padding: '5px' }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Második szám"
          style={{ margin: '5px', padding: '5px' }}
        />
      </div>
      <button onClick={handleCalculate} style={{ margin: '5px', padding: '5px' }}>
        Összeadás
      </button>
      {result !== null && <p>Eredmény: {result}</p>}
    </div>
  );
}

export default SumFunc;
