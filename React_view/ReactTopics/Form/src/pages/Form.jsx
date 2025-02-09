import React from 'react'
import {useForm} from 'react-hook-form';
const Form = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
      } = useForm();
    
      async function onSubmit(data){
        await new Promise ( (resolve) =>
        setTimeout(resolve,5000) );
        console.log("Form submitted" + data)
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> FirstName :</label> <input {...register('FirstName',
        {required: true,minLength:{value:3,message:"Min length atleast 3"}})}/>
        { errors.FirstName && <p>{errors.FirstName.message} </p>}
      </div><br/>
      <div>
      <label> MiddleName :</label> <input {...register('MiddleName',{required: false},)}/>
      </div><br/>
      <div>
      <label> LastName :</label> <input className={errors.LastName ? "input-error":""}
      {...register('LastName',
        {pattern:{
        value:/^[A-Za-z]+$/i ,message:"Last name not follow rules"  } })}/>
        {errors.LastName && <p>{errors.LastName.message} </p>}
      </div>
      <input type="submit" disabled = {isSubmitting}
      value={ isSubmitting ? "Submitting" : "Submit"}/> 
      {/* or you could create button  */}
    </form>
  )
}

export default Form
