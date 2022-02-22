interface IFormButtonProps{
    text: String;
    color: String;
}

export function FormButton({text, color}:IFormButtonProps){
    return(
        <button className={`text-1xl mt-3 p-2 text-slate-200 rounded-md md:text-2xl ${color} hover:opacity-90`}>{text}</button>
    )
}