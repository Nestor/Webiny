import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class PasswordContainer extends Webiny.Ui.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            icon: 'fa-eye',
            msg: 'Show content'
        };

        this.bindMethods('togglePassword');
    }

    togglePassword() {
        if (this.state.showPassword === true) {
            this.setState({
                showPassword: false,
                icon: 'fa-eye',
                msg: 'Show content'
            });
        } else {
            this.setState({
                showPassword: true,
                icon: 'fa-eye-slash',
                msg: 'Hide content'
            });
        }
    }
}

PasswordContainer.defaultProps = {
    renderer() {
        const props = _.omit(this.props, ['renderer']);
        const type = this.state.showPassword ? 'text' : 'password';

        return (
            <w-password>
                <Ui.Input type={type} {...props} info={<Ui.Link onClick={this.togglePassword}><Ui.Icon icon={this.state.icon}/> {this.state.msg}</Ui.Link>}/>
            </w-password>
        );
    }
};

export default PasswordContainer;
