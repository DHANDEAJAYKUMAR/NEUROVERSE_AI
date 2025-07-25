import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, PlayCircle, X } from 'lucide-react'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <div className='fixed -top-10 z-50 w-full backdrop-blur-2xl flex justify-between items-center cursor-pointer py-3 px-4 sm:px-20 xl:px-32'>
        <img
          src={assets.logo}
          alt="Logo"
          className='w-32 sm:w-44'
          onClick={() => navigate('/')}
        />

        <div className='flex items-center gap-4'>
          <button
            onClick={() => setShowVideo(true)}
            className='flex items-center gap-2 text-sm bg-transparent border border-primary text-primary px-6 py-2.5 rounded-full hover:bg-primary hover:text-white transition'
          >
            <PlayCircle className='w-4 h-4' />
            Watch Demo
          </button>

          {
            user ? (
              <div className='[&>button]:shadow-none [&>button]:outline-none [&>button]:ring-0'>
                <UserButton />
              </div>
            ) : (
              <button
                onClick={openSignIn}
                className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
              >
                Get started <ArrowRight className='w-4 h-4' />
              </button>
            )
          }
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 text-white z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Embedded Google Drive Video using iframe */}
            <iframe
              src="https://drive.google.com/file/d/1XCuUwn24CenQydvDWCmekKhsERpMIKEd/preview"
              allow="autoplay"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
