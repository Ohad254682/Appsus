const { NavLink } = ReactRouterDOM

export default class MainNav extends React.Component {

    state = {
        menuHidden: false
    }

    onToggleMenu = (prevState) => {
        this.setState((prevState) => ({ menuHidden: !prevState.menuHidden }))
    }

    render() {
        let logo = "assets/images/logo.png";
        return <nav className="main-nav">
            <img className="logo" src={logo} />
            <section className="main-mobile-nav-container">
            
            {/* <div className="nav-icon" onClick={this.onToggleMenu}>
                <div></div>
            </div> */}
            </section>
            <ul className="main-desktop-nav-container">
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