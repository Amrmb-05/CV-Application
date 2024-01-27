export default function Form({id,title, onSubmit, children, handleCancel,isShown}) {
    return (
        <>
        { isShown &&
        <section className="form">
            <form id={id} action='' onSubmit={onSubmit}>
                
                <h2>{title}</h2>
                
                    {children}
                <div className="btns-container">
                <button form="id" onClick={handleCancel}>Cancel</button>
                <button type="submit" form={id} >Submit</button>
                </div>
            </form>
        </section>
}
        </>
    )
}