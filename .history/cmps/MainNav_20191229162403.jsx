const { NavLink } = ReactRouterDOM

export default class MainNav extends React.Component {

    state = {
        menuShown: false
    }

    componentDidMount() {
        window.addEventListener('resize', this.setToFlexOnExpand);
        window.addEventListener('click', this.closeMobileMenu);
    }

    closeMobileMenu = () => {
        if (window.innerWidth <= 700) this.setState({ menuShown: false });
    }

    setToFlexOnExpand = () => {
        if (window.innerWidth > 700) this.setState({ menuShown: true });
    }

    onToggleMenu = () => {
        this.setState((prevState) => ({ menuShown: !prevState.menuShown }))
    }



    render() {
        let logo = "assets/images/logo.png";
        return <nav className="main-nav">
            <img className="logo" src={logo} />
            <button className="menu-btn-mobile" onClick={this.onToggleMenu}>☰</button>
            <ul className={this.state.menuShown ? "main-nav-container flex" : "main-nav-container none"} >
                <li>
                    <NavLink onClick={(ev) => ev.stopPropagation()} exact to='/' activeClassName="active-link">E-Mails</NavLink>
                </li>
                <li>
                    <NavLink onClick={(ev) => ev.stopPropagation()} to='/notes' activeClassName="active-link">Notes</NavLink>
                </li>
            </ul>
        </nav >
    }
}