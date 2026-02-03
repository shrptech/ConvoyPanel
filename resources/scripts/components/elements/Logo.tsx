import { ComponentProps } from 'react'

const Logo = (props: ComponentProps<'img'>) => {
    return (
        <img
            src='https://shrp.no/sharptech_logo.png'
            alt='SHRP Logo'
            {...props}
        />
    )
}

export default Logo
