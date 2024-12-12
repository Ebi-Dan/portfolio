"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"
import { useState } from 'react'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 813 193 0371"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ebidaniel427@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria"
  },
]

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstname = formValues.firstname ? '' : 'Firstname is required.';
    tempErrors.lastname = formValues.lastname ? '' : 'Lastname is required.';
    tempErrors.email = formValues.email ? '' : 'Email is required.';
    tempErrors.phone = formValues.phone ? '' : 'Phone number is required.';
    tempErrors.service = formValues.service ? '' : 'Please select a service.';
    tempErrors.message = formValues.message ? '' : 'Message is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleServiceChange = (value) => {
    setFormValues({ ...formValues, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage('Message sent successfully, call or email directly too!');
      setFormValues({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">Together we can achieve a lot</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formValues.firstname} onChange={handleChange} />
                {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}

                <Input type="text" name="lastname" placeholder="Lastname" value={formValues.lastname} onChange={handleChange} />
                {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}

                <Input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <Input type="tel" name="phone" placeholder="Phone" value={formValues.phone} onChange={handleChange} />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              <Select onValueChange={handleServiceChange} value={formValues.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX">UI/UX</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-red-500">{errors.service}</p>}

              <Textarea className="h-[200px]" name="message" placeholder="Type your message here..." value={formValues.message} onChange={handleChange} />
              {errors.message && <p className="text-red-500">{errors.message}</p>}

              <Button size="md" className="max-w-40 py-2 font-bold">
                Send Message
              </Button>
              {successMessage && <p className="text-green-500">{successMessage}</p>}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end xl:order-none order-1 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px] hover:text-green-500 ">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
