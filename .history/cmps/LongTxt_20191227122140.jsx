export default class LongTxt extends React.Component {
    state = {
        text: this.props.text,
        isLongTxtShown: this.props.isLongTxtShown
    }

    ren

    getText = () => {
        return (this.state.isLongTxtShown) ? this.props.text : this.props.text.substring(0, this.props.shortLength);
    }

    handleReadMore = () => {
        this.setState(prevState => ({ isLongTxtShown: !prevState.isLongTxtShown }))
    }

    render() {
        return (
            <span className="read-more" onClick={this.handleReadMore}>{this.getText()}<span className="read-more-button"> ...Read More</span></span>)
    }
}