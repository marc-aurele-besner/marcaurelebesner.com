import React from 'react'
import Image from 'next/image'

const Instructions: React.FC = () => {
  return (
    <div
      className='absolute max-w-lg px-10 py-8 text-sm bg-zinc-800 rounded-lg shadow-xl md:text-base top-16 left-1/2 transform -translate-x-1/2'
      style={{ maxWidth: 'calc(100% - 28px)' }}>
      <div className='tracking-wider'>
        <p className='hidden mb-8 md:block'>
          My website is currently undergoing construction, which means that the content that is currently available is
          quite limited. However, I assure you that this is only temporary, as I am actively working on expanding and
          improving the content on the website. I apologize for any inconvenience this may cause and appreciate your
          understanding as I strive to make the website as informative and useful as possible for all visitors. I hope
          to have the website fully updated and improved in a timely manner.
        </p>
        <p className='hidden mb-8 md:block'>You can reach me on different social media:</p>
        <p className='hidden mb-8 md:block'>
          <div className='flex'>
            <div className='flex items-center mr-4'>
              <a href='https://www.linkedin.com/in/marc-aurele-besner/'>
                <Image
                  src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white'
                  alt='LinkedIn'
                  width={120}
                  height={20}
                />
              </a>
            </div>
            <div className='flex items-center mr-4'>
              <a href='https://www.twitter.com/marcaureleb'>
                <Image
                  src='https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white'
                  alt='Twitter'
                  width={120}
                  height={20}
                />
              </a>
            </div>
            <div className='flex items-center mr-4'>
              <a href='https://discordapp.com/users/marcus#5693'>
                <Image
                  src='https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white'
                  alt='Discord'
                  width={120}
                  height={20}
                />
              </a>
            </div>
          </div>
        </p>
        <p className='hidden mb-8 md:block'>
          Thank you for visiting my website, and please do not hesitate to reach out if you have any questions or if you
          want to collaborate on a project. I am looking forward to connecting and working together to advance the
          blockchain ecosystem. 💎🙌
        </p>
        <p className='hidden mb-8 md:block'>
          Click on the <span className='text-blue-300'>dynamic points</span> to return to the homepage 🤓
        </p>
      </div>
    </div>
  )
}

export default Instructions
