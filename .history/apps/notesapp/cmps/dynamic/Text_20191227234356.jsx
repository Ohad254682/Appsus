export default class Text {
    text = this.props.note.info.txt;
    render() {
        <div>
            <input type="text" className="textarea-note" defaultValue={text} disabled={props.isEditMode ? false : true}></input>
        </div>
    }
    return
};



onChangeInput = (ev) => {
    var value = ev.target.value;
    var field = ev.target.name;
    this.setState({ [field]: value },
        this.props.setFilterBy(value));
}

