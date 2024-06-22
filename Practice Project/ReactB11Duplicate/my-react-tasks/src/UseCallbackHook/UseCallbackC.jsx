import React, { useCallback, useState } from 'react'

const UseCallbackC = ({number1, number2, count}) => {
    
    const[sum1, setSum] = useState(0)

    const test = ()=>{
        let sum=0;
        sum = number1+number2;
        console.log('Button Clicked')
        console.log(sum)

        setSum(sum1+1);
        console.log(sum1)
    }

    const handleClick = useCallback(()=>{
            let sum=0;
            sum = number1+number2;
            console.log('Button Clicked')
            console.log(sum)
            
            setSum(sum1+1);
            console.log(sum1)

    }, [number1, number2]);


  return (
    <div>
        <h3>UseCallback Child</h3>
        <p> Count : {count}</p>
        <button onClick={handleClick} >click</button>
    </div>
  )
}

export default UseCallbackC
