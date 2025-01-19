import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FakeStore = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([
        {
            id: 0,
            title: " ",
            price: 0,
            description: "",
            category: "",
            image: "",
            rating: {
                rate: 0,
                count: 0
            }
        }])
    const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(cartItems.length)
    const [cartCount, setCartCount] = useState()
    const [searchString, setSearchString] = useState('')

    function loadCategories() {
        axios.get("https://fakestoreapi.com/products/categories").then(response => {
            response.data.unshift('all');
            setCategories(response.data);
        })
    }
    function loadProducts(url) {
        axios.get(url).then(response => {
            setProducts(response.data);
        })
    }
    function handleCategoryChange(e) {
        if (e.target.value === 'all') {
            loadProducts("https://fakestoreapi.com/products")
        } else {
            loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }
    function handleAddToCartClick(id) {
        // alert(id)
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                cartItems.push(response.data);
                alert(`${response.data.title}\n Added to the cart`);
                getCartCount();
            })
    }
    function handleDeleteClick(id) {
        // alert(id)
        const index = cartItems.findIndex(user => user.id === id);
        cartItems.splice(index, 1);
        getCartCount();
    }

    function getCartCount() {
        setCartCount(cartItems.length)
    }

    const handleInputChange = (e) => {
        setSearchString(e.target.value.toLowerCase()); // Update the search string in state
    };

    const handleSearchClick = () => {
        // loadProducts(`https://fakestoreapi.com/products/category/${searchString}`)
        const matchedProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchString)
        );
    
        if (matchedProducts.length > 0) {
            setProducts(matchedProducts); // Update displayed products with matches
        } else {
            alert("No products found with the given title.");
        }
    };
    

    useEffect(() => {
        loadCategories();
        loadProducts("https://fakestoreapi.com/products");
        getCartCount();
    }, [])

    return (
        <div className="container-fluid">
            <header className="d-flex justify-content-between fs-6 p-2 border bg-primary text-light">
                <div>
                    <span className="fs-4">FakeStore</span>
                </div>
                {/* search bar -search product based on category */}
                <div>
                    <div className='input-group'>
                        <input type="text" placeholder='Search by category' onChange={handleInputChange} className='form-control' />
                        <button className='btn btn-warning bi bi-search' onClick={handleSearchClick}></button>
                    </div>
                </div>
                <nav>
                    <span>Electronics</span>
                    <span className="mx-2">Mens Clothing</span>
                    <span>Women Fashion</span>
                    <span className="ms-2">Jewellery</span>
                </nav>
                <div>
                    <button className="btn btn-light"><span className="bi bi-person"></span></button>
                    <button className="btn btn-light mx-2"><span className="bi bi-heart"></span></button>
                    {/* <button className="btn btn-light"><span className="bi bi-cart"></span></button> */}
                    <button data-bs-toggle="modal" data-bs-target="#cart" className="btn btn-light bi bi-cart position-relative"><span className="badge bg-danger rounded rounded-circle position-absolute">{cartCount}</span></button>
                </div>
                {/* pop-up modal */}
                <div className='modal fade' id='cart'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-primary">
                                Your Cart Items
                                <button className='btn btn-close' data-bs-dismiss='modal'></button></div>
                            <div className="modal-body">
                                <table className='table table-hover '>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Preview</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map(item =>
                                                <tr key={item.id}>
                                                    <td>{item.title}</td>
                                                    <td><img src={item.image} width="50" height="50" alt="" /></td>
                                                    <td>{item.price}</td>
                                                    <td><button className='bi bi-trash btn btn-danger' onClick={() => { handleDeleteClick(item.id) }}></button></td>
                                                </tr>)
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan="2">Total Amount</th>
                                            <th>
                                                {
                                                    cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0).toFixed(2)
                                                }
                                            </th>
                                        </tr>
                                    </tfoot>

                                </table></div>

                        </div>
                    </div>

                </div>
            </header >
            <section className='mt-3 row'>
                <nav className='col-2'>
                    <div>
                        <label className='form-label'>Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className='form-select'>
                                {
                                    categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className='col-10 d-flex flex-wrap overflow-auto' style={{ height: '600px' }}>
                    {
                        products.map(product =>
                            <div key={product.id} className='card p-2 m-2' style={{ width: '200px' }}>
                                <img src={product.image} className='card-img-top' height="120px" alt="" />
                                <div className='card-header' style={{ height: '125px' }}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>&#8377; {product.price}</dd>
                                        {/* <dt>Description</dt>
                                        <dd>{product.description}</dd> */}
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate} <span className='bi bi-star-fill text-success'></span></dd>
                                        {/* <dt>Count</dt>
                                        <dd>{product.rating.count}</dd> */}
                                    </dl>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-warning w-100' onClick={() => handleAddToCartClick(product.id)}><span className='bi bi-cart4'></span> Add to Cart</button>
                                </div>
                            </div>

                        )
                    }
                </main>
            </section>
        </div >
    )
}

export default FakeStore
