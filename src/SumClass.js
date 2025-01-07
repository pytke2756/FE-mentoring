import React, { Component } from 'react';

class SumClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: null,
    };
  }

  handleCalculate = () => {
    const { num1, num2 } = this.state;
    const sum = parseFloat(num1) + parseFloat(num2);
    this.setState({ result: sum });
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Összeadó</h2>
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => this.handleChange('num1', e.target.value)}
            placeholder="Első szám"
            style={{ margin: '5px', padding: '5px' }}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => this.handleChange('num2', e.target.value)}
            placeholder="Második szám"
            style={{ margin: '5px', padding: '5px' }}
          />
        </div>
        <button onClick={this.handleCalculate} style={{ margin: '5px', padding: '5px' }}>
          Összeadás
        </button>
        {result !== null && <p>Eredmény: {result}</p>}
      </div>
    );
  }
}

export default SumClass;
