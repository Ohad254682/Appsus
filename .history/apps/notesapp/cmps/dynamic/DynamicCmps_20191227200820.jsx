import mapDynamicCmps from "./mapDynamicCmps.js"

export default class DynamicComponent extends React.Component {
    state = {
  
    }

    componentDidMount() {
        
    }

    getComponent() {
        return mapDynamicCmps[this.props.note.type]
    }

    render() {
        const Cmp = this.getComponent();
        if (!Cmp) return null
        if (!this.props.note) return null
     
        return <Cmp onEditMode={this.props.onEditMode} note={this.props.note} isEditMode={this.props.isEditMode}></Cmp>
    }
}