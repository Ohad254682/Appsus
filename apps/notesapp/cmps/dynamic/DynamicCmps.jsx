import mapDynamicCmps from "./mapDynamicCmps.js"

export default class DynamicComponent extends React.Component {
    state = {
        componentName: 'noteText',
        note: null
    }

    componentDidMount() {
        this.setState({
            componentName: this.props.note.type,
            note: this.props.note
        }, () => {
            console.log(this.state);
        });
    }

    getComponent() {
        return mapDynamicCmps[this.state.componentName]
    }

    setComponent = (ev) => {
        this.setState({ componentName: ev.target.value })
        // this.setState({ componentName: this.props.type })   
    }

    render() {
        const Cmp = this.getComponent();
        if (!Cmp) return null
        if (!this.state.note) return null
     
        return <Cmp note={this.state.note}></Cmp>
    }
}