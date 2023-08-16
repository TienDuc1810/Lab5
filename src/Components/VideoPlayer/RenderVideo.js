const RenderVideo = (props) => {
    return (
        <div>
            <video controls loop autostart={'true'} autoPlay={true} height={400} width={700}>
                <source src={props.src} type="video/mp4" />
            </video>
        </div>
    )
};

export default RenderVideo;
