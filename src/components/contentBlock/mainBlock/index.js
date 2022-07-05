import { useState } from 'react';
import './mainBlock.css';

const MainBlock = (n) =>{
    var num;
    !isNaN(n) ? num = n : num = 5;

    const[number, setNumber] = useState(num);

    const plusNumber =() =>{
        setNumber (number+1);
    }

    const minusNumber =() =>{
        const newNumber = Math.max(number-1, 0);
        setNumber (newNumber);
    }

        return (
            <div className="main-block">
               <div className="container">
                    <div className="control" onClick={plusNumber}>+</div>
                    <div className="result">{number}</div>  
                    <div  className="control" onClick={minusNumber}>-</div>
               </div>
            </div>
        );
    }


export default MainBlock;