import DynamicCmps from "./dynamic/DynamicCmps.jsx";

export default class AddNote extends React.Component {

    state = {

    }



    render() {
        return <React.Fragment>
            <section className="add-note-container">
                <input type="text" placeholder="add new note" />
                <button type="send">Add note</button>
                {/* <select onChange={this.setComponent}> */}
                <select onChange={this.setComponent}> 
                {/* ev.target.value */}
                    <option value="noteTodos">To Do</option>
                    <option value="noteText">Text</option>
                    <option value="noteImg">Image</option>
                    <option value="noteVideo">Video</option>
                </select>
                {/* <DynamicCmps></DynamicCmps> */}
            </section>
          
        </React.Fragment>
         
    }
}