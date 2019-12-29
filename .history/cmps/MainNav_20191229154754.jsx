const { NavLink } = ReactRouterDOM

export default class MainNav extends React.Component {

    state = {
        menuShown: false
    }

    onToggleMenu = (prevState) => {
        this.setState((prevState) => ({ menuShown: !prevState.menuShown }))
    }

    render() {
        let logo = "assets/images/logo.png";
        return <nav className="main-nav">
            <img className="logo" src={logo} />
            <button className="menu-btn-mobile">☰</button>
            <ul className="main-nav-container">
                <li>
                    <NavLink exact to='/' activeClassName="active-link">E-Mails</NavLink>
                </li>
                <li>
                    <NavLink to='/notes' activeClassName="active-link">Notes</NavLink>
                </li>
            </ul>
        </nav >
    }
}