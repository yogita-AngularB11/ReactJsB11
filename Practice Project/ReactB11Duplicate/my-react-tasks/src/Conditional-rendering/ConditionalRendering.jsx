import React, { useState } from 'react'
import { DataGrid } from '../Custom-components/data-grid';

const ConditionalRendering = () => {
    const [signedIn, setSignedIn] = useState(false)
    const [layout, setLayout] = useState()

    function handleSignOut() {
        setSignedIn(false);
    }

    function handleSignIn() {
        setSignedIn(true);
    }

    function handleLayoutChange(e) {
        setLayout(e.target.value)
    }

    return (
        <div className='container-fluid '>
            <nav className='d-flex justify-content-between p-2 m-3' >
                <div className="fs-5  fw-bold">ShoppersStop</div>
                {
                    (signedIn === true) ? <div className="fs-5">
                        <span className="mx-3">Home</span>
                        <span className="mx-3">Shop</span>
                        <span className="mx-3">Pages</span>
                        <span className="mx-3">Blog</span>
                    </div> : <div></div>
                }
                <div>
                    {
                        (signedIn === true) ? <button onClick={handleSignOut} className="btn btn-danger">Sign Out</button> : <button onClick={handleSignIn} className="btn btn-primary">Sign In</button>
                    }
                </div>
            </nav>
            <section className='mt-4'>
                <div className='my-2'>
                    <select className='form-select w-25' onChange={handleLayoutChange}>
                        <option value="">Select the Layout</option>
                        <option value="grid">Grid</option>
                        <option value="card">Card</option>
                    </select>
                </div>
                <DataGrid
                    layout={layout}
                    fields={["Name", "Price"]}
                    data={[
                        {
                            Name: "Samsung TV",
                            Price: 45000.45
                        },
                        {
                            Name: "Mobile",
                            Price: 15000.45
                        }
                    ]} ></DataGrid>

            </section>
        </div>
    )
}

export default ConditionalRendering
