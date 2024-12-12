"use client"


import { FaHtml5, FaReact, FaNodeJs, FaFigma, FaJs, FaPython, FaCss3, FaGithub } from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
  
    title: "About me",
    description: "I am passionate about tech, precisely on software development",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ebi Daniel"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 813 193 0371"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "X.com",
      fieldValue: "ebidaniel11"
    },
    {
      fieldName: "Email",
      fieldValue: "ebidaniel427@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English"
    },
  ]
  
}

const experience =  {
    icon: "/assets/rusume/badge.svg",
    title: "My experience",
    description: "Continuous growth and development path",
    items: [
      {
        company: "CodeJika ",
        Position: "Coding instructor",
        Duration: "2022 - 2023"
      },
      {
        company: "Applinet Technologies ",
        Position: "Full Stack Developer",
        Duration: "2022 - Present"
      },
      {
        company: "KodeHouse ",
        Position: "Full Stack Developer",
        Duration: "2024 - Present"
      },
    ]
  }

const education =  {
    icon: "/assets/rusume/cap.svg",
    title: "My Education",
    description: "Continuous growth and development path",
    items: [
      {
        Institution: "Federal University of Technology Owerri ",
        Degree: "Bachelor of Technology",
        Course: "Statistics",
        Duration: "2015 - 2022"
      },
      {
        Institution: "Federal Polytechnic Nekede Owerri ",
        Degree: "Ordinary National Diploma",
        Course: "Computer Science",
        Duration: "2013 - 2015"
      },
      {
        Institution: "ALX ",
        Degree: "Data Scientist",
        Course: "Data Science",
        Duration: "2023 - 2024"
      },
      {
        Institution: "VAYU GROUP ",
        Degree: "Certificate of Completion for 4 months Networking Basics",
        Course: "Networking",
        Duration: "2023 - 2024"
      },
    ]
  }
const skills =  {
    title: "My Skills",
    description: "Continuous growth and development path",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
     
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwindcss",
      },
    
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
      {
        icon: <FaPython />,
        name: "python",
      },
      {
        icon: <FaGithub />,
        name: "github",
      },
    ]
  }




const Resume = () => {
  return (
    <motion.div initial={{
      opacity:1}}
      animate={{delay: 2.4, 
        duration: 0.4, ease: "easeIn"
      }} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'
      >
        <div className="container mx-auto">
          <Tabs defaultValue='experience' 
            className='flex flex-col xl:flex-row gap-[60px]'>
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience"> Experience</TabsTrigger>
                <TabsTrigger value="education"> Education </TabsTrigger>
                <TabsTrigger value="skills"> Skills</TabsTrigger>
                <TabsTrigger value="about"> About me</TabsTrigger>
              </TabsList>
              <div className='min-h-[70vh] w-full' >
                <TabsContent value="experience" className="w-full" >
                  <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                    <h3 className='text-4xl font-bold '> {experience.title} </h3>
                      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{experience.description}</p>
                      <ScrollArea className="h-[400px] ">
                          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                            {experience.items.map((item, index) => (
                              <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                               <span className='text-accent'> {item.Duration}</span>
                               <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'> {item.Position}</h3>
                               <div className='flex items-center gap-3'>
                                  <span className='w-[6px] h-[6px] rounded-full bg-accent  '></span>
                                  <p className='text-white/60'> {item.company}</p>
                               </div>
                              </li>
                            ))}
                          </ul>
                      </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="w-full" >
                <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                    <h3 className='text-4xl font-bold '> {education.title} </h3>
                      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{education.description}</p>
                      <ScrollArea className="h-[400px] ">
                          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                            {education.items.map((item, index) => (
                              <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                               <span className='text-accent'> {item.Duration}</span>
                               <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'> {item.Degree}</h3>
                               <div className='flex items-center gap-3'>
                                  <span className='w-[6px] h-[6px] rounded-full bg-accent  '></span>
                                  <p className='text-white/60'> {item.Institution}</p>
                                  <p className='text-white/60'> - {item.Course}</p>
                               </div>
                              </li>
                            ))}
                          </ul>
                      </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="skills" className="w-full h-full" >
                  <div className="flex flex-col gap-[30px] ">
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'> 
                          <h3 className='text-4xl font-bold'>{skills.title}</h3>
                          <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                    </div>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                      {skills.skillList.map((skill, index) => (
                        <li key={index} >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="about" className="w-full text-center xl:text-left" >
                  <div className='flex flex-col gap-[30px] '>
                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 '>
                      {about.info.map((item, index) => (
                        <li key={index} className='flex items-center justify-center gap-4 xl:justify-start'>
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </div>
          </Tabs>
        </div>

    </motion.div>
  )
}

export default Resume