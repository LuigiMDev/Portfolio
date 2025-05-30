import React from 'react'

const BackgroundVideo = () => {
  return (
    <div className='absolute inset-0 bg-black overflow-hidden w-screen h-screen -z-1'>
        <video src="/bg_loop.mp4" className='object-cover w-full h-full' autoPlay loop muted></video>
    </div>
  )
}

export default BackgroundVideo