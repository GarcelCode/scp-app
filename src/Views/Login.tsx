import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../Components/Form";
import { FormButton } from "../Components/FormButton";
import { FormInputRow } from "../Components/FormInputRow";
import { authContext } from '../Contexts/Auth'

export function Login() {
    const authValue = useContext(authContext);
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    const handleLogin = async(e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setError('')
        try {
            await authValue.login(inputData.email, inputData.password)
            navigate('/')
        }catch (error:any){
            if(error.code === "auth/wrong-password"){
                setError("Wrong Password");
            }else if (error.code === "auth/user-not-found"){
                    setError("User not found");
            }else if(error.code === "auth/internal-error"){
                setError("Missing password");
            }else if(error.code === "auth/invalid-email"){
                setError("Invalid email");
            }
        }
    }


    return (
            <Form>
                <h1 className="text-gray-800 text-5xl text-center font-bold pb-3">Log In</h1>
                <FormInputRow text="User" type="text" name="email" action={handleChange}/>
                <FormInputRow text="Password" type="password" name="password" action={handleChange}/>
                <label className="text-center text-red-500"> {error && <p>{error}</p>} </label>
                <FormButton text="Log In" color="bg-blue-500" action={handleLogin}/>
            </Form>
    );
}