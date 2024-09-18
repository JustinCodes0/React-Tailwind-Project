import aboutImage from "../assets/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">About</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage} alt="About Binary" className="w-full h-auto" />
                </div>
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                Binary-Brews is a unique coffee shop designed for software engineers, coders, and tech enthusiasts. It's a cozy haven where creativity and productivity flow freely over a cup of expertly brewed coffee. With subtle tech-themed decor, like binary patterns and circuit board designs, it’s the perfect spot to code, collaborate, or unwind. Whether you're debugging your latest project or brainstorming the next big idea, Binary-Brews provides a welcoming environment for all tech lovers.
                </p>
            </div>
    </section>
  )
}

export default About
