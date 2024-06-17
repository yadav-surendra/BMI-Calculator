import React, { useState } from 'react';
import { Advice } from './Advice';
import './Hero.css';

const BMICalculator = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const calculateBMI = (event) => {
        event.preventDefault();
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 3.28084;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
        }
    };

    return (
        <div className="container">
            <h1>BMI Calculator</h1>
            <form onSubmit={calculateBMI}>
                <div className="input">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input">
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="input">
                    <label>Weight (kg):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className="input">
                    <label>Height (foot):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <button className="input" type="submit">Calculate BMI</button>
            </form>
            {bmi && (
                <div>
                    <h2>BMI Result</h2>
                    <p>{name}, your BMI is: {bmi}</p>
                    <Advice data={bmi} />
                </div>
            )}
        </div>
    );
};

export default BMICalculator;
