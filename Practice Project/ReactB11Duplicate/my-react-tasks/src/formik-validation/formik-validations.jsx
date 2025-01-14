import { useFormik } from "formik";

export default function FormikValidationsDemo() {
    function validateUser(formData){
        var errors={
            UserName:'',
            Age:'',
            City:'',
            Mobile:''
        }
if (formData.UserName==='') {
    errors.UserName='UserName is required'
}else{
    if(formData.UserName.length<4){
errors.UserName='UserName is too short'
    }
}

        return errors;

    }
    const formik = useFormik({
        // you must use same values as you have mentioned in name of element
        initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Mobile:0
        },
        validate:validateUser,
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

                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>

                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option>Select City</option>
                            <option>Pandharpur</option>
                            <option>Pune</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input type="number"  name="Mobile" onChange={formik.handleChange}/>
                    </dd>                    

                </dl>
                <button type="submit" >Submit</button>
            </form>

        </div>
    )
}