import React from 'react'
import { useState } from "react";
import './InboxChat.css'


const InboxChat = (props) => {

    const [isChatModalShown, setIsChatModalShown] = useState(false);

    const [isChatServicesExpanded, setIsChatServicesExpanded] = useState(false);

    const handleShowChat = () => {

        setIsChatModalShown(true);
        setTimeout(() => {
      setIsChatServicesExpanded(true);
        }, 500);
    };

    const handleCloseChat = () => {
        setTimeout(() => {
        setIsChatServicesExpanded(false);
        }, 820);
        setIsChatModalShown(false);
        setTimeout(() => {
        setIsChatServicesExpanded(false);
        }, 500);
    };
  return (
   
                    <div className="fixed bottom-0 right-0 flex flex-col items-end ml-6 w-full">
    <div className="chat-modal show  mr-5 flex flex-col mb-5 shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4">
      
      <div className="close-chat bg-red-500 hover:bg-red-600 text-white mb-1 w-10 flex justify-center items-center px-2 py-1 rounded self-end cursor-pointer">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
          <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
      </div>
    
      <div className="flex justify-between items-center text-white p-2 bg-green-500 border shadow-lg mr-5 w-full">
        <div className="flex items-center">
          <img src="https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png" alt="picture" className="rounded-full w-8 h-8 mr-1"/>
          <h2 className="font-semibold tracking-wider">HartDev</h2>
        </div>
        <div className="flex items-center justify-center">
          <small className="mr-1">online</small>
          <div className="rounded-full w-2 h-2 bg-white"></div>
        </div>
      </div>
      
      <div className="flex flex-col bg-gray-200 px-2 chat-services expand overflow-auto">
        <div className="chat bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3">
          apa ada yang bisa saya bantu ?
        </div>
        <div className="message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ratione!
        </div>
        <div className="message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3">
          Lorem, ipsum.
        </div>
        <div className="message bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3">
          Lorem ipsum dolor sit amet akom khra khto gfjdjvjf choftha jaya gotlk la okay hhhh khra khto khro ljro hhhhhg ggggghhhh hhhhh.
        </div>
        <div className="message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quod.
        </div>
        <div className="message bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3">
          Lorem, ipsum dolor.
        </div>
        
      </div>
      
      <div className="relative bg-white">
        <input type="text" name="message" placeholder="ketik pesan anda"
              className="pl-4 pr-16 py-2 border border-green-500 focus:outline-none w-full"/>
          <button className="absolute right-0 bottom-0 text-green-600 bg-white  hover:text-green-500 m-1 px-3 py-1 w-auto transistion-color duration-100 focus:outline-none">Send</button>
      </div>
    </div>
    <div className="show-chat hidden mx-10 mb-6 mt-4 text-green-500 hover:text-green-600 flex justify-center items-center cursor-pointer ">
      <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-chat-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
      </svg>
    </div>
  </div>
  )
}

export default InboxChat