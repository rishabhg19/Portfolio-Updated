import backgroundVideo from '../video/bg.mp4';
const Background = () => {
    return (
        <div>
            <video autoPlay loop muted id='video'>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
        </div>
    )
}
export default Background;