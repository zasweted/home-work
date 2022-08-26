import randColor from "../../Functions/rand-color";

function Animal({gyvuns}){
    return(
        <>
            <div className="animal-container" key={gyvuns.id}>
                    <figcaption className="animal-img" style={{
                        backgroundColor: randColor()
                    }}>{gyvuns.animal}</figcaption>
                    <img className="animal-img" src={gyvuns.img} alt={gyvuns.animal}></img>
                </div>
        </>
    )
}

export default Animal;