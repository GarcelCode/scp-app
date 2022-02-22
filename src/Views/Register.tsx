import { Form } from "../Components/Form";
import { FormButton } from "../Components/FormButton";
import { FormInputRow } from "../Components/FormInputRow";

export function Register () {
    return (
        <Form>
            <h1 className="text-gray-800 text-3xl text-center font-bold pb-3 md:text-5xl">Register</h1>
            <FormInputRow text="User" type="mail"/>
            <FormInputRow text="Password" type="password"/>
            <FormButton text="Create Account" color="bg-blue-500" /> 
        </Form>
    );
}
