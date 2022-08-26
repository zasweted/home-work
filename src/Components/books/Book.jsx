

function Book({ book, tipas }) {


    console.log(tipas.title);
    return (

        <>

            <fieldset className="book-item">
                <div>
                    <img src={book.img} alt="" />
                    <p>{book.author}</p>
                    <p>{book.title}</p>
                    <p>{tipas.title}</p>
                    <p>{book.price}</p>
                </div>

            </fieldset>
        </>

    )

}

export default Book;