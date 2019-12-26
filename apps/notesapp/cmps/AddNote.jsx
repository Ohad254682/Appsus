import DynamicCmps from "./dynamic/DynamicCmps.jsx";

export default class AddNote extends React.Component {

    state = {

    }

    render() {
        return <React.Fragment>
            <section className="add-note-container">
                <input type="text" placeholder="add new note" />
                <button type="send">Add note</button>

                <DynamicCmps></DynamicCmps>
            </section>
          
        </React.Fragment>
         
    }
}