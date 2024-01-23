export default function Input({title, type, value, handleChange, name}) {
    return (
        <label>
        {title}: 

            <input type={type}
            name={name}
            placeholder={title}
           
            
            onChange={handleChange}
        />
    </label>
    )
}