export default function Navbar(){
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/" className="site-title">Cat site</a>
        <ul>
            <CustomLink href="/mana">Mana</CustomLink>
            <CustomLink href="/loki">Loki</CustomLink>
            <CustomLink href="/hela">Hela</CustomLink>
            <CustomLink href="/faye">Faye</CustomLink>
            <CustomLink href="/skye">Skye</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href,children, ...props}){
    const path = window.location.pathname
    return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}