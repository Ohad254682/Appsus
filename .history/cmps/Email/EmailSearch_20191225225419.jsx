

export default class EmailSearch extends React.Component {

    state = {
        searchTerm: '',
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value },
            this.props.setFilterBy(this.state.searchTerm));
    }

    render() {
        return <form>
            <input name="searchTerm" type="text" onChange={this.onChangeInput} value={this.state.searchTerm} />
        </form>
    }
}