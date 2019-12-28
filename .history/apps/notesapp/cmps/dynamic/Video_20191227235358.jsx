export default function Video(props) {
    return <div>
        
    </div>
}



export default class Text extends React.Component {
    txt = this.props.note.info.txt;

    state = {
        textarea: this.props.note.info.txt
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value })
    }

    render() {
        return <div>
            <input className="textarea-note" type="text" name="textarea" type="text" onChange={this.onChangeInput} value={this.state.textarea} disabled={props.isEditMode ? false : true}></input>
            <iframe width="300" height="200" src={props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    }
}