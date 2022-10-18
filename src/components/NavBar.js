
export default function NavBar({page, setPage}){

    return (
        <footer>
            <button onClick={setPage("home")}>home</button>
            <button onClick={setPage("random")}>Random</button>
            <button onClick={setPage("favorites")}>Favorites</button>
            <button onClick={setPage("creative")}>Get creative</button>
        </footer>
    )
}