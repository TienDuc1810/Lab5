import './Countdown.css'

const Countdown = ({days,hours,minutes,seconds}) => {
    return (
        <div class="image-container">
            <img src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-02.jpg" alt="Ảnh mẫu" />
            <div class="overlay">
                <p className='image-inner'><img src="https://gudlogo.com/wp-content/uploads/2019/04/logo-luc-giac-41.png" alt="Logo"/></p>
                <p class="highlight-text-1">We're coming soon</p>
                <p class="highlight-text-2">We are working very hard on the new version of our site.</p>
                <p class="highlight-text-3">It will bring a lot of new features. Stay tuned!</p>
                <div className='item-time'>
                    <span className='circle'>
                        <div className='time'>{days}</div>
                        <div className='title'>days</div>
                    </span>
                    <span className='circle'>
                        <div className='time'>{hours}</div>
                        <div className='title'>hours</div>
                    </span>
                    <span className='circle'>
                        <div className='time'>{minutes}</div>
                        <div className='title'>minutes</div>
                    </span>
                    <span className='circle'>
                        <div className='time'>{seconds}</div>
                        <div className='title'>seconds</div>
                    </span>
                </div>
            </div>

        </div>
    )
}
export default Countdown;