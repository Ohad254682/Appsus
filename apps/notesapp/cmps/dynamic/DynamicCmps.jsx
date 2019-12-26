
import mapDynamicCmps from "./mapDynamicCmps.js"
import NoteService from "../../services/NoteService.js";

export default class DynamicComponent extends React.Component {
    state = {
        componentName: 'text',
        userName: 'Hadas'
    }

    getComponent() {
        return mapDynamicCmps[this.state.componentName]
    }

    setComponent = (ev) => {
        this.setState({ componentName: ev.target.value })
    }

    render() {
        const Cmp = this.getComponent();

        return <React.Fragment>
            <Cmp name={this.state.userName}></Cmp>
            <select onChange={this.setComponent}>
                <option value="todo">To Do</option>
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
            </select>
        </React.Fragment>
        // switch (this.state.componentName) {
        //     case 'hello':
        //         return <Hello name={this.state.userName}></Hello>
        //     case 'bye':
        //         return <Bye name={this.state.userName}></Bye>
        //     case 'hello':
        //         return <Welcome name={this.state.userName}></Welcome>
        // }
    }
}