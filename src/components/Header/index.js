import React from 'react'
import params from '../../params'
import { FaCogs, FaSync } from 'react-icons/fa'
export default function Header(props){
    return (
        <header style={styles.container}>
            <span  style={{color: 'black', fontSize: 20}}> Nivel Dificuldade: { params.difficultLevel * 10 }</span>
            <div style={styles.difficultContainer}>
                <button style={{padding:15, display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={props.onDifficultClick}>
                    <FaCogs size={15} style={{margin: 5}} />
                    Dificuldade
                </button>


                   
            </div>
            <button style={{padding:15, display: 'flex', alignItems: 'center', justifyContent: 'center'}}  onClick={props.onNewGame}>
                <FaSync size={15} style={{margin: 5}} />
                Novo Jogo
            </button>
        </header>
    )
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal:20
    },
    difficultContainer: {
        flexDirection: 'row',
        padding: 10,
        margin:15,
    }

}