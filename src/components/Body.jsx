import React, { useState } from 'react'
import companyLogo from '../assets/company_logo.png';
import { FaLongArrowAltLeft, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { IoGlobeOutline, IoCardOutline } from 'react-icons/io5';
import { Document, Page } from '@react-pdf/renderer';
import pdfFile from '../assets/pitch.pdf';
import pitch1 from '../assets/pitch_page-0001.jpg'
import pitch2 from '../assets/pitch_page-0002.jpg'
import pitch3 from '../assets/pitch_page-0003.jpg'
import pitch4 from '../assets/pitch_page-0004.jpg'
import pitch5 from '../assets/pitch_page-0005.jpg'
import pitch6 from '../assets/pitch_page-0006.jpg'
import pitch7 from '../assets/pitch_page-0007.jpg'
import pitch8 from '../assets/pitch_page-0008.jpg'
import pitch9 from '../assets/pitch_page-0009.jpg'
import pitch10 from '../assets/pitch_page-0010.jpg'
import { ImageList, ImageListItem } from '@mui/material';
import noImg from '../assets/145.svg';

const imgArr = [pitch1, pitch2, pitch3, pitch4, pitch5, pitch6, pitch7, pitch8, pitch9, pitch10]


const Body = () => {
  const [companyName, setCompanyName] = useState('CosIQ')
  const [companyLocation, setCompanyLocation] = useState('Bangalore, India')
  const [companyDesc, setCompanyDesc] = useState('Molecular skincare brand focussed on safe & visible results')
  const [companySite, setCompanySite] = useState('https://www.cosiq.in/')
  const [companyCard, setCompanyCard] = useState('XYZABC123')

  return (<>
    <div className='mx-[5rem] my-[2rem]'>
      <div className='w-max back-button flex justify-center items-center gap-[1rem] text-xl text-gray-600 '>
        <FaLongArrowAltLeft className='' />
        Back
      </div>

      <div className='body_section my-[1rem]'>

        <TitleSection companyLogo={companyLogo} companyName={companyName} companyLocation={companyLocation} />

        <hr className='my-3 w-[99.99999999%] m-auto' />

        <HashTags />

        <Description companyDesc={companyDesc} companySite={companySite} companyCard={companyCard} />

        <HeroSection />

        <InformationSection />

      </div>
    </div>
  </>
  )
}

export default Body;

function InformationSection() {
  const sections = ["PITCH", "DETAILS", "DISCUSSION", "UPDATES"]
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <div className='w-[100%] border-2 border-gray-50 bg-yellow-200 p-3'>
        <div className='flex items-center justify-start gap-3 w-max'>
          {
            sections.map((section, index) => {
              return <span key={index} className={`text-sm font-bold cursor-pointer p-2 border-2 rounded-xl ${index === currentSection ? 'bg-black' : 'bg-white'} ${index === currentSection ? 'text-white' : 'text-black'} duration-200 transition-all`} onClick={() => setCurrentSection(index)}>{section}</span>
            })
          }
        </div>

      </div>
      <div className='mt-3 shero_section border-2'>
        <div className="p-3">
          {
            currentSection === 0 ? <PitchSection /> : currentSection === 1 ? <DetailsSection /> : currentSection === 2 ? <DiscussionSection /> : <UpdatesSection />
          }
        </div>
        <InformationSubSection />
      </div>
    </>
  )
}

