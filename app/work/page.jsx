"use client"

import { motion } from "framer-motion"
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project',
    description: 'User dashboard with firebase authentication',
    stack: [
      {
        name: "React.js"
      },
      {
        name: "Tailwind Css"
      },
      {
        name: "Firebase"
      },
    ],
    image: '/assets/dashboard.png',
    live: "https://firebase-signup-app.vercel.app/",
    github: "https://github.com/Nwebi/firebase-signup-login",
  },
  {
    num: '02',
    category: 'Full stack',
    title: 'project 2',
    description: 'Country theme switcher from Api',
    stack: [
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      },
      {
        name: "Javascript"
      },
    ],
    image: '/assets/country.png',
    live: "https://country-theme-switcher.vercel.app/",
    github: "https://github.com/Nwebi/country-switcher-code",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'Architect Landing Page',
    stack: [
      {
        name: "React.js"
      },
      {
        name: "Css 3"
      },
      
    ],
    image: '/assets/archi.png',
    live: "https://architect-website-app.vercel.app/",
    github: "https://github.com/Nwebi/Architect-webapp",
  },
  {
    num: '04',
    category: 'frontend',
    title: 'project 4',
    description: 'E-Commerce with firebase, Redux and Tailwind',
    stack: [
      {
        name: "React.js"
      },
      {
        name: "Firebase"
      },
      {
        name: "Redux"
      },
      {
        name: "Tailwind Css"
      },
      
    ],
    image: '/assets/Ecom.png',
    live: "https://e-commerce-mu-lake.vercel.app/",
    github: "https://github.com/Nwebi/commerce",
  },
  {
    num: '05',
    category: 'frontend',
    title: 'project 5',
    description: 'Nike Landing Page with Tailwind',
    stack: [
      {
        name: "React.js"
      },
      {
        name: "Tailwindcss"
      },
      
    ],
    image: '/assets/Nike.png',
    live: "https://nike-web-shop.vercel.app/",
    github: "https://github.com/Nwebi/Nike-page",
  },
  {
    num: '06',
    category: 'frontend',
    title: 'project 6',
    description: 'Full stack Todo App with custom Api',
    stack: [
      {
        name: "Next.js"
      },
      {
        name: "Tailwindcss"
      }, 
      
    ],
    image: '/assets/todo app.png',
    live: "https://next-todo-with-custom-api.vercel.app/",
    github: "https://github.com/Nwebi/Next-Todo-Custom-Api",
  },
  
  {
    num: '07',
    category: 'frontend',
    title: 'project 7',
    description: 'Real Estate website',
    stack: [
      {
        name: "React.js"
      },
      {
        name: "Tailwindcss"
      },
      
    ],
    image: '/assets/estate.png',
    live: "https://real-estate-webap.netlify.app/",
    github: "https://real-estate-webap.netlify.app/",
  },
  {
    num: '08',
    category: 'frontend',
    title: 'project 8',
    description: 'Gyming Website',
    stack: [
      {
        name: "Html 5"
      },
      {
        name: "CSS 3"
      },   
      
    ],
    image: '/assets/gym.png',
    live: "https://gymster-web.netlify.app/",
    github: "https://gymster-web.netlify.app/",
  },
  {
    num: '09',
    category: 'frontend',
    title: 'project 9',
    description: 'Organic webshop',
    stack: [
      {
        name: "Html 5"
      },
      {
        name: "CSS 3"
      },   
      
    ],
    image: '/assets/organic.png',
    live: "https://organik-foods.netlify.app/ ",
    github: "https://organik-foods.netlify.app/ ",
  },
  {
    num: '10',
    category: 'frontend',
    title: 'project 10',
    description: 'A team work with fellow Kodecamp finalists',
    stack: [
      {
        name: "React.js"
      },
      {
        name: "Tailwindcss"
      },   
      
    ],
    image: '/assets/farmlink.jpg',
    live: "https://farmlink-fe-int.vercel.app/ ",
    github: "https://organik-foods.netlify.app/ ",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
            <div className="w-full xl:w-[50%] xl:h-[440px] flex flex-col xl:justify-between order-2 
            xl:order-none">

            <div className="flex flex-col gap=[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num} </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent 
              transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60 ">{project.description}</p>
              <ul className="flex gap-4">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
              </ul>

              <div className="border border-white/20 mt-8 mb-8"></div>

                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip >
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip >
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
               </div>   
            </div>

            <div className="w-full xl:w-[50%] ">
              <Swiper spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
                  {projects.map((project, index) => (
                    <SwiperSlide key={index} className="w-full ">
                      <div className="group h-[360px] relative flex justify-center items-center bg-primary">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                        <div className="relative w-full h-full">
                            <Image src={project.image} className="object-contain" alt="img" fill />

                           
                        </div>
                      </div>
                      <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                       btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all "
                       />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default Work