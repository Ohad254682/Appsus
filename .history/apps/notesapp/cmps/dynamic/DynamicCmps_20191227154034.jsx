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
        if (!this.state.note) return null

        return <Cmp note={this.state.note}></Cmp>
    }
}