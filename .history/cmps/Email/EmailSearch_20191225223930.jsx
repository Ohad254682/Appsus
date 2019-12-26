

export default class EmailSearch extends React.Component {

    state = {
        searchTerm: '',
        body: '',
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value })
    }

    render() {
        return <form className="add-review-form">
            <input name="subject" type="text" onChange={this.onChangeInput} value={this.state.name} />
        </form>
    }
}