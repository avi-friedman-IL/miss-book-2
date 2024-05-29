const {NavLink} = ReactRouterDOM

export function AppHeader() {
    return <header>
        <h1>Miss Book</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/book">Books</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
}