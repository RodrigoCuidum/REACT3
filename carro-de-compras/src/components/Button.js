import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#223',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },

    buttonHover: {
        backgroundColor: '#34dad5',
        color: '#000',
    }
}
class Button extends Component {
    state = {
        hovering: false,
    };

    render() {
        const { hovering } = this.state;

        return (
            <button
                style={{
                    ...styles.button,
                    ...(hovering ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
                {...this.props} // Spread para pasar otras props
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button