import './LandingPages.css'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const LandingPages = () =>{
    return(
        <div className='container'>
            <div><Header/></div>
            <div><Main/></div>
            <div><Footer/></div>
        </div>
    )
}
export default LandingPages;