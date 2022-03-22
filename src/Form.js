import React from 'react';
import useForm from './customHooks';

const Form = () => {
    const {inputs, handleInputChange, handleSubmit} = useForm({email:'',password:''});
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required="" />
        </div>
        <div>
          <label>Password</label>
            <input type="password" name="password" onChange={handleInputChange} value={inputs.password} required="" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

export default Form;