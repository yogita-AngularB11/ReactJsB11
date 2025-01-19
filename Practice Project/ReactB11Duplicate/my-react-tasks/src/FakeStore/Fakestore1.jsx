import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Fakestore1 = () => {

    //we need to get all categories and load categories into dropdown
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([
        {
            id: 0,
            title: " ",
            price: 0,
            description: "",
            image: "",
            rating: {
                rate: 0,
                count: 0
            }
        }])


    function loadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response => {
            response.data.unshift('all');
            setCategories(response.data);
        })
    }
    function loadProducts() {
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setProducts(response.data);
        })
    }
    useEffect(() => {
        loadCategories();
        loadProducts();
    }, [])



    return (
        <div className='container-fluid'>
            {/* header part */}
            <header className='d-flex bg-primary  text-light justify-content-between p-3 mt-1 border-1 fs-4'>
                <div>
                    <span className='fs-4'>Fakestore</span>
                </div>
                {/* navbar part */}
                <nav className='fs-5'>
                    <span>Electronics</span>
                    <span className='mx-3'>Jewelery</span>
                    <span>Men's Clothing</span>
                    <span className='mx-3'>Women's Clothing</span>
                </nav>
                <div >
                    <button className='btn btn-light'><span className='bi bi-person'></span></button>
                    <button className='btn btn-light mx-2'><span className='bi bi-heart'></span></button>
                    <button className='btn btn-light'><span className='bi bi-cart'></span></button>
                </div>
            </header>
            {/* section */}
            <section className='row mt-3'>
                {/* nav items */}
                <nav className='col-2'>
                    <div>
                        <label className='form-label fw-bold'>Select Category</label>
                        <div>
                            <select className='form-select'>
                                {
                                    categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                {/* main -showing product related data */}
                <main className='col-10 d-flex flex-wrap overflow-auto'style={{  height: '500px' }}>
                    {
                        products.map(product =>
                            <div key={product.id} className='card p-2 m-2' style={{ width: '200px' }}>
                                <img src={product.image} className='card-img-top' height="120px" alt="" />

                                <div className='card-header' style={{ height: '132px' }}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>&#8377; {product.price}</dd>
                                         
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate} <span className='bi bi-star-fill text-success'></span></dd>
                                        {/* <dt>Count</dt>
                                        <dd>{product.rating.count}</dd> */}
                                    </dl>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-warning w-100'><span className='bi bi-cart4'></span> Add to Cart</button>
                                </div>
                            </div>

                        )
                    }

                </main>
            </section>
        </div>
    )
}

export default Fakestore1
