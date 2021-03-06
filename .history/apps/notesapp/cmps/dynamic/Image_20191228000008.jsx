export default class Image extends React.Component  {
    
    state = {
        textarea: this.props.note.info.title
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value })
    }

    
    render() {
        return <div>
            <input className="textarea-note" type="text" name="textarea" onChange={this.onChangeInput} value={this.state.textarea} disabled={this.props.isEditMode ? false : true}></input>
            <iframe width="300" height="200" src={this.props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }

    return <div>
        <textarea className="textarea-note" value={props.note.info.title} disabled={props.isEditMode ? false : true}></textarea>
        <img src={props.note.info.url} />
    </div>
}


