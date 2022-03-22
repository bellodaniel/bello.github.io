import React from "react";
import profileImg from '../data/profile.png';
import magentoFE from '../data/magento-fe.jpeg';
import FeDev from '../data/fe-dev.jpeg';

function Home() {
  return (
    <section id="about">
      <div className="container m-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="inline-block mt-8 mb-8">
            <img className="object-contain object-top rounded-full m-auto"
                 src={profileImg}
                 alt="Daniel Bello Profile"/>
          </div>
          <div className="flex bg-gray-100 p-10">
            <div className="mb-auto mt-auto max-w-lg">
              <h1 className="text-3xl uppercase">Daniel Bello</h1>
              <p className="font-semibold mb-5">Magento Frontend Developer</p>
              <p>Welcome to my personal blog. <br />
                 This website is an effort to help people and developers learn about frontend development and the e-commerce world.
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 h-full w-full px-5 pt-6 pb-20">
        <div className="container m-auto max-w-screen-xl">
            <div className="mb-3">
                <h1 className="text-3xl font-bold w-full text-center mb-8 mt-4">Latest Posts</h1>
            </div>
            <div className="mb-5">
                <a href="/magento-2-frontend-developer" className="block relative rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 bg-cover bg-center bg-no-repeat" 
                style={{backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(" + magentoFE +")"}}>
                    <div className="absolute top-0 right-0 -mt-3 mr-3">
                        <div className="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i className="mdi mdi-fire text-base align-middle"></i> 
                          <span className="align-middle">Magento</span>
                        </div>
                    </div>
                    <div className="h-48">
                    </div>
                    <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">How to Get Started as a Magento 2 Frontend Developer</h2>
                    <div className="flex w-full items-center text-sm text-gray-300 font-medium">
                        <div className="flex-1 flex items-center">
                            <div className="rounded-full w-8 h-8 mr-3"></div>
                            <div>Development</div>
                        </div>
                        <div><i className="mdi mdi-thumb-up"></i>9 minutes</div>
                    </div>
                </a>
            </div>
            <div class="flex -mx-1 mb-5">
                <div class="w-1/2 px-1">
                    <a href="/what-is-a-front-end-developer" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-cover bg-center bg-no-repeat"
                        style={{backgroundImage: "url("+ FeDev +")"}}>
                        <div class="h-24"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">What is a front-end developer and how to think like one?</h3>
                    </a>
                    <a href="#" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-cover bg-center bg-no-repeat" 
                        style={{backgroundImage: "url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"}}>
                        <div class="h-32"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">Top Travels Destinations For 2020</h3>
                    </a>
                </div>
                <div class="w-1/2 px-1">
                    <a href="#" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-cover bg-center bg-no-repeat" 
                        style={{backgroundImage: "url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"}}>
                        <div class="h-32"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">M&S Launches New Makeup Range!</h3>
                    </a>
                    <a href="#" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 bg-cover bg-center bg-no-repeat" 
                        style={{backgroundImage: "url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"}}>
                        <div class="h-24"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">APT Set To Be A&nbsp;Ripper</h3>
                    </a>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Home;
