import { Component } from 'react'
import Logo from './Logo'
import Carro from './Carro'

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        heigth: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '20px 50px',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.2)',
    }
}

class Navbar extends Component {
    render() {

        const { carro, esCarroVisible, mostrarCarro } = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carro 
                carro={carro} 
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
} 

export default Navbar