const { NavLink } = ReactRouterDOM
export default function NavMain(props) {
    return (<nav>
        <ul>
            <li><NavLink activeClassName="active" to='/'>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/emailapp'>EmailApp</NavLink></li>
        </ul>
    </nav>)
}