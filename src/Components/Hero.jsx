import React, { useState } from "react";
import { Advice } from "./Advice";
import "./Hero.css";

const BMICalculator = () => {
  const [userData, setUserData] = useState({
    userName: "",
    age: "",
    weight: "",
    height: "",
   // bmi: "",
  });

  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  
  const calculateBMI = () => {
    const {userName, age, weight, height } = userData;
    if (weight && height) {
      const heightInMeters = height * 0.3048; // convert height from feet to meters
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setUserData((prevState) => ({ ...prevState, bmi }));
    }
  };


  
  const submitData = async (event) => {
    event.preventDefault();
    
    calculateBMI();
    const { userName, age, weight, height, bmi } = userData;

    if (userName && age && weight && height) {
      const res = await fetch(
        "https://calcbmi-cb7cb-default-rtdb.firebaseio.com/userRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            age,
            weight,
            height,
            bmi,
          }),
        }
      );
      if (res) {
        // setUserData({
        //   userName: "",
        //   age: "",
        //   wight: "",
        //   heght: "",
        //   bmi: "",
        // });
        alert("data stored");
      } else {
        alert("please fill all the input boxes");
      }
    } else {
      alert("please fill all the input boxes");
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form method="POST">
        <div className="input">
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            className="input-field"
            placeholder=" Name"
            value={userData.userName}
            onChange={postUserData}
          />
        </div>
        <div className="input">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            className="input-field"
            placeholder=" Age"
            value={userData.age}
            onChange={postUserData}
          />
        </div>
        <div className="input">
          <label>Weight (kg):</label>
          <input
            type="text"
            name="weight"
            className="input-field"
            placeholder="Weight"
            value={userData.weight}
            onChange={postUserData}
          />
        </div>
        <div className="input">
          <label>Height (foot):</label>
          <input
            type="text"
            name="height"
            className="input-field"
            placeholder="Height"
            value={userData.height}
            onChange={postUserData}
          />
        </div>
        <button className="input" type="submit" onClick={submitData}>
          Calculate BMI
        </button>
      </form>
      <div className="message">
        {userData.bmi && (
          <div className="msg">
            <h2>BMI Result</h2>
            <p className="para">{userData.userName}, your BMI is: {userData.bmi}</p>
            <Advice data={userData.bmi} />
          </div>
        )}
      </div>
    </div>
  );
};
export default BMICalculator;
