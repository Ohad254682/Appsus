

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
        return <form>
            <label htmlFor="searchTerm">
                <input className="search-container searchTerm searchNote"  placeholder="search a note" name="searchTerm" type="text" onChange={this.onChangeInput} value={this.state.searchTerm} />
            </label>
            
        </form>
    }
}
