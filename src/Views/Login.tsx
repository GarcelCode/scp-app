import { useContext } from "react";
import { FormInputRow } from "../Components/FormInputRow";
import { authContext } from '../Contexts/Auth'

export function Login() {
    const authValue = useContext(authContext);
    console.log(authValue.login)
    return (
        <div className="h-screen bg-slate-700 flex justify-center items-center">
            <form className="bg-white w-3/5 flex flex-col p-5 rounded-md shadow-lg md:max-w-md">
                <h1 className="text-gray-800 text-5xl text-center font-bold pb-3">Log In</h1>
                <FormInputRow text="User" type="text"/>
                <FormInputRow text="Password" type="password"/>
                <button className="text-2xl bg-blue-600 mt-3 p-2 text-slate-200 rounded-md">Enter</button>
            </form>
        </div>
    );
}