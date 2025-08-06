function About() {
  return (
    <>
      <div className="sm:flex block justify-around">
         <div className="mt-10   ">
        <img className="rounded-full sm:ml-0 ml-5  w-[350px] h-[350px] border-8 border-b-blue-600 " src="https://i.pinimg.com/736x/a1/3f/e5/a13fe593cd044397afc8ce5d47598333.jpg" alt="" />
      </div>
        <div className="sm:ml-4 ml-1 sm:text-left text-center mt-[5rem] sm:w-[45%] w-full ">
          <h1 className="text-6xl font-semibold text-gray-600 mb-4"> About <span className="text-blue-600">Me..!</span></h1>
          <p className="text-[16px] sm:w-full w-[350px] text-left sm:ml-0 ml-6">
            Hi, I’m Mohamed Ahmed, a passionate and creative web developer with
            a strong focus on building modern, responsive, and user-centered web
            applications. I specialize in front-end development using tools like
            React, Tailwind CSS, and JavaScript, while also being comfortable
            with full-stack technologies such as <span className="text-orange-500">Node.js, MongoDB, and Express.</span>
          </p>
            <div class="flex flex-wrap gap-2 text-white mt-4 cursor-pointer sm:ml-0 ml-4">
                            <span class="bg-gray-200 hover:bg-orange-500 hover:text-white  text-blue-600 px-4 py-2 rounded-full">HTML5/CSS3</span>
                            <span class="bg-gray-200 hover:bg-orange-500 hover:text-white  text-blue-600 px-4 py-2 rounded-full">JavaScript</span>
                            <span class="bg-gray-200 hover:bg-orange-500 hover:text-white  text-blue-600 px-4 py-2 rounded-full">React.js</span>
                            <span class="bg-gray-200 hover:bg-orange-500 hover:text-white  text-blue-600 px-4 py-2 rounded-full">Node.js</span>
                            <span class="bg-gray-200 hover:bg-orange-500 hover:text-white  text-blue-600 px-4 py-2 rounded-full">Figma</span>
         </div>
        </div>
   
      </div>
    </>
  );
}
export default About;
