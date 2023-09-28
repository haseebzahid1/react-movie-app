import React from "react";
import { useForm,FieldValues } from 'react-hook-form';
const FormHook = () => {
    const {register,  handleSubmit} = useForm();
    const onSubmit = (data:FieldValues) => console.log(data)
  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register('name')} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input {...register('age')} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormHook;
