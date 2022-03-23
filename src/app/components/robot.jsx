import '../css/robot.css'
import logo from '../../assets/Group.png'

export const Robot = () => {
  return (
    <div className="robot-wrapper">
      <section className="robot-wrap">
        <figure className="robot__logo">
          <img src={logo} alt="robot" />
        </figure>
        <h2>
          Make your marketing completely based on Artificial Intelligence.
        </h2>
      </section>
    </div>
  )
}
