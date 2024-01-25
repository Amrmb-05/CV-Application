export default function Input({title, type, value, handleChange, name}) {
    return (
        <>
        <label>
            {title}
        </label><input type={type}
            name={name}
            placeholder={title}


            onChange={handleChange} />
        </>
    
    )
}