import React, { useState } from 'react'
import axios from 'axios'

const KeyDemo = () => {

    const [error, setError] = useState(' ');
    const[validClass,setValidClass]=useState();
    const[toggle,setToggle]=useState('d-none')

    function verifyUserId(e) {
        axios.get("users.json")
            .then(response => {
                var user = response.data.find(item => item.UserId === e.target.value)
                // console.log(user);
                // if user is not their in json  "undefined"
                //if (user===undefined) {
                if (user) {
                    if (user.UserId === e.target.value) {
                        setError('User Id Taken -Try Another')
                        setValidClass('text-danger')
                    }
                }else{
                    setError('User Id Available')
                    setValidClass('text-success')
                }
            })
    }
    function handleCaps(e){
        if (e.which>=65&&e.which<=90) {
            setToggle('d-block')
        }else{
            setToggle('d-none')
        }
    }
    return (
        <div className='container-fluid'>
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type='text' onKeyUp={verifyUserId} /></dd>
                {/* onKeyPress after typing we have to press space  */}
                <dd className={validClass}>{error}
                </dd>
                <dt>Password</dt>
                <dd><input type='password'onKeyPress={handleCaps}/></dd>
                <dd className={toggle}><span className='bi bi-exclamation-triangle-fill text-warning '>Warning : CAPS is on</span>
                </dd>
            </dl>
        </div>
    )
}

export default KeyDemo
