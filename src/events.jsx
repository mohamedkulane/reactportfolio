import { Link } from "react-router-dom"

function Events(){
    return <>
    <div>
    <div className="flex justify-between items-center px-4 mb-10 mt-[4rem]">
    <h1 className="text-4xl font-semibold text-slate-900">Eventes</h1>
   <Link to="events"> <button className="bg-blue-500 hover:bg-blue-600 rounded-md py-3 text-xl font-semibold px-10 text-white">View All</button></Link>
    </div>
    {/* events */}
    <div className="grid sm:grid-cols-4 grid-cols-1  gap-2 sm:ml-1  ml-3 ">
    <div  className="sm:w-[300px] w-[360px]   overflow-hidden h-96  bg-cover bg-center rounded-lg   text-white   ">
      <img className="sm:w-[300px] w-[360px] h-[260px] rounded-t-sm     " src="https://i.pinimg.com/736x/80/22/50/8022506379cd94c43b22225c71344f76.jpg" alt="" /> 
    <div className="bg-gray-200 text-black pb-20 rounded-b-xl pl-2">
                  <h1 className="text-[16px] font-semibold ">Tech Innovators Conference – Nairobi 2023</h1>
                  <p>
                    I had the opportunity to attend this regional conference where we explored the future of AI. </p>      
                 </div>
        </div>
    <div className="sm:w-[300px] w-[360px]  overflow-hidden h-96  bg-cover bg-center rounded-lg   text-white sm:mt-0 mt-4  ">
        <img className="sm:w-[300px] w-[360px] h-[260px] rounded-t-sm     " src="https://i.pinimg.com/736x/4c/6c/fc/4c6cfc898708c3c86536f454978a47e4.jpg" alt="" />
        <div className="bg-gray-200 text-black pb-10 rounded-b-xl pl-2">
                  <h1 className="text-[17px] font-semibold  ">React Summit Virtual Meetup – 2024</h1>
                  <p>
                    This virtual event deepened my knowledge of React.js and modern frontend development. </p>      
        </div>
        </div>
    <div  className="sm:w-[300px] w-[360px]  overflow-hidden h-96  bg-cover bg-center rounded-lg   text-white sm:mt-0 mt-4   ">
              <img className="sm:w-[300px] w-[360px] h-[260px] rounded-t-sm     " src="https://i.pinimg.com/736x/37/62/2b/37622b972f96b8a5c26023ffe38195df.jpg" alt="" /> 
    <div className="bg-gray-200 text-black pb-11 rounded-b-xl pl-2">
                  <h1 className="text-[16px] font-semibold ">Startup Launchpad – Mogadishu 2022</h1>
                  <p>
                    I was part of a startup ideation bootcamp that focused on building scalable tech solutions for local . </p>      
                 </div>
        </div>
    <div  className="sm:w-[300px] w-[360px]  overflow-hidden h-96  bg-cover bg-center rounded-lg   text-white  sm:mt-0 mt-4   ">
      <img className="sm:w-[300px] w-[360px] h-[260px] rounded-t-sm     " src="https://i.pinimg.com/736x/37/62/2b/37622b972f96b8a5c26023ffe38195df.jpg" alt="" />
        <div className="bg-gray-200 text-black pb-11 rounded-b-xl pl-2">
                  <h1 className="text-[16px] font-semibold ">Somali Youth Tech Expo – 2021</h1>
                  <p>
                    This was one of my earliest exposures to the tech community. I showcased a simple website I built using HTML, CSS, and JavaScript.  </p>      
                 </div>
        </div>
    <div  className="sm:w-[300px] w-[360px]  overflow-hidden h-96  bg-cover bg-center rounded-lg   text-white sm:mt-0 mt-4   ">
      <img className="sm:w-[300px] w-[360px] h-[260px] rounded-t-sm     " src="https://i.pinimg.com/736x/6e/ae/57/6eae5711d2594376333d992dc65a8244.jpg" alt="" />
        <div className="bg-gray-200 text-black pb-11 rounded-b-xl pl-2">
                  <h1 className="text-[16px] font-semibold ">Somali Youth Tech Expo – 2021</h1>
                  <p>
                    This was one of my earliest exposures to the tech community. I showcased a simple website I built using HTML, CSS, and JavaScript.  </p>      
                 </div>
        </div>
    <div  className="sm:w-[300px] w-[360px]  overflow-hidden h-96  bg-cover bg-center rounded-lg   text-white sm:mt-0 mt-4   ">
      <img className="sm:w-[300px] w-[360px] h-[260px] rounded-t-sm     " src="https://i.pinimg.com/736x/e9/81/14/e98114aafa68844404eb83f160ff8c86.jpg" alt="" />
        <div className="bg-gray-200 text-black pb-11 rounded-b-xl pl-2">
                  <h1 className="text-[16px] font-semibold ">Somali Youth Tech Expo – 2021</h1>
                  <p>
                    This was one of my earliest exposures to the tech community. I showcased a simple website I built using HTML, CSS, and JavaScript.  </p>      
                 </div>
        </div>



    </div>
    </div>
    </>
}
export default Events