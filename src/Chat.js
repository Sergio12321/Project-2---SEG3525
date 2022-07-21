import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Button } from './components/Button';
import './components/Button.css';
import './components/Navbar.css';
import './components/Contact.css';
import './Reservations.css';
import './Chat.css';

function Chat(){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    BASKET FOR FUN! <i className="fa-solid fa-basketball"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i class={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                            Cours
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/reservations' className='nav-links' onClick={closeMobileMenu}>
                            Reservations
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/chat' className='nav-links' onClick={closeMobileMenu}>
                            Chat
                        </Link>
                    </li>
                </ul>
                {button && <Button 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Sign up
                </Button>}
            </div>
        </nav>
        <div className='chat-container'>
            <h1 className='chat-title'>Chat</h1>
            <button type="button" class="btn-groupe">Créer un groupe</button>
            <div class="form-group">
                <label class = "title-box" for="exampleFormControlSelect1">Sélectionnez votre niveau</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Niveau 1</option>
                    <option>Niveau 2</option>
                    <option>Niveau 3</option>
                </select>
            </div>
            <div className='container'>
            <div className='header'>
                <h1>Niveau 1</h1>
            </div>
            <div className='body'>
                <p className='message'>Voulez-vous jouer demain à 15h?</p>
                <p className='message user_message'>Oui! Je serais là</p>
            </div>
            <div className='footer'>
                <form>
                    <input type="text" name= ""></input>
                    <button>SEND</button>
                </form>
            </div>
        </div>
        </div>
        <div className='contact-us'>
            <h1 className='contact-us-title'>Contact</h1>
            <div className='contact-info-left'>
                <p className='info-num'>Numéro de téléphone: (513) 467-1587</p>
                <p className='info-ad'>Adresse: 80 Sweetland Ave. Ottawa, ON K1N 7T6</p>
                <p className='info-cou'>Courriel: basketforfun@hotmail.com</p>
            </div>
            <div className='contact-info-right'>
                <p className='right-title'>Heures d'ouverture:</p>
                <p className='horaires'>Lundi : 8:00 AM - 8:00 PM
                Mardi : 8:00 AM - 8:00 PM
                Mercredi : 8:00 AM - 8:00 PM
                Jeudi : 8:00 AM - 8:00 PM
                Vendredi : 8:00 AM - 8:00 PM</p>
            </div>
        </div>
    </>
  )
}

export default Chat