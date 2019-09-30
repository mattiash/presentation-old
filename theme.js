export const ni_yellow = '#ffd800'
export const ni_red = '#fa3c5a'
export const ni_blue = '#0055ff'
export const ni_green = '#0ae6be'

export const ni_light_yellow = '#fff3b2'
export const ni_light_red = '#fdc5ce'
export const ni_light_blue = '#b2ccff'
export const ni_light_green = '#b6f8ec'

export const ni_dark_yellow = '#dc8c28'
export const ni_dark_red = '#96281e'
export const ni_dark_blue = '#001eaa'
export const ni_dark_green = '#0a6e78'

export const theme = {
    googleFont: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab:400,700|Roboto:400,700&display=swap',
    fonts: {
        body: 'Roboto'
    },
    styles: {
        h1: {
            fontFamily: 'Roboto Slab',
            wordSpacing: '-10%',
            color: ni_blue,
        },
        h2: {
            marginTop: '0.5em',
            fontFamily: 'Roboto Slab',
            fontWeight: 'bold',
            lineHeight: '110%',
            color: ni_blue,
            position: 'absolute',
            top: 0,

        },
        blockquote: {
            fontFamily: 'Roboto Mono',
            lineHeight: '120%',
            fontStyle: 'italic',
        },
        li: {
            lineHeight: '150%'
        },
        Slide: {
            backgroundImage: `linear-gradient(90deg, ${ni_blue} 50%, ${ni_green}), linear-gradient(to right, RGB(255,255,255), RGB(255,255,255))`,
            backgroundPosition: '0 0, 0, 10px',
            backgroundSize: '100% 10px, 100% 100%',

            backgroundRepeat: 'no-repeat',
            paddingTop: '2.2em',
            paddingLeft: '1em',
            paddingRight: '1em', 
        }
    }
}