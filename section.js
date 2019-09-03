import React from 'react'
import { ni_green, ni_dark_green } from './theme'

export default ({ children }) => (
    <div
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: ni_green,
            backgroundSize: '100% 100%',
            paddingLeft: '1em',
            color: 'white',
            position: 'absolute',
            top:0
        }}>

        <div style={{
            height: '100%',
            position: 'relative'
        }}>
            <div style={{
                margin: 0,
                position: 'absolute',
                top: '60%',
                transform: 'translateY(-50%)'
            }}>
                <h1 style={{
                    fontFamily: 'Roboto Slab',
                    wordSpacing: '-10%',
                    weight: 'bold',
                    color: ni_dark_green,
                    fontSize: '3em',
                    marginTop: 0,
                    lineHeight: "100%"
                }}>{children}</h1>
            </div>

        </div>
    </div>
)