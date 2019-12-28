const { NavLink } = ReactRouterDOM

export default class MainNav extends React.Component {

    state = {
        menuHidden: false
    }

    onToggleMenu = (prevState) => {
        this.setState((prevState) => ({ menuHidden: !prevState.menuHidden }))
    }

    render() {
        return <nav className="main-nav">
            <img className="logo" src="../assets/images/logo.png" />
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