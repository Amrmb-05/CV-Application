export default function Form({id,title, onSubmit, children}) {
    return (
        <section>
            <form id={id} action='' onSubmit={onSubmit}>
                <h2>{title}</h2>
                    {children}
                <button type="submit" form={id}>Submit</button>
            </form>
        </section>
    )
}