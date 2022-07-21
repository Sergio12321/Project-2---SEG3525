import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Button.css';
import './Navbar.css';
import './AboutUs.css';
import './Contact.css'; 

function Navbar() {
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
        <div className='hero-container'>
        <div className='hero-btns'>
            <Button 
            className="btns" 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                RÉSERVER UN TERRAIN
            </Button>
            <Button 
            className="btns" 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                DEVENIR UN MEMBRE 
            </Button>
        </div>
        </div>
        <div className='about-us'>
            <h1 className='about-us-title'>About Us</h1>
            <div className='up'>
                <div className='text-up'>
                    <h2 className='title'>Comment nous avons commencé?</h2>
                    <p className='paragraphe'>Le site est un site d’un organisme
                     communautaire « Basket For Fun! ». Il sert à mettre des terrains en disponibilité de la 
                    communauté. N’importe qui pourra réserver des terrains soit pour jouer avec des ami(e)s, 
                    soit seul(e), soit avec une équipe pour pratiquer, soit atteindre à des cours offerts par le 
                    même organisme. Les utilisateurs potentiels seront les étudiants ou les jeunes d’entre 14 
                    et 20 ans. Le site cherche aussi à promouvoir la communication entre les usagers pour 
                    qu’ils ou elles puissent jouer avec des inconnu(e)s ayant le même niveau d’apprentissage 
                    (débutant, intermédiaire ou expert).</p>
                </div>
                <div className='image-up'>
                </div>
            </div>
            <div className='down'>
                <div className='image-down'>
                </div>
                <div className='text-down'>
                    <h2 className='title'>Objectifs</h2>
                    <p className='paragraphe-2'>Notre objectif 
                    général est de promouvoir le sport, plus spécifiquement le basketball qui est le quatrième 
                    sport le plus joué dans le monde (avec 400 millions de pratiquants et pratiquantes). Nous 
                    cherchons à créer une communauté de personnes qui veulent apprendre ou améliorer 
                    des compétences en basketball.</p>
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

export default Navbar