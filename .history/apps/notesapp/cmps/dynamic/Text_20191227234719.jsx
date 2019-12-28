export default class Text {
    text = this.props.note.info.txt;

    state={
        textarea:text
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value },
            this.props.setFilterBy(value));
    }

    render() {
        <div>
            <input type="text"  name="textarea" className="textarea-note" type="text" onChange={this.onChangeInput} defaultValue={text} disabled={this.props.isEditMode ? false : true}></input>
        </div>
    }
    return
};




