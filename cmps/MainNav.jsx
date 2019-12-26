const { NavLink } = ReactRouterDOM

export default class MainNav extends React.Component {

    render() {
        return <nav className="main-nav">
            <img src="../assets/images/logo.png" width="100"/>
            <ul>
                <li>
                    <NavLink to='/'>E-Mails</NavLink>
                </li>
                <li>
                    <NavLink to='/notes'>Notes</NavLink>
                </li>
            </ul>
        </nav>
    }
}