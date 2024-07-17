import Image from 'next/image';

const ChatPage = () => {
  return (
    <div className="bg-[#292929] text-white min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-[20%] bg-[#1E1E1E] p-4 flex flex-col rounded-tr-[40px] rounded-br-[40px]">
        <div className="mb-6">
        <div className="relative mt-2">
        <input value="Search" type='text' className="bg-transparent border-[1.2px] border-zinc-800 rounded-full p-2 w-[95%] text-xs text-zinc-500 px-5 "/>
        <i className="ri-search-line text-zinc-600 absolute top-[5px] left-[210px]"></i>
      </div>
        </div>
        <div className="flex space-x-8 mb-6 justify-around">
          <button className="flex flex-col items-center text-[#c1c1c1] hover:text-white text-xs font-thin">
          <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 mb-[0.8px]' viewBox="0 0 26 26" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg>
            Chats
          </button>
          <button className="flex flex-col items-center text-[#c1c1c1] hover:text-white text-xs font-thin">
          <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 mb-[0.8px]' viewBox="0 0 26 26" fill="currentColor"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg>
            Groups
          </button>
        </div>
        <hr className='border-zinc-800 -mt-2 mb-4'/>
        {/* Chat list */}
        <div className="flex-grow overflow-y-auto">
          {/* Repeat this for each chat */}
          <div className="flex items-center mb-4">
            <Image src="/path-to-avatar.jpg" width={40} height={40} className="rounded-full mr-3" alt="User avatar" />
            <div>
              <div className="font-semibold">Allison</div>
              <div className="text-sm text-[#9A9A9A]">Goodnight, sleep well.</div>
            </div>
            <div className="ml-auto text-xs text-[#9A9A9A]">02:26</div>
          </div>
          {/* More chat items... */}
        </div>
        <div className="mt-4 flex items-center border-[0.4px] rounded-full p-1 border-zinc-500">
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-grow flex flex-col">
        <div className="flex-grow overflow-y-auto p-4">
          {/* Chat messages */}
          <div className="mb-4 text-right">
            <div className="bg-[#3A3A3A] inline-block rounded-lg p-2 max-w-md">
              Hey Marilyn, how's it going? Long time, no chat!
            </div>
            <div className="text-xs text-[#9A9A9A] mt-1">18:20</div>
          </div>
          <div className="mb-4">
            <div className="bg-[#3A3A3A] inline-block rounded-lg p-2 max-w-md">
              Hey Mehran! I know, it's been ages. I'm doing good, thanks! How about you?
            </div>
            <div className="text-xs text-[#9A9A9A] mt-1">18:30</div>
          </div>
          {/* More messages... */}
        </div>
        <div className="p-4">
          <div className="flex items-center bg-[#1E1E1E] rounded-full p-3">
            <input type="text" placeholder="Type a message" className="flex-grow bg-transparent outline-none" />
            <button className="ml-2 p-[0.5px]">
              <i className="ri-send-plane-fill text-[#9A9A9A]"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[22%] bg-[#1E1E1E]  flex flex-col rounded-tl-[40px] rounded-bl-[40px] p-4">
        <div className="text-center flex flex-col justify-center items-center mt-28 mb-3">
          <Image src="/backdrop.png" width={80} height={80} className="rounded-full mx-auto" alt="User avatar" />
          <div className="font-semibold text-lg">Marilyn</div>
        </div>
        <div className="flex justify-center space-x-6 mb-3"> 
          <button className="p-3 bg-[#292929] rounded-lg">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2ZM17 12.3587L21 15.1587V8.84131L17 11.6413V12.3587ZM3 6V18H15V6H3Z"></path></svg>
          </button>
          <button className="p-3 bg-[#292929] rounded-lg">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>
          </button>
        </div>
        

        <div className="space-y-3 mt-5 relative">
        <div className="space-y-2 flex justify-end items-end absolute right-0 top-0">
          <button className="p-2 bg-[#292929] rounded-lg text-sm"><i className="ri-pencil-line"></i></button>
        </div>
          <div className='mt-[2.5px]'>
            <div className="text-sm text-[#9A9A9A]">Bio</div>
            <div>Find joy in the ordinary :)</div>
          </div>
          <div>
            <div className="text-sm text-[#9A9A9A]">Phone Number</div>
            <div>+1 555 123 4567</div>
          </div>
          <div>
            <div className="text-sm text-[#9A9A9A]">Username</div>
            <div>@marilyn123</div>
          </div>
        </div>
    
        <div className="flex items-end border-[0.4px] rounded-full p-1 border-zinc-500 justify-end mt-[350px]">
        </div>
      </div>
    </div>
  );
};

export default ChatPage;



