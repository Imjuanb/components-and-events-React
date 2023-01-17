const Input = ({password, setPassword, text, type, placeholder}) => {
    const handleChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
        <h5>{text}</h5>
        <input onChange={handleChange} type={type} placeholder={placeholder}></input>
        </>
    )
};

export default Input