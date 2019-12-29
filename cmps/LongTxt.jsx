export default class LongTxt extends React.Component {
    state = {
        text: this.props.text,
        isLongTxtShown: this.props.isLongTxtShown
    }

    getText = () => {
        return this.props.text.length <= this.props.shortLength ? this.props.text :
            (this.state.isLongTxtShown ? this.props.text.slice(0, this.props.shortLength) + '...' : this.props.text);
    }

    handleReadMore = (ev) => {
        this.setState(prevState => ({ isLongTxtShown: !prevState.isLongTxtShown }))
        ev.stopPropagation();
    }

    getToggleLinkStr = () => {
        return this.props.text.length <= this.props.shortLength ? '' :
            <span className="read-more" onClick={this.handleReadMore}>
                {this.state.isLongTxtShown ? 'Show More' : 'Show Less'}</span>;
    }

    render() {
        return (<p>{this.getText()}{this.getToggleLinkStr()}</p>);
    }
}