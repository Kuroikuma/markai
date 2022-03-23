import { ServicesItem } from './services-item'
import image from '../../assets/customui.png'
import rafiki from '../../assets/rafiki.png'
import '../css/services.css'

export const Services = () => {
  return (
    <div className="services-wrapper">
      <section className="services-wrap">
        <ServicesItem
          subtitle="What is"
          title="Custom Interface"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus."
          image={image}
        />
        <ServicesItem
          subtitle="You can maintain your"
          title="Website with Ai"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus."
          image={rafiki}
          direction="right"
        />
      </section>
    </div>
  )
}
