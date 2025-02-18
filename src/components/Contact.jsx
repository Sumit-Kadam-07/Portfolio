import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const serviceId = "service_bgmehq8"; // Replace with your EmailJS Service ID
      const templateId = "template_1wwzroe"; // Replace with your EmailJS Template ID
      const userId = "qWq_zg94iWIQT2PzY"; // Replace with your EmailJS User ID

      // Map form data to template placeholders
      const templateParams = {
        from_name: formData.name, // Maps to {{from_name}} in the template
        from_email: formData.email, // Maps to {{from_email}} in the template
        message: formData.message, // Maps to {{message}} in the template
      };

      // Send the email
      await emailjs.send(serviceId, templateId, templateParams, userId);

      // Reset the form and show success message
      setFormData({ name: "", email: "", message: "" });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <div className="max-w-2xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success and Error Messages */}
        {isSuccess && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Message sent successfully!
          </div>
        )}
        {isError && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            Failed to send message. Please try again.
          </div>
        )}

        {/* Social Media Links with Logos */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="mailto:pratikkadam453@gmail.com" // Replace with your email
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-all duration-200"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/Sumit-Kadam-07" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-all duration-200"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumitkadam07/" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-all duration-200"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://wa.me/+919511859430" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-500 transition-all duration-200"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;