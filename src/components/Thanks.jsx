import cracker from '../assets/cracker.png';
import logo from '../assets/logo.jpg';

const Thanks = () => {
    return (
        <div className='popup'>
            <img src={logo} width='200' alt='logo' />
            <img src={cracker} width='300' alt='cracker' />
            <h2 className='thanks-h2'>Thank you!</h2>
            <p className="message">We look forward to your visit.</p>
        </div>
    )
}

export default Thanks;