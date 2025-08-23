import RevealOnScroll from '../RevealOnScroll';
import imageProfile from '../../assets/Profile1.png';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-evenly relative bg-[#1f284d] sm:flex-col lg:flex-row max-[639px]:flex-col"
    >
      <RevealOnScroll>
        <div className="sm:mb-3 sm:mt-25 lg:mt-0 mt-25">
          <img
            src={imageProfile}
            alt="Profile"
            className="rounded-full size-96 shadow-xl shadow-black/50 hover:scale-110 duration-300 ease-in-out cursor-pointer max-sm:size-60"
          />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 shrink">
          <h1 className="text-[#eff8f7] text-5xl md:text-7xl font-bold mb-4 p-3 cursor-default">
            My <span className="text-[#ef4442]">Portfolio</span>
          </h1>

          <p className="text-[#eff8f7] text-lg mb-8 max-w-lg mx-auto text-justify cursor-default">
            Hello, I'm
            <span className="text-[#ef4442] font-semibold">
              {' '}
              Leonheil Cordero
            </span>
            , an enthusiastic web developer who enjoys building dynamic and
            user-friendly web applications using the latest technologies. I’ve
            worked on small to mid-scale projects that helped me sharpen my
            skills and grow as a developer. I’m currently looking for new
            opportunities to join a great team where I can contribute what I’ve
            learned and continue to improve. Feel free to reach out. Happy
            coding! 😊🧑‍💻🚀
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#ef4442] text-[#eff8f7] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[#ef4442]/50 hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#ef4442] text-[#ef4442] py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[#ef4442]/50 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
