import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HTML from './HTML';
import CSS from './CSS';
import Javascript from './Javascript';
import ReactPage from './ReactPage';

const Menubar = () => {
    return (
        <>
            <ul className="nav nav-tabs ">
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/html">HTML</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/css">CSS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/js">JAVASCRIPT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/react">REACTJS</a>
                </li>
            </ul>
            <BrowserRouter>
            <Routes>
                <Route exact path='/html' element={<HTML/>}></Route>
                <Route exact path='/css' element={<CSS/>}></Route>
                <Route exact path='/js' element={<Javascript/>}></Route>
                <Route exact path='/react' element={<ReactPage/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default Menubar
