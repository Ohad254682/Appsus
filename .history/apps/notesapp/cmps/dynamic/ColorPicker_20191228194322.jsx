import noteService from "../../services/NoteService.js";
export default class ColorPicker extends React.Component {
    state = {
        color: ''
    }

    componentDidMount() {
        window.addEventListener('click', this.props.onColorPicker)
    }

    onChangeColor = (ev) => {
        let newColor = ev.target.value;
        noteService.editNoteColor(this.props.note.id, newColor)
            .then(this.props.onLoadNotes)
    }

    render() {
        return <React.Fragment>
            <form>
                <input type="checkbox" id="chk-ham-menu" className="ham-check" onChange={this.onChangeColor} />
                <div className="ham-menu">
                    <label htmlFor="amethyst" className="color-picker amethyst"></label>
                    <label htmlFor="peter" className="color-picker peter"></label>
                    <label htmlFor="emarald" className="color-picker emarald"></label>
                    <label htmlFor="carrot" className="color-picker carrot"></label>
                    <label htmlFor="alizarin" className="color-picker alizarin"></label>
                    <label htmlFor="sun" className="color-picker sun"></label>
                </div>

                <input type="radio" name="color-chooser" id="amethyst" value="#9b59b6" onChange={this.onChangeColor} />
                <input type="radio" name="color-chooser" id="peter" value="#3498db" onChange={this.onChangeColor} />
                <input type="radio" name="color-chooser" id="emarald" value="#2ecc71" onChange={this.onChangeColor} />
                <input type="radio" name="color-chooser" id="carrot" value="#e67e22" onChange={this.onChangeColor} />
                <input type="radio" name="color-chooser" id="alizarin" value="#e74c3c" onChange={this.onChangeColor} />
                <input type="radio" name="color-chooser" id="sun" value="#f1c40f" onChange={this.onChangeColor} />
            </form>

        </React.Fragment>
    }
}