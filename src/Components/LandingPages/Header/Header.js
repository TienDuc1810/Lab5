import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className="header">
            <div className="item-1">
                <div className="text-left">
                    <span className='text-1'>Travel</span>
                    <span className='text-2'>Agency</span>
                </div>
                <div className="text-right">
                    <div className='text-3'>
                        <span>Connect with us:</span>
                        <div>
                            <FontAwesomeIcon icon="fa-brands fa-facebook" size="lg" className='icon'/>
                            <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg" className='icon'/>
                        </div>
                    </div>
                    <span className='text-4'>
                        <div className='call'>Call Us for More information</div>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-phone-volume" size="xl" className='icon-phone'/>
                            <span className='phone'>(847) 613-8094</span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="item-2">
                <div className='text-inner'>
                    <div>
                        <p className='inner-text-1'>See what the BUZZ is all about!</p>
                        <p className='inner-text-2'>International Travel Agency</p>
                    </div>
                    <div><button className='bt1'>GET THE BEST OFFER</button></div>
                </div>
            </div>
            <div className="item-3">
                <div className='position-bt'>
                    <button className='bt2'><FontAwesomeIcon icon="fa-regular fa-comments" size="2xl" /> CONSULTING</button>
                    <button className='bt2' style={{backgroundColor:"#378DD6"}}><FontAwesomeIcon icon="fa-solid fa-plane-up" size="2xl" /> TRAVEL GUIDE</button>
                    <button className='bt2' style={{backgroundColor:"#72B21D"}}><FontAwesomeIcon icon="fa-solid fa-calendar-days" size="2xl" /> HOTEL INFO</button>
                </div>
            </div>
        </div>
    )
}
export default Header;