import EmailsPage from './pages/EmailsPage.jsx';
import EmailDetails from "./pages/EmailDetails.jsx";
import EmailAdd from "./pages/EmailAdd.jsx";

import MainNav from "./cmps/MainNav.jsx";
import Footer from "./cmps/Footer.jsx";
import NotesApp from "./apps/notesapp/pages/NotesApp.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()


class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <MainNav></MainNav>
                    
                    <Switch>
                        <Route component={EmailsPage} path="/" exact></Route>
                        <Route component={EmailDetails} path="/email/:id" exact></Route>
                        <Route component={EmailAdd} path="/add" exact></Route>

                        <Route component={NotesApp} path="/notes" exact></Route>
                    </Switch>

                    <Footer></Footer>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)