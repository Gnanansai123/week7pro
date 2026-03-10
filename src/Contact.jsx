import React, { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {

    const err = {};

    if (!form.name) err.name = "Name required";

    if (!form.email.includes("@"))
      err.email = "Invalid email";

    if (form.message.length < 10)
      err.message = "Message must be at least 10 characters";

    return err;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Feedback submitted!");
      setErrors({});
    }
  };

  return (
    <div>

      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />
        <p>{errors.message}</p>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default Contact;