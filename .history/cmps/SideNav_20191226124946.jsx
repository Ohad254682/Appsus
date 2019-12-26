const { NavLink } = ReactRouterDOM

export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <EmailAdd><button className="compose-btn">Compose +</button></EmailAdd>
                </li>
            </ul>
        </nav>
    }
}