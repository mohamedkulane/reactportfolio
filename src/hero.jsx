function Hero() {
  return (
    <>
    <div className="flex sm:flex-row flex-col justify-around">
      <div className="mt-[3rem] sm:w-[50%] w-full sm:ml-6 ml-1 text-center sm:text-left ">
        <h1 className="font-semibold sm:text-4xl text-2xl">Hi, I’m Mohamed Ahmed | <br /> a Passionate <span className="text-blue-600">Web Developer</span></h1>
        <p className="sm:w-[500px] w-fit  text-[18px] text-gray-500 mt-3">
          I specialize in crafting responsive, user-friendly, and modern web
          applications using cutting-edge technologies. 
        </p>
      <div className="flex gap-2  mt-3 sm:ml-0 ml-4">
        <i class="fa-solid hover:text-gray-600 text-xl fa-globe text-blue-500"></i>
        <h1 className="sm:text-xl text-[16px] font-serif">Full-Stack Web Developer <span className="text-blue-600">(React, Node.js, MongoDB)</span></h1>
      </div>
      <div className="flex gap-2 ml-4 sm:ml-0">
        <i class="fa-solid hover:text-gray-600 text-xl fa-brain text-pink-500"></i>
        <h1 className="sm:text-xl text-[16px]font-serif"> Lifelong learner & problem-solver</h1>
      </div>
      <div className="flex gap-2 ml-4 sm:ml-0">
      <i class="fa-solid hover:text-gray-600 text-xl fa-bolt text-orange-500"></i>
        <h1 className="sm:text-xl text-[16px]font-serif">Fast, dynamic, and pixel-perfect web designs</h1>
      </div>
      <div className="flex gap-2 ml-4 sm:ml-0">
       <i class="fa-solid hover:text-gray-600 text-xl fa-briefcase text-stone-700"></i>
        <h1 className="sm:text-xl text-[16px] font-serif">Available for freelance and collaborative projects</h1>
      </div>
      <div>
      </div>

      </div>
      <div className="sm:mt-10 ml-6 sm:ml-0 mt-6   ">
        <img className="rounded-full  w-[350px] h-[350px] border-8 border-b-blue-600 " src="https://i.pinimg.com/736x/a1/3f/e5/a13fe593cd044397afc8ce5d47598333.jpg" alt="" />
      </div>
      </div>
    </>
  );
}
export default Hero
