export default class Text {
    text = this.props.note.info.txt;

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value },
            this.props.setFilterBy(value));
    }

    render() {
        <div>
            <input type="text" className="textarea-note" type="text" onChange={this.onChangeInput} defaultValue={text} disabled={this.props.isEditMode ? false : true}></input>
        </div>
    }
    return
};




