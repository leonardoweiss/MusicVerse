export default function Header() {
    return(
        <header>
            <div id="logo">
                <h2>MusicVerse</h2>
            </div>
            <div id="actions">
                <button id="login">Login</button>
                <button id="signUp">Cadastrar-se</button>
            </div>
            <button id="menu"><i className="fa-solid fa-bars"></i></button>
        </header>
    )
}