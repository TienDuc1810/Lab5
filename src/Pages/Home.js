import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const GoToDashBoard = () => {
        navigate('/dashboard')
    }
    return (
        <div className='container'>
            <div className='title'>Welcome to DashBoard</div>
            <button className='click' onClick={()=>GoToDashBoard()}>DashBoard</button>
        </div>
    )
}
export default Home;