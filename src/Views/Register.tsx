import React, { useState } from "react";
import { useContext } from "react";
import { Form } from "../Components/Form";
import { FormButton } from "../Components/FormButton";
import { FormInputRow } from "../Components/FormInputRow";
import { authContext } from "../Contexts/Auth";

export function Register () {
    const authValue = useContext(authContext);
    
    const [inputData, setInputData] = useState({
        user: "",
        password: "",
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setInputData({...inputData, [e.target.name]:value})
    }

    const handleRegister = (e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault();
        console.log(authValue.login)
    }

    return (
        <Form>
            <h1 className="text-gray-800 text-3xl text-center font-bold pb-3 md:text-5xl">Register</h1>
            <FormInputRow text="User" type="mail" name="user" action={handleChange}/>
            <FormInputRow text="Password" type="password" name="password" action={handleChange}/>
            <FormButton text="Create Account" color="bg-green-500" action={handleRegister} /> 
        </Form>
    );
}