function InformationSubSection() {
  const items = [
    {
      amount: 5000,
      rewards: ["Community access & benefits"],
      termsAndConditions: "Community participants offer CSOP",
      availability: "Limited (38 of 100 left)",
    },
    {
      amount: 10000,
      rewards: ["Community access & involvement", "Be part of our growth journey"],
      termsAndConditions: "Community participants offer CSOP",
      availability: "Limited (73 of 100 left)",
    },
    {
      amount: 25000,
      rewards: ["Community access & benefits", "Special mention in our community group"],
      termsAndConditions: "Community participants offer CSOP",
      availability: "Limited (43 of 50 left)",
    },
    {
      amount: 50000,
      rewards: ["Community perks & notable mention", "Community access & benefits"],
      termsAndConditions: "Community participants offer CSOP",
      availability: "Limited (17 of 20 left)",
    },
    {
      amount: 80000,
      rewards: ["All of the above", "early access to our newly launched product for feedback"],
      termsAndConditions: "Community participants offer CSOP",
      availability: "Limited (5 of 10 left)",
    },
    {
      amount: 90000,
      rewards: ["All of the above", "Receive a fresh coupon each quarter"],
      termsAndConditions: "Community participants offer CSOP",
      availability: "Limited (3 of 5 left)",
    },
  ];
  // Displaying the updated JavaScript object with rewards as arrays of strings

  return <div className='p-3'>
    <div className=''>
      <h1 className='text-2xl font-bold mb-3'>Documents</h1>
      <div className='border-2 w-[100%] p-5'>
        <a className="ng-binding hover:text-blue-800" ng-href="https://api.pepcorns.com/clientassets/icon1677255822062.zip" target="_blank" download="yourpdf.pdf" href="https://api.pepcorns.com/clientassets/icon1677255822062.zip">CosIQ.zip</a>
      </div>
    </div>

    <div className='flex items-center justify-start flex-col gap-5 my-[2rem]'>
      {/* <div className='w-[99%] border-2 p-3'>
        <h1 className='text-4xl font-bold pb-[1rem] mb-[1rem] border-b-2'>&#x20b9;10000</h1>

        <div className="mb-3 pl-3">
          <h2 className='text-xl font-bold'>REWARDS</h2>
          <li className=''>List Manju</li>
          <li className=''>Zohra Jabeen</li>
        </div>

        <div className="pb-[1rem] border-b-2 mb-[1rem] pl-3">
          <h2 className='text-xl font-bold'>TERMS AND CONDITIONS</h2>
          <p className=''>Terms & Condtions</p>
        </div>

        <div className='flex justify-center items-center w-[100%]'>
          <button className='text-center p-2 px-3 w-[80%] border-2 border-blue-800 bg-blue-800 text-white'>&#x20b9;10000</button>
        </div>
      </div> */}

      {
        items.map((item, index) => {
          return (<div key={index} className='w-[99%] border-2 p-3'>
            <h1 className='text-4xl font-bold pb-[1rem] mb-[1rem] border-b-2'>&#x20b9;{item.amount}</h1>

            <div className="mb-3 pl-3">
              <h2 className='text-xl font-bold'>REWARDS</h2>
              {
                item.rewards.map((reward, index) => {
                  return <li key={index} className=''>{reward}</li>
                })
              }
            </div>

            <div className="pb-[1rem] border-b-2 mb-[1rem] pl-3">
              <h2 className='text-xl font-bold'>TERMS AND CONDITIONS</h2>
              <p className=''>{item.termsAndConditions}</p>
            </div>

            <div className='flex justify-center items-center w-[100%]'>
              <button className='text-center p-2 px-3 w-[80%] border-2 border-blue-800 bg-blue-800 text-white'>&#x20b9;{item.amount}</button>
            </div>

            <div className="flex justify-center items-center w-[100%] mt-5 gap-3">
              <span className="font-bold">CSOP</span> <span>{item.availability}</span>
            </div>
          </div>);
        })
      }
    </div>
  </div>
}

