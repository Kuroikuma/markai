import '../css/video.css'
import unsplash from '../../assets/unsplash.png'
import play from '../../assets/play.png'

export const Video = () => {
  return (
    <div className="video-wrapper">
      <section className="video-wrap">
        <article className="video__info">
          <p>Let’s introduce with</p>
          <h2>Your Writing Partner!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus odio tempor rutrum...
          </p>
        </article>
        <section className="video__content">
          <img src={unsplash} alt="unsplash" />
          <img src={play} alt="play" />
        </section>
      </section>
    </div>
  )
}
