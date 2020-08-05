class WelcomeBack extends React.Component {
    constructor() {
        this.state = {
            name: 'J',
            appVersion: '1'
        }
    }

    render() {
        return (
            <>
                <h2>Hello {this.state.name || 'Friend'}! Welcome Back.</h2>
            </>
        )
    }
}