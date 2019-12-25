import NavMain from './cmps/NavMain.jsx';
import Home from "./pages/Home.jsx";
import EmailsPage from "./MailAPP/pages/EmailsPage.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <NavMain></NavMain>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={EmailsPage} path="/emailapp"></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)