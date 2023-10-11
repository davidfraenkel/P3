import './header.css'
import Logo from './assets/homepage/logo2.png'
import { HiUser } from "react-icons/hi";
let isLoggedIn = false;

export default function Header() {
    return (
        <div className="Nav">
            <div className='NavContainer'>

                    <div className='NavLogo'>
                        <img src={Logo} alt='Gastrome Logo'/>
                    </div>

                {isLoggedIn ?  (
                    <div className='NavProfile'>Sign In</div>
                ) : (
                    <div className='NavProfile'><HiUser className='ProfileIcon' /></div>
                )}
            </div>
        </div>
    )
}