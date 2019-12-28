// import DynamicCmps from "./dynamic/DynamicCmps.jsx";

export default class SearchNote extends React.Component {

    state = {

    }

    render() {
        return <React.Fragment>
            <section className="search-container">
                <input type="text" placeholder="search a note"></input>
                <button type="send">Search</button>
            </section>
            

        </React.Fragment>
    }
}