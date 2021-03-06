import mapDynamicCmps from "./mapDynamicCmps.js"

export default class DynamicComponent extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getComponent() {
        return mapDynamicCmps[this.state.componentName]
    }


    render() {
        const Cmp = this.getComponent();
        if (!Cmp) return null
        if (!this.props.note) return null

        return <Cmp note={this.props.note}></Cmp>
    }
}