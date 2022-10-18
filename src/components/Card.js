export default function Card({name, img, onBtnClick}){

    return(
        <section className="card">
            <img src={img} alt="Avatar" />
            <h3><b>{name}</b></h3>
            <button onClick={() =>{}}>Show more</button>
        </section>
    );
}
