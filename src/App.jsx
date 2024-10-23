import React from 'react';
import img1 from '/src/images/img1.png';
import img3 from '/src/images/img3.png';
import img4 from '/src/images/img4.png';
import img5 from '/src/images/img5.png';
import img6 from '/src/images/img6.png';

const App = () => {
  return (
    <div className="App">
      <div className="rounded-lg h-[1440px] w-[1080px] bg-white">
        <header className="h-[50px] w-full border-b px-8 py-4 flex items-center justify-between">
          <div className="font-bold">
            Frontend Practice
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-neutral-700 hover:underline">Home</a>
            <a href="#" className="text-neutral-700">Projects</a>
            <a href="#" className="text-neutral-700">Blog</a>
            <a href="#" className="text-neutral-700">Contact</a>
            <a href="#" className="text-neutral-700">Newsletter</a>
          </div>
        </header>
        <section className="text-center p-5">
          <h1 className="font-bold text-2xl">Reference image</h1>
          <div className="bg-black h-[50px] w-full rounded-md mt-4 flex items-center justify-between text-white px-4 py-2">
            <div>Abstract | Help Center</div>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition duration-300">
                Submit a request
              </button>
              <button className="px-5 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-900 transition duration-300">
                Sign in
              </button>
            </div>
          </div>
          <div className="bg-indigo-100 h-[400px] w-full flex flex-col gap-4 items-center px-4 py-8">
            <h1 className="font-bold text-3xl">How can we help</h1>
            <div className="bg-white h-[40px] w-[300px] rounded-md mx-auto shadow-md flex items-center">
              <span className="material-symbols-outlined ml-2 text-gray-400">
                search
              </span>
              <input
                type="text"
                className="outline-none bg-transparent w-full h-full px-2"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[600px] w-full px-8 py-8">
            <div className="flex items-start gap-4 ">
              <img
                src= {img1}
                alt="img1"
                className="h-[150px] w-[150px] rounded-full"
              />
              <div>
              <h1 className="font-bold text-4xl">Abstract</h1>
              <p>Use project,teams to stepup and work with teams</p>
                <a className="text-blue-400">Learn More...</a>
                </div>
            </div>
            <div className="flex items-start gap-4 ">
              <img
                src= {img1}
                alt="img1"
                className="h-[150px] w-[150px] rounded-full"
              />
              <div>
              <h1 className="font-bold text-4xl">Manage Your Account</h1>
              <p>Use project,teams to stepup and work with teams</p>
                <a className="text-blue-400">Learn More...</a>
                </div>
            </div>
            <div className="flex items-start gap-4 ">
              <img
                src= {img6}
                alt="img1"
                className="h-[150px] w-[150px] rounded-full"
              />
              <div>
              <h1 className="font-bold text-4xl">Abstract</h1>
              <p>Use project,teams to stepup and work with teams</p>
                <a className="text-blue-400">Learn More...</a>
                </div>
            </div>
            <div className="flex items-start gap-4 ">
              <img
                src= {img5}
                alt="img1"
                className="h-[150px] w-[150px] rounded-full"
              />
              <div>
              <h1 className="font-bold text-4xl">Manage Billing</h1>
              <p>Use project,teams to stepup and work with teams</p>
                <a className="text-blue-400">Learn More...</a>
                </div>
            </div>
            <div className="flex items-start gap-4 ">
              <img
                src= {img3}
                alt="img1"
                className="h-[150px] w-[150px] rounded-full"
              />
              <div>
              <h1 className="font-bold text-4xl">Accounting</h1>
              <p>Use project,teams to stepup and work with teams</p>
                <a className="text-blue-400">Learn More...</a>
                </div>
            </div>
            <div className="flex items-start gap-4 ">
              <img
                src= {img4}
                alt="img1"
                className="h-[150px] w-[150px] rounded-full"
              />
              <div>
              <h1 className="font-bold text-4xl">Abstract Support</h1>
              <p>Use project,teams to stepup and work with teams</p>
                <a className="text-blue-400">Learn More...</a>
                </div>
            </div>
            </div>
          <div className="bg-black w-full py-12 px-20 text-white">
          <div className="grid grid-cols-5 gap-4 ">
            <div>
          <h1>Abstract</h1>
            <ul>
              <li>
            <a className="font-bold">Branches</a>
                </li>
            </ul>
            </div>
        
            <div>
          <h1>Resources</h1>
            <ul>
              <li className="font-bold flex flex-col gap-1">
            <a >Blog</a>
            <a >Help Center</a>
            <a >Release Note</a>
            <a >Status</a>
                </li>
            </ul>
            </div>
         
        
            <div>
          <h1>Community</h1>
            <ul>
              <li className="font-bold flex flex-col gap-1">
            <a >Twitter</a>
            <a >Linkedin</a>
            <a >Facebook</a>
            <a >Dribble</a>
            <a >Podcast</a>
                </li>
            </ul>

              </div>
              <div>
          <h1>Company</h1>
            <ul>
              <li className="flex flex-col font-semibold">
            <a >About us </a>
            <a >Careers</a>
            <a >Login</a>
                </li>
              <li className="font-bold flex flex-col mt-4">
            <a >Dribble</a>
            <a >Podcast</a>
                </li>
              </ul>
              </div>
            <div className="mt-8 flex flex-col text-white">
            <p>&copy;Copyright 2022</p>
            <p>Abstract Studio Design,inc All rights reserverd</p>
            </div>
            
          </div>
         </div>
        </section>
        <footer className="bg-black h-[100px] w-full text-white  py-5">
        <div className="flex flex-col gap-3 items-center">
        <div>
        <h1>Frontend-practice-&copy;2024</h1>
        </div>
        <div className="flex items-center gap-4 hover:underline">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Company</a>
        <a href="#">NewsLetter</a>
        <a href="#">FAQ</a>
        </div>
        </div>
         </footer>
      </div>
    </div>
  );
}
export default App;