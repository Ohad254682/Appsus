// import DynamicCmps from "./dynamic/DynamicCmps.jsx";

export default class SearchNote extends React.Component {

    state = {
        searchTerm: '',
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value },
            this.props.setFilterBy(value));
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