import '../css/footer.css'
import arrow from '../../assets/Arrow3.png'
import linkedin from '../../assets/linkedin.png'
import facebook from '../../assets/facebook.png'
import cb from '../../assets/cb.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import { FooterOption } from './footer-option'

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrap">
        <div className="footer__hero">
          <h2>Markai</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque.
          </p>
          <button>
            Let’s go <img src={arrow} alt="arrow" />
          </button>
          <div className="footer__hero__icons">
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
            <img src={cb} alt="cb" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="footer__options">
          <FooterOption
            options={[
              'Site',
              'Feature',
              'Product',
              'Company',
              'Pricing',
              'Support',
            ]}
          />
          <FooterOption
            options={[
              'Legals',
              'Privacy Policy',
              'Terms & Condition',
              'Company Policy',
            ]}
          />
          <FooterOption
            options={['Company', 'About Us', 'Our Team', 'Our Story', 'Career']}
          />
          <FooterOption
            options={['Follow us one', 'Twitter', 'Facebook', 'Linkedin']}
          />
        </div>
      </div>
    </div>
  )
}
