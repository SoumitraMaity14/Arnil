
import { Banner } from './components/Banner'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { PortfolioSection } from './components/PortfolioSection'
import { TestimonialSection } from './components/TestimonialSection'
import { TestimonialSlider } from './components/TestimonialSlider'
import { FaqSection } from './components/FaqSection'

export const Home = () => {
  return (
    <div>
        <Banner/>
        <AboutSection/>
        <ServicesSection/>
        <PortfolioSection/>
        <TestimonialSection/>
        <TestimonialSlider/>
        <FaqSection/>
    </div>
  )
}