function PitchSection() {
  return <div className=''>
    <h1 className='text-2xl font-bold mb-3'>Pitch</h1>

    <div className='flex items-center justify-center gap-5'>
      <ImageList className="h-[100%]" cols={1}>
        {imgArr.map((item, index) => (
          <ImageListItem key={item.img} className="z-[-1] my-3 ">
            <img
              src={item}
              srcSet={item}
              alt={`item_${index}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  </div>
}

function DetailsSection() {
  const teamArr = [
    {
      profImage: "https://api.pepcorns.com/clientassets/icon1677256844809.png",
      name: "Angad Talwar",
      position: "Co-Founder",
      linkedIn: "https://www.linkedin.com/in/angadtalwar/",
      twitter: "https://twitter.com/angadtalwar",
      instagram: "https://www.instagram.com/angadtalwar/",
    },
    {
      profImage: "https://api.pepcorns.com/clientassets/icon1677257576444.png",
      name: "Kanika Talwar",
      position: "Co-Founder",
      linkedIn: "https://www.linkedin.com/in/kanika-vats-383aa011/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    }
  ]

  return <div className=''>
    <h1 className='text-2xl font-bold mb-5'>Details</h1>

    <div className='grid grid-cols-2 place-items-center my-3'>
      {
        teamArr.map((item, index) => {
          return (
            <div className='grid place-items-center gap-2'>
              <img className="rounded-md w-[80%] ng-scope " alt={item.name} src={item.profImage} />
              <h2 className='text-xl font-bold mt-5'>{item.name}</h2>
              <h3 className='text-md'>{item.position}</h3>

              <div className='flex items-center justify-center gap-5 mt-5'>
                <a href={item.linkedIn}><AiFillLinkedin className='text-xl hover:text-black text-gray-500 transition-all duration-200' /></a>
                <a href={item.twitter}><FaTwitter className='text-xl hover:text-black text-gray-500 transition-all duration-200' /></a>
                <a href={item.instagram}><AiFillInstagram className='text-xl hover:text-black text-gray-500 transition-all duration-200' /></a>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
}

function DiscussionSection() {
  return <div className=''>
    <h1 className='text-2xl font-bold mb-3'>Discussions</h1>

    <div className='flex flex-col items-center justify-center gap-5 w-[100%]'>
      <img src={noImg} />
      No Discussions Currently. Be the first one to comment.
    </div>
  </div>
}

function UpdatesSection() {
  return <div className=''>
    <h1 className='text-2xl font-bold mb-3'>Updates</h1>
    <div className='flex flex-col items-center justify-center gap-5 w-[100%]'>
      <img src={noImg} />
      No Updates Currently.
    </div>
  </div>
}




function HeroSection({ }) {
  const [amount, setAmount] = useState('14, 55, 000')
  const [percentOfInvestment, setPercentOfInvestment] = useState('5%')

  const [investors, setInvestors] = useState('5')

  return <div className='hero_section border-2 border-r-0'>
    <iframe width="640" height="390" src="https://www.youtube.com/embed/kFII05-bhGU" title="CosIQ for Pepcorns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100'>
      <span className='mb-2'>Unable to view the video? <a href='https://www.youtube.com/embed/kFII05-bhGU' className='text-blue-700'>Click here</a></span> <br />
    </iframe>

    <div className='m-auto w-[70%]'>
      <div className='mb-3 border-b-2 border-gray-400 pb-2'>
        <h2 className='text-xl font-bold'>&#x20b9;{amount}</h2>
        <span className='text-sm text-gray'>{percentOfInvestment} of minimum goal raised</span>
      </div>
      <div className='mb-3 border-b-2 border-gray-400 pb-2'>
        <h2 className='text-xl font-bold'> {investors} </h2>
        <span className='text-sm text-gray'>Total Investors</span>
      </div>
      <button className='mb-3 w-[100%] text-center text-sm p-2 rounded-md bg-black text-white '>Login to Invest</button>
      <br />
      <button className='mb-3 w-[100%] text-center text-sm p-2 rounded-md bg-red-600 text-white '>Invest as a Guest</button>
      <div className='w-[100%] text-center'>&#x20b9;1000 Minimum Investment</div>
      {/* <div className='flex flex-row items-center justify-start'>
      </div> */}
    </div>

  </div>
}

function HashTags() {
  // We can easily introduce the 'hashtags' array here.
  const hashtags = [
    "AI", "BEAUTY & PERSONAL CARE", "SHARK TANK", "FMCG"
  ]

  return <div className='hashtags flex items-center gap-1 overflow-x-scroll'>
    {
      hashtags.map((hashtag, index) => {
        return <span key={index} className=' text-xs px-2 py-1 border-2 border-gray-400 rounded-md text-gray-400 hover:text-black hover:border-black duration-200 transition-all cursor-pointer'># {hashtag}</span>
      })
    }
  </div>;
}

function Description({ companyDesc, companySite, companyCard }) {
  return (<div className='description my-5'>
    <h2 className='text-3xl font-bold '>{companyDesc}</h2>
    <div className='flex items-center justify-start gap-5 text-gray-400 my-1'>
      <div className='flex items-center justify-normal gap-1 hover:text-black duration-200 transition-all'>
        <IoGlobeOutline className='text-2xl' />
        {companySite}
      </div>
      <div className='flex items-center justify-normal gap-1 hover:text-black duration-200 transition-all'>
        <IoCardOutline className='text-2xl' />
        {companyCard}
      </div>
    </div>
  </div>);
}

function TitleSection({ companyLogo, companyName, companyLocation }) {
  return (<div className='title_section flex items-center gap-[1rem] text-sm'>
    <div className='flex items-center w-[3%]'>
      <img src={companyLogo} alt='company logo' className='w-[100%] h-max rounded-2xl' />
    </div>

    <div className='flex-grow'>
      <h1 className='text-3xl font-open_sans font-extrabold'>{companyName}</h1>
      <h4 className='text-sm'>{companyLocation}</h4>
    </div>

    <div className='save_share flex items-center justify-between p-2 gap-5'>
      <button className='p-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white duration-200 transition-all'>Save</button>
      <button className='p-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white duration-200 transition-all'>Share</button>
    </div>
  </div>);
}
