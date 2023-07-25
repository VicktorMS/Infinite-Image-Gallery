import React from 'react'

const ImageCard = () => {
  return (
    <div className='w-full max-h-96'>
        <img src="https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixid=M3w0Nzk5OTB8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MDMwOTAzNXw&ixlib=rb-4.0.3" className='w-full rounded-lg drop-shadow-md'/>
        <div className=" p-2 h-14 flex items-center gap-2 bg-[#400c0c]">
            <img src="https://images.unsplash.com/profile-1678370727281-06fd78b1e434image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32" className='rounded-full drop-shadow-sm'/>
            <div>
                <p className='font-semibold text-md'>Susan G. Komen 3-Day</p>
                <p className='text-sm text-slate-500 font-medium'>@susangkomen3day</p>
            </div>
        </div>
    </div>
  )
}

export default ImageCard