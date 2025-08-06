import img1 from "./images/first.jpg"
import img2 from "./images/second.jpg"
import img3 from "./images/three.jpg"
import img4 from "./images/four.jpg"
function Minproject() {
  return (
    <>
        <h1 className="text-center text-3xl font-semibold text-blue-600 mt-[6rem]">My Projects</h1>
      <div className="flex sm:flex-row flex-col gap-4 mb-11 items-center mt-[1rem] ml-2">
        <div style={{backgroundImage:`   url(${img1})`}} className="sm:w-[300px] w-[360px] relative overflow-hidden h-80  bg-cover bg-center rounded-lg   text-white   ">
              <div className="absolute inset-0 bg-gradient-to-rigth from-black/10 to-black/25"></div>
            <div className="flex justify-between px-3 mt-3">
                <img className="w-10 h-10 rounded-full border-2 border-red-500" src="https://i.pinimg.com/1200x/f4/ef/35/f4ef35e9ce0f3e0fc199324860c0ac20.jpg" alt="" />
                <h1 className="text-teal-500  font-semibold"> E-Commerce</h1>
            </div>
         <div className="bg-slate-950 text-white pb-11 rounded-b-xl pl-2">
          <h1 className="text-[20px] font-semibold  mt-28 pt-10">Modern E-Commerce Wb:</h1>
          <p>
            A fully responsive and dynamic online shopping platform where users
           .
          </p>
          </div>
        </div>
        <div style={{backgroundImage:`   url(${img2})`}} className="sm:w-[300px] w-[360px] relative overflow-hidden h-80  bg-cover bg-center rounded-lg   text-white   ">
         <div className="absolute inset-0 bg-gradient-to-rigth from-black/25 to-black/25"></div>
        <div className="flex justify-between px-3 mt-3">
                <img  className="w-10 h-10 rounded-full" src="https://i.pinimg.com/1200x/0d/19/7f/0d197f64f7cb23a906d9467dd7842e0e.jpg" alt="" />
                <h1 className="text-slate-950 font-semibold"> Blog</h1>
            </div>
         <div className="bg-slate-950 text-white pb-11 rounded-b-xl pl-2">
          <h1 className="text-[20px] font-semibold mt-28 pt-10">Personal Blog Platform:</h1>
          <p>
            A content management system where users can write, edit, and publish articles with a clean editor.
          </p>
          </div>
        </div>
        <div style={{backgroundImage:`   url(${img3})`}} className="sm:w-[300px] w-[360px] relative overflow-hidden h-80  bg-cover bg-center rounded-lg   text-white   ">
      <div className="absolute inset-0 bg-gradient-to-rigth from-black/10 to-black/25"></div>
        <div className="flex justify-between px-3 mt-3">
        <img  className="w-10 h-10 rounded-full" src="https://i.pinimg.com/1200x/86/b0/0c/86b00c2459bb4050cd4b7a7012b403e1.jpg" alt="" />
        <h1 className="text-slate-950 font-semibold"> task App</h1>
            </div>
            <div className="bg-slate-950 text-white pb-11 rounded-b-xl pl-2">
          <h1 className="text-[20px] font-semibold mt-28 pt-10">Task Manager App:</h1>
          <p>
            A productivity tool to help users manage their tasks, track progress, and stay organized.          </p>
            </div>
        </div>
        <div style={{backgroundImage:`   url(${img4})`}} className="sm:w-[300px] w-[360px] relative overflow-hidden h-80  bg-cover bg-center rounded-lg   text-white   ">
          <div className="absolute inset-0 bg-gradient-to-rigth from-black/50 to-black/25"></div>
        <div className="flex justify-between px-3 mt-3">
        <img  className="w-10 h-10 rounded-full hover:scale-110 duration-300" src="https://i.pinimg.com/736x/b9/f8/5e/b9f85e499ed2df72ab0581d88e020597.jpg" alt="" />
         <h1 className="text-slate-950 font-semibold"> Invoice Web:</h1>
            </div>
            <div className="bg-slate-950 text-white pb-11 rounded-b-xl pl-2">
          <h1 className="text-[20px] font-semibold mt-28 pt-10">Invoice Generator Web App:</h1>
          <p>
            A simple and intuitive app that allows freelancers or small businesses to generate. </p>      
         </div>
         </div>
      </div>
    </>
  );
}
export default Minproject;
