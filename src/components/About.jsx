import aboutImage from "../assets/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">About</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage} alt="About VastuSpaze" className="w-full h-auto" />
                </div>
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                Laoreet interdum pharetra aliquam curabitur curabitur semper. Mattis adipiscing congue nisi bibendum velit duis efficitur. Vitae ligula eleifend euismod finibus per pellentesque ornare felis. Proin nascetur dignissim lacus vel non potenti ante suspendisse magnis. Faucibus feugiat urna dis; vulputate placerat magnis pulvinar accumsan montes. Vivamus molestie netus a potenti vel. Nibh adipiscing lacinia aliquet orci congue, purus neque finibus. Velit commodo blandit dis mi phasellus pretium.
                </p>
            </div>
    </section>
  )
}

export default About
