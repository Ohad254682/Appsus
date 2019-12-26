

export default class EmailSearch extends React.Component {

    state = {
        subject: '',
        body: '',
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value })
    }

    render() {
        return (
            <section>
                <h1>HOME</h1>
            </section>
        )
    }
}