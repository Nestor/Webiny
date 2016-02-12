import Webiny from 'Webiny';

class Button extends Webiny.Ui.Component {

    constructor(props) {
        super(props);

        this.state = {
            enabled: true
        };
    }

    disable() {
        this.setState({enabled: false});
    }

    enable() {
        this.setState({enabled: true});
    }
}

Button.defaultProps = {
    size: 'normal',
    type: 'default',
    renderer: function renderer() {
        const props = _.clone(this.props);

        if (!this.state.enabled) {
            props['disabled'] = true;
        }

        const sizeClasses = {
            normal: '',
            large: 'btn-lg',
            small: 'btn-sm'
        };

        const alignClasses = {
            normal: '',
            left: 'pull-left',
            right: 'pull-right'
        };

        const typeClasses = {
            default: 'btn-default',
            primary: 'btn-primary',
            secondary: 'btn-success'
        };

        const classes = this.classSet(
            'btn',
            sizeClasses[props.size],
            alignClasses[props.align],
            typeClasses[props.type],
            props.className
        );
        return <button {...props} type="button" className={classes}>{props.children || props.label}</button>;
    }
};

export default Button;