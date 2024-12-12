import React, { useState } from 'react';

const Form = () => {
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
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        });

        if (response.ok) {
          setSuccessMessage('Email sent successfully!');
          setErrorMessage('');
          setFormValues({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.error || 'Failed to send email.');
        }
      } catch (error) {
        setErrorMessage('Failed to send email.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
      <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
      <p className="text-white/60">Together we can achieve a lot</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={formValues.firstname}
          onChange={handleChange}
          className="input"
        />
        {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}
        
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={formValues.lastname}
          onChange={handleChange}
          className="input"
        />
        {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          className="input"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleChange}
          className="input"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <select
        name="service"
        value={formValues.service}
        onChange={handleChange}
        className="select"
      >
        <option value="" disabled>
          Select a service
        </option>
        <option value="Web Development">Web Development</option>
        <option value="UI/UX">UI/UX</option>
        <option value="Logo Design">Logo Design</option>
        <option value="Data Analysis">Data Analysis</option>
      </select>
      {errors.service && <p className="text-red-500">{errors.service}</p>}

      <textarea
        name="message"
        placeholder="Type your message here..."
        value={formValues.message}
        onChange={handleChange}
        className="textarea h-[200px]"
      />
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <button type="submit" className="max-w-40 py-2 font-bold button">
        Send Message
      </button>

      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};

export default Form;
