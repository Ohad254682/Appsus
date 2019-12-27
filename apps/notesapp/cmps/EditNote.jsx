import DynamicCmps from "./dynamic/DynamicCmps.jsx";

export default class EditNote extends React.Component {

    state = {
        note: null
    }

    render() {
        return <React.Fragment>
            <section className="edit-note-container">
                <input type="text" placeholder="add new note" />
                <button type="send">Add note</button>

                <DynamicCmps></DynamicCmps>
            </section>

        </React.Fragment>

    }
}