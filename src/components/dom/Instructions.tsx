import React from 'react'

const Instructions: React.FC = () => {
  return (
    <div
      className='absolute max-w-lg px-6 py-8 text-sm bg-zinc-800 rounded-lg shadow-xl md:text-base top-16 left-1/2 transform -translate-x-1/2'
      style={{ maxWidth: 'calc(100%)' }}>
      <div className='tracking-wider'>
        <p className='mb-4 md:mb-6 lg:mb-8'>
          Welcome to my website! My name is Marc-Aurele, <span className='text-blue-300'>or Mark 👋</span>, and I am
          excited to share my passion for <span className='text-blue-200'>blockchain technology</span>,{' '}
          <span className='text-blue-200'>smart contract development</span>, and{' '}
          <span className='text-blue-200'>open-source tools</span> with you. 🤗
        </p>
        <p className='mb-4 md:mb-6 lg:mb-8'>
          As a <span className='text-blue-300'>Full-Stack Web3 & Solidity Engineer</span>, my goal is to empower
          developers to create decentralized applications and seamlessly integrate smart contracts into their projects
          through innovative solutions and tools. ⚙️
        </p>
        <p className='mb-4 md:mb-6 lg:mb-8'>
          I am a firm believer that blockchain technology has the potential to revolutionize the way we interact online
          and am dedicated to playing a role in its development. 🚀
        </p>
        <p className='mb-4 md:mb-6 lg:mb-8'>
          I possess extensive expertise in utilizing frameworks such as <span className='text-blue-300'>Hardhat</span>{' '}
          and <span className='text-blue-300'>Foundry</span> for smart contract development and have built multiple
          open-source tools to make the process more approachable for developers. I am constantly exploring new
          technologies and frameworks to stay ahead of the curve and bring fresh ideas to the table. 💡
        </p>
        <p className='mb-4 md:mb-6 lg:mb-8'>
          In addition to my technical skills, I am dedicated to sharing my knowledge and helping other developers. I am
          always willing to lend a hand to those who are stuck on a problem and am open to collaborating and
          contributing to the ecosystem. Teaching and mentoring are my passions, and I believe that by helping others,
          we can all grow and advance together. 🤝
        </p>
        <p className='mb-4 md:mb-6 lg:mb-8'>
          Thank you for visiting my website, and please do not hesitate to reach out if you have any questions or if you
          want to collaborate on a project. I am looking forward to connecting and working together to advance the
          blockchain ecosystem. 💎🙌
        </p>
        <p className='mb-4 md:mb-6 lg:mb-8'>
          Click on the <span className='text-blue-300'>dynamic points</span> to learn more about me and my work. 🤓
        </p>
      </div>
    </div>
  )
}

export default Instructions
