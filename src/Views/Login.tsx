import { useContext } from "react";
import { Form } from "../Components/Form";
import { FormInputRow } from "../Components/FormInputRow";
import { authContext } from '../Contexts/Auth'

export function Login() {
    const authValue = useContext(authContext);
    console.log(authValue.login)
    return (
            <Form>
                <h1 className="text-gray-800 text-5xl text-center font-bold pb-3">Log In</h1>
                <FormInputRow text="User" type="text"/>
                <FormInputRow text="Password" type="password"/>
                <button className="text-2xl bg-blue-600 mt-3 p-2 text-slate-200 rounded-md">Enter</button>
            </Form>
    );
}