function Footer(){
    return <>
   <div className="bg-slate-950 text-white py-10 mt-[5rem]">
        <div  className=" flex justify-around sm:flex-row flex-col   text-center    ">
          <div className=" ml-2">
            <div className="flex gap-3">
                <i class="fa-solid fa-clipboard-user text-2xl text-orange-600"></i>
            <div>
              <h1 className="sm:text-2xl text-xl font-semibold">
                Joion Our newsletter and get offers
              </h1>
                </div>
            </div>
            <div>
              <input
                className="py-3 sm:w-80 w-52 bg-white pl-3 outline-none font-semibold text-orange-600 mt-4"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-orange-700 sm:px-11 px-7 py-3 text-white">
                Subscribe
              </button>
              <p className="text-[16px] mt-3">Sign up our newsletter Sign up our newsletter Sign up our newsletter</p>
            </div>
          
    </div>
    <div className="mt-4 sm:mt-0">
        <h1 className="text-3xl font-semibold mb-2">Links</h1>
        <ul className="text-xl cursor-pointer sm:block flex gap-6 sm:ml-0 ml-[6rem]">
        <li className="hover:text-orange-600">Home</li>
        <li className="hover:text-orange-600">About</li>
        <li className="hover:text-orange-600">Contact</li>
        </ul>
    </div>
    <div className="sm:flex sm:flex-col  cursor-pointer sm:ml-0 ml-[2rem] sm:mt-0 mt-6">
        <h1 className="text-3xl font-semibold">Follow us</h1>
        <div className="grid grid-cols-2 sm:grid-cols-none ml-6 mt-3">
         <div className="flex  gap-2 ">   
        <i class="fa-brands fa-facebook-f text-2xl "></i>
        <h1 className="hover:text-orange-600">Facebook</h1>
        </div>
        <div className="flex  gap-2">
        <i class="fa-brands fa-instagram text-2xl "></i>
        <h1 className="hover:text-orange-600">Instgram</h1>
        </div>
        <div className="flex  gap-2">
        <i class="fa-solid fa-envelope-circle-check text-2xl"></i>
          <a href="mailto:contact@yourdomain.com" className="text-white"><h1 className="hover:text-orange-600">Email</h1> </a>
        </div>
        <div className="flex  gap-2">
          <i class="fa-brands fa-whatsapp text-2xl"></i>
              <a href="https://wa.me/252613692550" target="_blank" rel="noopener noreferrer" className="text-white "> <h1 className="hover:text-orange-600">WhatSapp</h1></a>
        </div>
           
    </div>
    </div>
    
    </div>
    </div>
    
    </>
}
export default Footer