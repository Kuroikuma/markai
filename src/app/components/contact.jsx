import '../css/contact.css'

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-wrap">
        <article className="contact__title">
          <h2>Contact us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus odio tempor rutrum...
          </p>
        </article>
        <form className="contact__form">
          <div className="contact__form__group">
            <div className="contact__form__top">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email Address" />
            </div>
            <textarea type="text" placeholder="Your Messages..."></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
