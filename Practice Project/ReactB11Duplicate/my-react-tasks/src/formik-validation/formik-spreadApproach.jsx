import { useFormik } from "formik";
import * as yup from "yup"
const FormikSpreadApproach = () => {

    const formik = useFormik({
        // you must use same values as you have mentioned in name of element
        initialValues: {
            UserName: '',
            Age: 0,
            City: '-1',
            Mobile: ''
        },
        
        validationSchema: yup.object({
            UserName: yup.string().required('UserName is Required').min(4, 'Name too short'),
            Age: yup.number().required('Age Required').min(18, 'Age min 18').max(60, 'Age max 60'),
            City: yup.string().notOneOf(['-1'], 'Please Select your city').required('City is Required'),
            Mobile: yup.string().required('Mobile Number is Required').matches(/\+91\d{10}/, 'Invalid Mobile Number')
        }),
        onSubmit: (user) => {
            console.log(user);
        }
    })

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" {...formik.getFieldProps("UserName")}/></dd>
                    <dd className='text-danger'>{formik.errors.UserName}</dd>

                    <dt>Age</dt>
                    <dd><input type="text" name="Age"  {...formik.getFieldProps("Age")}/></dd>
                    <dd className='text-danger'>{formik.errors.Age}</dd>

                    <dt>City</dt>
                    <dd>
                        <select name="City" {...formik.getFieldProps("City")} >
                            <option value="-1">Select City</option>
                            <option value="Pandharpur">Pandharpur</option>
                            <option value="Pune">Pune</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className='text-danger'>{formik.errors.City}</dd>

                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" {...formik.getFieldProps("Mobile")}/></dd>
                    <dd className='text-danger'>{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default FormikSpreadApproach