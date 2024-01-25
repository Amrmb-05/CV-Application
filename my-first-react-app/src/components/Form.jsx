export default function Form({id,title, onSubmit, children, isShown}) {
    return (
        <>
        { isShown &&
        <section className="form">
            <form id={id} action='' onSubmit={onSubmit} className="toggle-form">
                <h2>{title}</h2>
                    {children}
                <button type="submit" form={id} >Submit</button>
            </form>
        </section>
}
        </>
    )
}