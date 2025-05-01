'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser'; // make sure to install emailjs

export default function Contact() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNo: "",
    PackageName: "",
    OtherPackage: "",
    NumberOfPeople: "",
    ArrivingDate: "",
    DepartingDate: "",
    Message: "",
  });

  const validate = () => {
    const errors = {};
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PhoneNoRegex = /^[0-9]{10}$/;
    const NumberOfPeopleRegex = /^[1-9][0-9]*$/;
    const DateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    if (!formData.Name.trim()) errors.Name = "Name is required.";
    if (!EmailRegex.test(formData.Email)) errors.Email = "Invalid email address.";
    if (!PhoneNoRegex.test(formData.PhoneNo)) errors.PhoneNo = "Phone number must be 10 digits.";
    if (formData.Message.length > 200) errors.Message = "Message cannot exceed 200 characters.";
    if (formData.NumberOfPeople && !NumberOfPeopleRegex.test(formData.NumberOfPeople)) 
      errors.NumberOfPeople = "Invalid number of people.";
    if (formData.ArrivingDate && !DateRegex.test(formData.ArrivingDate))
      errors.ArrivingDate = "Invalid arriving date.";
    if (formData.DepartingDate && !DateRegex.test(formData.DepartingDate))
      errors.DepartingDate = "Invalid departing date.";
  
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const googleSheetURL = process.env.NEXT_PUBLIC_SHEET_KEY;
      const emailJsServiceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const templateIdRegistrationForm = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_TEMPLATE_ID;

      const googleResponse = await fetch(googleSheetURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      const emailJSResponse = await emailjs.send(
        emailJsServiceID,
        templateIdRegistrationForm,
        formData,
        emailJsPublicKey
      );

      if (googleResponse.ok && emailJSResponse.status === 200) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          Name: "",
          Email: "",
          PhoneNo: "",
          PackageName: "",
          OtherPackage: "",
          NumberOfPeople: "",
          ArrivingDate: "",
          DepartingDate: "",
          Message: "",
        });
        setSelectedPackage('');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-orange-50 p-10 md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch!</h2>
        <div className="space-y-4">
          <p>📍 <strong>Corporate Location</strong><br />12345 N. Main St, New York, NY 555555</p>
          <p>📞 <strong>Call Us at</strong><br />1.800.555.6789</p>
          <p>📧 <strong>Email</strong><br />reservations@company.com</p>
        </div>
      </div>

      <div className="relative md:w-1/2">
        <div className="relative bg-white p-6 md:p-10 z-10 m-4 md:m-10">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input name="Name" value={formData.Name} onChange={handleChange} className="w-full border p-2" type="text" placeholder="Your Name" />
            {errors.Name && <p className="text-red-500 text-sm">{errors.Name}</p>}

            <input name="Email" value={formData.Email} onChange={handleChange} className="w-full border p-2" type="email" placeholder="Email" />
            {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}

            <input name="PhoneNo" value={formData.PhoneNo} onChange={handleChange} className="w-full border p-2" type="tel" pattern="[0-9]{10}" placeholder="Contact No" />

            <select
              name="PackageName"
              className="w-full border p-2"
              value={formData.PackageName}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedPackage(value);
                handleChange(e);
              }}
            >
              <option value="">Select Package</option>
              <option value="Lahore">Lahore</option>
              <option value="Delhi">Delhi</option>
              <option value="other">Other</option>
            </select>

            {selectedPackage === 'other' && (
              <input
                name="OtherPackage"
                value={formData.OtherPackage}
                onChange={handleChange}
                className="w-full border p-2"
                type="text"
                placeholder="Please specify your package"
              />
            )}

            <input name="NumberOfPeople" value={formData.NumberOfPeople} onChange={handleChange} className="w-full border p-2" type="number" placeholder="No. of People" />

            <label className="block text-sm font-medium">Arriving Date</label>
            <input name="ArrivingDate" value={formData.ArrivingDate} onChange={handleChange} className="w-full border p-2" type="date" />

            <label className="block text-sm font-medium">Departing Date</label>
            <input name="DepartingDate" value={formData.DepartingDate} onChange={handleChange} className="w-full border p-2" type="date" />

            <textarea name="Message" value={formData.Message} onChange={handleChange} className="w-full border p-2" rows="3" placeholder="Your Message"></textarea>
            {errors.Message && <p className="text-red-500 text-sm">{errors.Message}</p>}

            <button
              disabled={isSubmitting}
              type="submit"
              className="border border-orange-400 text-orange-600 px-6 py-2 rounded hover:bg-orange-100 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
