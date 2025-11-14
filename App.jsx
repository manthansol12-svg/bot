
// import React, { useState } from 'react';
// import "./App.css"
// import Navbar from './Components/Navbar';
// import { GoogleGenAI } from "@google/genai";

// //  AIzaSyBzZHnLW-9_3r8uLtxecwqoMEqNLRLXgWA

//  const App = () => {
//   const[screen, setScreen]=useState(2);
//   const [prompt,setPrompt]=useState("");
//   const[Loading,setLoading]=useState(false);
//   const ai = new GoogleGenAI({apiKey:"AIzaSyBzZHnLW-9_3r8uLtxecwqoMEqNLRLXgWA"});
//     let messages =[
//     ]
//     const[data,setData]=useState(messages);
  
//      async function getResponse() {
//       if(prompt===""){
//         alert("Please enter a prompt")
//         return ;
//       }
//       messages.push({
//         role:"user",
//         content:prompt
//       });
//       setData(messages);
//       setLoading(true);
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
//   messages.push({
//     role:"ai",
//     content:response.text
//   });
//   setData(messages)
//   console.log(response.text);
// }

//   return (
//     <div>
//       <Navbar />
//       <div className="screens">
//         {
//           screen === 1 ?
        
//     <div className="screen-1 w-screen  h-[60vh] px-[150px] flex items-center justify-center flex-col ">
//       <h3 className='text-[30px] font-[700] '> New<span className='text-red-500'> BOT</span></h3>
//     </div> :<>
//         <div className="screen-2 w-screen  h-[60vh] px-[150px] ">
//           {
//             data ? data.map((item,index)=>{
//               return (
//                 <>
//                 {
//                   item.role==="user" ?
//                   <div class="user bg-gray-800 w-fit max-w-[40vw] mb-3 ml-auto p-[15px]">
//                     <p className='text-[14px] text-gray'>User</p>
//                     <p>{item.content}</p>
//                   </div> :
//                   <div className="ai bg-gray-800 w-fit max-w-[40vw] mb-3 mr-[auto] p-[15px]">
//                       <p className='text-[14px] text-gray'>User</p>
//                     <p>{item.content}</p>
//                     </div>
                    
                  
//                 }
//                 </>
//               )
//             }): "No messages yet!"
//           }


//         </div>
//      </>
// }
//     </div>
    

//     <div className="inputbox px-[150px] h-[20vh]">
//     <div className="input w-[100%] mx-[auto] flex items-center gap-[10px] bg-zinc-800 rounded-lg text-neutral-950">
//       <input onkeyDown={(e)=>{
//         if(e.key==="Enter"){
      
        
//         getResponse();
//       }}
//       }onChange={(e)=>{setPrompt(e.target.value)}} value={prompt} type="text-black "placeholder='Enter Your Prompt!'
//       className='flex-1 p-[10px] rounded-lg outline-none text-[20px] font-[50px]'/>
//     </div>
//     </div>
//    </div>
   
    
//   )
// }
// export default App
import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { GoogleGenAI } from "@google/genai";
import { BeatLoader } from "react-spinners";
import Markdown from 'react-markdown'
import { RiComputerFill } from "react-icons/ri";
import { GiOpenBook, GiWhiteBook } from 'react-icons/gi';
import { FaBloggerB } from 'react-icons/fa';

const App = () => {
  const [screen, setScreen] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const ai = new GoogleGenAI({ apiKey: "AIzaSyCOVVlelE4ZkDBScJ1TiT50JNsTJrWIlKw" });
  let messages = [
    

  ];

  const [data, setData] = useState(messages);
  async function getResponse() {

    if (prompt === "") {
      alert("Please enter a prompt!");
      return;
    }

    setData(prevData => [...prevData, { role: "user", content: prompt }])

    setScreen(2);

    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    setData(prevData => [...prevData, { role: "ai", content: response.text }])

    setPrompt("");
    console.log(messages)
    setLoading(false);
  }

  return (
    <div>
      <Navbar />

      <div className="screens">
        {
          screen === 1 ?
            <div className="screen-1 w-screen h-[65vh] px-[150px] flex items-center justify-center flex-col">
              <h3 className='!text-[40px] font-[700]'>My<span className='text-white-500'>Bot</span></h3>
              <div className="flex mt-5 items-center gap-[15px]">
                <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><RiComputerFill/></i>
                 <p className='mt-3'>Create a website using html css and js.</p>
                </div>
                <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><GiWhiteBook/></i>
                 <p className='mt-3'>Write a book for me. topic is coding.</p>
                </div>
                <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><GiOpenBook/></i>
                 <p className='mt-3'>Tell me a commedy story.</p>
                </div>
                <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><FaBloggerB/></i>
                 <p className='mt-3'>Create a blog for me topic is web dev.</p>
                </div>
              </div>
            </div> : <>
              <div className="screen-2 overflow-y-auto w-screen h-[70vh] px-[150px]">
                {
                  data ? data.map((item, index) => {
                    return (
                      <>
                        {
                          item.role === "user" ?
                            <div className="user bg-gray-800 w-fit max-w-[40vw] mb-5 ml-[auto] p-[15px]">
                              <p className='text-[14px] text-[gray]'>User</p>
                              <p>{item.content}</p>
                            </div> :
                            <div className="ai bg-gray-800 w-fit max-w-[40vw] mb-5 mr-[auto] p-[15px]">
                              <p className='text-[14px] text-[gray]'>MyBot</p>
                              <Markdown>
                                {item.content}
                              </Markdown>
                            </div>
                        }
                      </>
                    )
                  }) : "No Messages Yet!"
                }
                {
                  loading ?
                    <div className="loader"><BeatLoader color='#fff' /></div> : ""
                }
              </div>
            </>
        }

      </div>

      <div className="inputBox px-[150px] h-[15vh] pt-3">
        <div className="input w-[90%] mx-[auto] flex items-center gap-[10px] bg-zinc-800 rounded-lg">
          <input onKeyDown={(e) => {
            if (e.key === "Enter") {
              getResponse();
            }
          }} onChange={(e) => { setPrompt(e.target.value) }} value={prompt} type="text" placeholder='Enter your prompt!' className='flex-1 bg-transparent rounded-lg p-[15px] outline-none text-[18px] font-[500]' />
        </div>
        <p className='text-[gray] text-center mt-3'>BotGPT can make mistakes! cross check it.</p>
      </div>
    </div>
  )
}

export default App