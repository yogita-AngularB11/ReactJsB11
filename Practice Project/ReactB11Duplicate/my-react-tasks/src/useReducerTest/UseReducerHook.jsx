
//useState, useEffect, useRef, useContext, useMemo, useReducer

import React, { useReducer } from 'react'

const UseReducerHook = () => {

    // const reducer = (count, action) =>{

    //     switch(action){

    //         case 'add' :
    //             return count+1;
    //             break;

    //         case 'sub' :
    //             return count-1;
    //             break;

    //         case 'res' :
    //             return 0;
    //             break;

    //         default :
    //         break;
    //     }

    // }

    const[count, dispatch] = useReducer(reducer, 0)

    function reducer(count, action){

        switch(action){

            case 'add' :
                return count+1;
                break;

            case 'sub' :
                return count-1;
                break;

            case 'res' :
                return 0;
                break;

            default :
            break;
        }
    }

    
  return (
    <>
      
      <h3>Counter using useReducer hook</h3>
      <p> Count : {count}</p>
      <div>
        
        <button onClick={()=>dispatch('add')} >Increment</button>
        <button onClick={()=>dispatch('sub')} >Decrement</button>
        <button onClick={()=>dispatch('res')}>Reset</button>

      </div>

    </>
  )
}

export default UseReducerHook
