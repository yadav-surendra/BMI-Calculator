import React from 'react'

export const Advice = ({data}) => {
    var msg = '';
    if(data < 18.5) {
        msg = "You are underweight. You should gain some weight. Try eating high protien diet."
    }
    else if (data > 18.5 && data < 24.9){
        msg = "You have normal BMI. keep yourself in this shape."
    }
    else if (data > 25 && data < 29.9){
        msg = "You have slightly overweight. You should start doing regular exercise to keep yourself in good health."
    }
    else if (data > 30 ){
        msg = "You have obessed. You need goodiet plan and medical assistance immediately."
    }
     else {
        msg="nothing to say."
    }
    
  return (
    <div>
        <p>
            {msg}
        </p>
    </div>
  )
}
