import React from 'react';
import { useForm } from 'react-hook-form';

const HookFormDemo = () => {
    //use form have 3 parameters
    //const {formName action_To_Perform_onSubmit  form_ stateObject}=useForm()
    const { register, 
            handleSubmit, 
            formState: { errors } } = useForm();
//collect values from form.
    const submit = (values) => {
        console.log(values);
    }

    return (
        <div className='container-fluid'>
            {/* handlesubmit on valid what is functionality to execute */}

            <form onSubmit={handleSubmit(submit)}>
                <h3>Register</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="Name" id=""
                    {...register("Name", { required: true, minLength: 4 })}  /></dd>

                    <dd className='text-danger'>
                        {
                            (errors.Name?.type === "required") ? <span>Name is required </span> : <span></span> && 
                            (errors.Name?.type === "minLength") ? <span>Name is too short </span> : <span></span>
                        }
                    </dd>
                
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" id=""
                    {...register("Age", { required: true, min: 18 })}  /></dd>
                     <dd className='text-danger'>
                        {
                            (errors.Age?.type === "required") ? <span>Age is required </span> : <span></span> && 
                            (errors.Age?.type === "min") ? <span>Age must be greater than 18 </span> : <span></span>
                        }
                    </dd>

                     {/* City Dropdown */}
                
                    <dt>City</dt>
                    <dd>
                        <select 
                            {...register("City", { 
                                required: true, 
                                validate: (value) => value !== "Select" 
                            })}
                        >
                            <option value="Select">Select</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Chicago">Chicago</option>
                        </select>
                    </dd>
                    <dd className='text-danger'>
                        {errors.City?.type === "required" && <span>City is required</span>}
                        {errors.City?.type === "validate" && <span>Please select a valid city</span>}
                    </dd>
              

                {/* Mobile Field */}
        
                    <dt>Mobile</dt>
                    <dd>
                        <input 
                            type="text" 
                            {...register("Mobile", { 
                                required: true, 
                                pattern: /^[0-9]{10}$/ 
                            })}  
                        />
                    </dd>
                    <dd className='text-danger'>
                        {errors.Mobile?.type === "required" && <span>Mobile is required</span>}
                        {errors.Mobile?.type === "pattern" && <span>Mobile must be a 10-digit number</span>}
                    </dd>
               

                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HookFormDemo
