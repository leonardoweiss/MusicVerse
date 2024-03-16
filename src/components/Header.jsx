export default function Header() {
    return(
        <header>
            <div id="logo">
                <h2>MusicVerse</h2>
            </div>
            {/* <nav>
                <Link href="#">Início</Link>
                <Link href="#">Artistas</Link>
                <Link href="#">Gêneros</Link>
                <Link href="#">Tendências</Link>
            </nav> */}
            <div id="actions">
                <button id="login">Login</button>
                <button id="signUp">Cadastrar-se</button>
            </div>
        </header>
    )
}