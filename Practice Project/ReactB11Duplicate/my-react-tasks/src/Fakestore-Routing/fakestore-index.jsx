import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FakestoreHome from './FakestoreHome'
import FakestoreProducts from './FakestoreProducts'
import FakestoreDetails from './FakestoreDetails'
import FakestoreLogin from './FakestoreLogin'

const FakestoreIndex = () => {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-1">
                    <h2>FakeStore</h2>
                </header>
                <section className='mt-3'>
                    <Routes>
                        {/* -------------Without Child Routes----------- */}
                        {/* <Route path='/' element={<FakestoreHome />} />
                        <Route path='products/:category' element={<FakestoreProducts />} />
                        <Route path='details/:id' element={<FakestoreDetails />} />
                        <Route path='*' element={
                            <div className='text-danger fs-4'>
                                <h2>Are you  Looking for something?</h2>
                                <code>Sorry !! We cant find it</code>
                            </div>
                        } /> */}
                        {/* -------------------------------------------------- */}
                        <Route path='/' element={<FakestoreHome />} />
                        {/* ----------------Child Routes Concept----------- */}
                        {/* separate is absolute,keeping inside another <Route> means it is relative now  "details" is relative  so write */}
                        <Route path='products/:category' element={<FakestoreProducts />} >
                            <Route path='details/:id' element={<FakestoreDetails />} />
                        </Route>
                        <Route path='login' element={<FakestoreLogin />}/>
                        <Route path='*' element={
                            <div className='text-danger fs-4'>
                                <h2>Are you  Looking for something?</h2>
                                <code>Sorry !! We cant find it</code>
                            </div>
                        } />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}

export default FakestoreIndex 
