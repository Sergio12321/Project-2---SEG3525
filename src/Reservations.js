import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Button } from './components/Button';
import './components/Button.css';
import './components/Navbar.css';
import './components/Contact.css';
import './Reservations.css';

function Reservations(){

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
        <div className='reservation-container'>
            <h1 className='reservations-title'>Réservation de terrains</h1>
            <div className='box-jours-reservation'>
                <h2 className='jours-title'>Jours</h2>
                <div class="btn-group-1" role="group" aria-label="Basic example">
                    <button type="button" class="btn--petit">20 Juillet, Mer</button>
                    <button type="button" class="btn--petit">21 Juillet, Jeu</button>
                    <button type="button" class="btn--petit">22 Juillet, Ven</button>
                    <button type="button" class="btn--petit">25 Juillet, Lun</button>
                    <button type="button" class="btn--petit">26 Juillet, Mar</button>
                    <button type="button" class="btn--petit">27 Juillet, Mer</button>
                    <button type="button" class="btn--petit">28 Juillet, Jeu</button>
                    <button type="button" class="btn--petit">29 Juillet, Ven</button>
                </div>
                <div class="btn-group-2" role="group" aria-label="Basic example">
                    <button type="button" class="btn--petit">1 Août, Lun</button>
                    <button type="button" class="btn--petit">2 Août, Mar</button>
                    <button type="button" class="btn--petit">3 Août, Mer</button>
                    <button type="button" class="btn--petit">4 Août, Jeu</button>
                    <button type="button" class="btn--petit">5 Août, Ven</button>
                    <button type="button" class="btn--petit">8 Août, Lun</button>
                    <button type="button" class="btn--petit">9 Août, Mar</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Heures</th>
                        <th>Niveau 1</th>
                        <th>Niveau 2</th>
                        <th>Niveau 3</th>
                        <th>Prix par séance</th>
                        <th>Prix adhésion mensuelle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:00-9:30 a.m.</td>
                        <td>
                            <Button 
                                className="btns-cours" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>
                        <Button 
                                className="btns-cours" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>-</td>
                        <td>10 dllrs</td>
                        <td>25 dllrs</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>10:00-11:30 a.m.</td>
                        <td>-</td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>10 dllrs</td>
                        <td>25 dllrs</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>12:00-13:30 p.m.</td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>10 dllrs</td>
                        <td>25 dllrs</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>14:00-15:30 p.m.</td>
                        <td>-</td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>10 dllrs</td>
                        <td>25 dllrs</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>16:00-17:30 p.m.</td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>-</td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>10 dllrs</td>
                        <td>25 dllrs</td>
                    </tr>
                    <tr>
                        <td>18:00-19:30 p.m.</td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>-</td>
                        <td>
                        <Button 
                                className="btns" 
                                buttonStyle='btn--outline'
                                buttonSize='btn--medium'
                            >
                                Réserver
                            </Button>
                        </td>
                        <td>10 dllrs</td>
                        <td>25 dllrs</td>
                    </tr>
                </tbody>
            </table>
            <Button
                buttonStyle='btn--cours' 
                buttonSize='btn--large'
            >
                Devenir membre
            </Button>
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

export default Reservations