import './footer.css'
import Logo from './assets/homepage/logo_long.png'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='contact'>
                <b>Contact us: </b>
                <p>+45 12345678 - gastrome@gastrome.dk</p>
            </div>
            <img src={Logo} alt='footer logo' />
        </div>
    )
}