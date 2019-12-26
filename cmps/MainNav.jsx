const { NavLink } = ReactRouterDOM

export default class MainNav extends React.Component {

    render() {
        return <nav className="main-nav">
            <img src="../assets/images/logo.png" width="100"/>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName="active-link">E-Mails</NavLink>
                </li>
                <li>
                    <NavLink to='/notes' activeClassName="active-link">Notes</NavLink>
                </li>
            </ul>
        </nav>
    }
}