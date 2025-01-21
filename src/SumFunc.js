import React, { useState, useMemo } from 'react';

function SumFunc() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const result = useMemo(() => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log("useMemo fut");
    return isNaN(sum) ? null : sum;
  }, [num1, num2]);

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
      <p>Eredmény: {result !== null ? result : 'Adj meg érvényes számokat!'}</p>
    </div>
  );
}

export default SumFunc;
