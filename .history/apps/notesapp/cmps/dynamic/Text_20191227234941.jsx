export default class Text extends React.Component {
    text = this.props.note.info.txt;

    state = {
        textarea: text
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value })
    }

    render() {
        <div>
            <input type="text" name="textarea" className="textarea-note" type="text" onChange={this.onChangeInput} value={this.state.textarea} disabled={this.props.isEditMode ? false : true}></input>
        </div>
    }
    return
};




