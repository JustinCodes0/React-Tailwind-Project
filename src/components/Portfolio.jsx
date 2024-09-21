import { PORTFOLIO_PROJECTS } from "../constants"

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
        <div className="flex flex-col items-center my-20">
        <p className="lg:mt text-2xl mb-6 font-medium tracking-tighter">
                {PORTFOLIO_PROJECTS.subtitle}
            </p>
            <img src={PORTFOLIO_PROJECTS.image} className="w-full h-auto object-cover rounded-lg" alt="" />
        </div>
    </section>
  )
}

export default Portfolio