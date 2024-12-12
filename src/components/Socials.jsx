import {FaGithub, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'
import Link from 'next/link'

const socials =[
    {icon: <FaGithub />, path: "https://www.github.com/Nwebi"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedIn.com/in/ebi-daniel-b6a10616b"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/techy_hand"},
    {icon: <FaTwitter />, path: "https://www.x.com/ebidaniel11"},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials