import { useFormik } from "formik";

export default function FormikDemo() {
    const formik = useFormik({
        // you must use same values as you have mentioned in name of element
        initialValues: {
            UserName: '',
            Age: 0,
            City: '',
            Gender: ''
        },
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

                    <dt>Gender</dt>
                    <dd><input type="radio" value="Male" name="Gender" onChange={formik.handleChange} /><label htmlFor="">M</label> <br />
                    <input type="radio" value="Female" name="Gender" onChange={formik.handleChange} /><label htmlFor="">F</label></dd>

                </dl>
                <button type="submit" >Submit</button>
            </form>

        </div>
    )
}