const { NavLink } = ReactRouterDOM

export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <NavLink to='/add'>Compose</NavLink>
                </li>
            </ul>
        </nav>
    }
}