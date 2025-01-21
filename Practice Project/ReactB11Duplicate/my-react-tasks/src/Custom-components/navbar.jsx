import React from 'react'


// every component will only have one props
//this props is object,it can have multiple properties 
// because  an object can have multiple keys
//here navbar expecting 3 properties 1)logo 2)menu-items 3)title
const Navbar = (props) => {
    return (
        <div>
            <nav className={`d-flex justify-content-between p-3 m-2 border border-1 ${props.theme}`}>

                <div className='fw-bold fs-4'>
                    <img src={props.logo} width="30"  height="30" alt=''/>
                    {props.title}</div>
                {/* title is property(key)in props */}
                <div className='fw-5 '>
                    {/* i am expecting menu items.means expecting an array of menu Items  */}
                    {
                        props.menuItems.map(item => 
                        <span key={item} className='mx-3 '>
                            <a href='/' className='text-decoration-none text-white'>{item}</a></span>)
                    }
                </div>

                <div><button className='btn btn-warning bi bi-person-circle'>SignIn</button></div>
            </nav>
        </div>
    )
}

export default Navbar
