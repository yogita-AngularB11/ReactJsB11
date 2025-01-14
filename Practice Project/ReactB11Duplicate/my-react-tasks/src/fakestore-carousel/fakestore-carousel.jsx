import { useEffect, useState, useRef } from "react";
import axios from "axios";


const FakestoreCarousel = () => {
    const [product, setProduct] = useState({ id: 0, title: '', price: 0, image: '', description: '', rating: { rate: 0, count: 0 } })
    const [status, setStatus] = useState("Manual Mode");

    let count = useRef(1);
    let thread = useRef(null);  //to store function


    function LoadProduct(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data)
            })
    }

    function LoadProductAuto() {
        count.current = count.current + 1
        axios.get(`https://fakestoreapi.com/products/${count.current}`)
            .then(response => {
                setProduct(response.data)
            })
    }

    useEffect(() => {
        LoadProduct(1);
    }, [])

    function handleNextClick() {
        //useRef is you allocate memory to store some data not for presentation just for for internal use
        //count is reference.current gives current thread.in current thread we can store value or function
        count.current = count.current + 1;
        LoadProduct(count.current)

    }

    function handlePreviousClick() {
        count.current = count.current - 1;
        LoadProduct(count.current)
    }

    //click play button-->handle-play-click-->need to load function into mem and release into process after few seconds
    function handlePlayClick() {
        thread.current = setInterval(LoadProductAuto, 3000)
        setStatus('Slideshow Mode')
    }

    function handlePauseClick() {
        clearInterval(thread.current);
        setStatus('SlideShow Paused');
    }

    function handleSliderChange(e) {
        count.current=e.target.value
        LoadProduct(count.current)
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="card mt-4 p-2 w-50">

                    <div className="card-header text-center ">
                        {product.title}
                        <div className="fw-bold">
                            {status}
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button onClick={handlePreviousClick} className="bi bi-chevron-left btn btn-dark">
                                </button>
                            </div>

                            <div className="col-10 position-relative">

                                <div className="position-absolute badge bg-danger rounded rounded-circle top-0 end-0 p-2">
                                    {product.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}
                                </div>

                                <img width="100%" height="350" src={product.image} alt="products " />

                                <div className="my-2">
                                    <input type="range" name="" id="" className="form-range" min="1" max="20" value={count.current} onChange={handleSliderChange} />
                                </div>
                            </div>

                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button onClick={handleNextClick} className="bi bi-chevron-right btn btn-dark">
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer text-center">
                        <button onClick={handlePlayClick} className="btn btn-primary bi bi-play"></button>
                        <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause mx-2"></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FakestoreCarousel