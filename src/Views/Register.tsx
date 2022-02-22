import { Form } from "../Components/Form";
import { FormInputRow } from "../Components/FormInputRow";

export function Register () {
    return (
        <Form>
            <h1 className="text-gray-800 text-3xl text-center font-bold pb-3 md:text-5xl">Register</h1>
            <FormInputRow text="User" type="mail"/>
            <FormInputRow text="Password" type="password"/>
            <button className="text-1xl bg-green-500 mt-3 p-2 text-slate-200 rounded-md md:text-2xl">Create Account</button>
        </Form>
    );
}
