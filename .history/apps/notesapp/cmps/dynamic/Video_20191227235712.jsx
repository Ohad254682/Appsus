export default class Video extends React.Component {

    state = {
        textarea: props.note.info.label
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value })
    }

    render() {
        return <div>
            <input className="textarea-note" type="text" name="textarea" onChange={this.onChangeInput} value={this.state.textarea} disabled={props.isEditMode ? false : true}></input>
            <iframe width="300" height="200" src={props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }
}