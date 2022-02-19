interface FormProps{
    text: string;
    type: string;
}
export function FormInputRow ({text, type}:FormProps) {
    return (
        <>
            <label className="text-center text-2xl">{text}</label>
            <input type={type} className="shadow-inner border-2 border-blue-400 rounded-lg p-2"/>
        </>
    );
}