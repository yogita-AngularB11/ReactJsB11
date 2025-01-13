import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useReducer } from 'react'

let initialState = { wishList: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'addToWishList':
            // state is responsible for collecting data from store &state is responsible for storing data in store
            return { wishList: state.wishList + 1 }
        case 'removeFromWishList':
            return { wishList: state.wishList - 1 }

    }
}
const ReducerDemo = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    function handleWishListClick() {
        dispatch({ type: 'addToWishList' })
    }

    function handleRemoveWishListClick() {
        dispatch({ type: 'removeFromWishList' })
    }
    return (
        <div>
            <h3>ShoppersStop</h3>
            <button style={{ position: 'fixed', top: '50px', right: '50px' }} className='btn btn-warning bi bi-heart'>
                <span className='badge bg-danger rounded rounded-circle position-absolute '>{state.wishList}</span>
            </button>

            <div className='card' style={{ width: '200px' }}>
                <img src="iphone-black.jpeg" className='card-img-top' height="200" width="100" alt='' />
                <div className="card-header">
                    <div>iPhone14 (Black) 128GB</div>
                </div>
                <div className="card-footer">
                    <button className='btn btn-success bi bi-heart' onClick={handleWishListClick}></button>
                    <button className='btn btn-warning bi bi-cart4 ms-2'></button>
                <button className='btn btn-danger bi bi-trash ms-2' onClick={handleRemoveWishListClick}></button>
                </div>
            </div>
        </div>
    )
}

export default ReducerDemo
