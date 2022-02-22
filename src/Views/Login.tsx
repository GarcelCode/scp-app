import { useContext } from "react";
import { Form } from "../Components/Form";
import { FormButton } from "../Components/FormButton";
import { FormInputRow } from "../Components/FormInputRow";
import { authContext } from '../Contexts/Auth'

export function Login() {
    const authValue = useContext(authContext);
    console.log(authValue.login)

    return (
            <Form>
                <h1 className="text-gray-800 text-5xl text-center font-bold pb-3">Log In</h1>
                <FormInputRow text="User" type="text" name="user" action={()=>{}}/>
                <FormInputRow text="Password" type="password" name="password" action={()=>{}}/>
                <FormButton text="Log In" color="bg-blue-500" action={()=>{}}/>
            </Form>
    );
}