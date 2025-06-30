import React from 'react'
import assets, { messagesDummyData } from '../assets/assets'

const ChatContainer = ({ selectedUser, setSelectedUser, currentUser }) => {
    return selectedUser ? (
        <div className='h-full overflow-scroll relative backdrop-blur-lg'>
            {/* ------------header------------- */}
            <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
                <img src={selectedUser?.profilePic || assets.avatar_icon} alt="" className="w-8 rounded-full" />
                <p className="flex-1 text-lg text-white flex items-center gap-2">
                    Martin Johnson
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </p>
                <img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} className='md:hidden max-w-7' />
                <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' />
            </div>
            {/* ------------chat area------------- */}
            <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
                {messagesDummyData.map((msg, index) => {
                    const isSender = msg.senderId === '680f50e4f10f3cd28382ecf9'; // apna userId yahan set karein
                    // Format time (hh:mm AM/PM)
                    const time = new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                    return (
                        <div
                            key={index}
                            className={`flex items-end gap-2 mb-2 ${isSender ? 'justify-end' : 'justify-start'}`}
                        >
                            {/* Avatar and time for receiver */}
                            {!isSender && (
                                <div className="flex flex-col items-center min-w-[40px]">
                                    <img
                                        src={selectedUser?.profilePic || assets.avatar_icon}
                                        className="w-7 rounded-full"
                                        alt=""
                                    />
                                    <span className="text-[10px] text-gray-400 mt-1">{time}</span>
                                </div>
                            )}
                            {/* Message bubble */}
                            {msg.image ? (
                                <img
                                    src={msg.image}
                                    className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
                                    alt=""
                                />
                            ) : (
                                <p
                                    className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all ${
                                        isSender
                                            ? 'bg-violet-500/30 text-white rounded-br-none'
                                            : 'bg-[#282142] text-white rounded-bl-none'
                                    }`}
                                >
                                    {msg.text}
                                </p>
                            )}
                            {/* Avatar and time for sender */}
                            {isSender && (
                                <div className="flex flex-col items-center min-w-[40px]">
                                    <img
                                        src={currentUser?.profilePic || assets.avatar_icon} // Yahan apni image ka src lagayein, agar hai toh
                                        className="w-7 rounded-full"
                                        alt=""
                                    />
                                    <span className="text-[10px] text-gray-400 mt-1">{time}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {/*-----------Bottom area----------------- */}
            <div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3'>
                <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full'>
                    <input type='text' placeholder='Send a message' className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400'/>
                    <input type='file' id='image' accept='image/png, image/jpeg, image/jpg' hidden/>
                    <label htmlFor='image'>
                        <img src={assets.gallery_icon} className='w-5 mr-2 cursor-pointer'/>
                    </label>
                </div>
                <img src={assets.send_button} className='w-7 cursor-pointer'/>
            </div>

        </div>
    ) : (
        <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
            <img src={assets.logo_icon} alt="" className="max-w-16" />
            <p className='text-lg font-medium text-white'>
                Chat anytime, anywhere.
            </p>
        </div>
    )
}

export default ChatContainer