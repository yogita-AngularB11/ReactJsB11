import React from 'react';
import { useForm } from 'react-hook-form';

const HookFormDemo = () => {
    //const {formName action_To_Perform_onSubmit  form_ stateObject}=useForm()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submit = (values) => {
        console.log(values);
    }
    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Register</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input {...register("Name", { required: true, minLength: 4 })} type="text" name="Name" id="" /></dd>
                    <dd className='text-danger'>
                        {
                            (errors.Name?.type === "required") ? <span>Name is required </span> : <span></span> && (errors.Name?.type === "minLength") ? <span>Name is too short </span> : <span></span>
                        }
                    </dd>
                </dl>
                <dl>
                    <dt>Age</dt>
                    <dd><input {...register("Age", { required: true, min: 18 })} type="text" name="Age" id="" /></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HookFormDemo
