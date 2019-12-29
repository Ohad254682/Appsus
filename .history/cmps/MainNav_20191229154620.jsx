const { NavLink } = ReactRouterDOM

export default class MainNav extends React.Component {

    state = {
        menuHidden: true
    }

    onToggleMenu = () => {
        let displayStatus;
        this.setState(((prevState) => ({ menuHidden: !prevState.menuHidden })), this.state.menuHidden ? displayStatus = "flex" : displayStatus = "none")
        return displayStatus;
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