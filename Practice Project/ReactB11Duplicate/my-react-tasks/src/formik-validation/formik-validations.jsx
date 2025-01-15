import { useFormik } from "formik";

export default function FormikValidationsDemo() {
    function validateUser(formData) {
        var errors = {
            UserName: '',
            Age: '',
            City: '',
            Mobile: ''
        }

        if (formData.UserName.length=== '') {
            errors.UserName = 'UserName is required'
        } else {
            if (formData.UserName.length < 4) {
                errors.UserName = 'UserName is too short'
            }else {
                errors.UserName = ''
            }
        }

        if (parseInt(formData.Age, 10) <= 0) {
            errors.Age = 'Age Required'
        } else {
            if (isNaN(formData.Age)) {
                errors.Age = 'Age must be a number'
            } else {
                errors.Age = ''
            }
        }

        if (formData.City === '-1') {
            errors.City = 'Please Select your city'
        } else {
            errors.City = ''
        }

        if (formData.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = ''
        } else {
            errors.Mobile = 'Enter valid mobile number'
        }

        return errors;
    }


    const formik = useFormik({
        // you must use same values as you have mentioned in name of element
        initialValues: {
            UserName: '',
            Age: 0,
            City: '-1',
            Mobile: ''
        },
        validate: validateUser,
        onSubmit: (user) => {
            console.log(user);
        }
    })

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dd className='text-danger'>{formik.errors.UserName}</dd>

                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                    <dd className='text-danger'>{formik.errors.Age}</dd>
                    
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option value="Pandharpur">Pandharpur</option>
                            <option value="Pune">Pune</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className='text-danger'>{formik.errors.City}</dd>
                    
                    <dt>Mobile</dt>
                    <dd><input type="number" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className='text-danger'>{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}