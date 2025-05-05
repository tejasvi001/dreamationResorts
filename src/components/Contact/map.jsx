"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [selectedPackage, setSelectedPackage] = useState("");
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
    if (!EmailRegex.test(formData.Email))
      errors.Email = "Invalid email address.";
    if (!PhoneNoRegex.test(formData.PhoneNo))
      errors.PhoneNo = "Phone number must be 10 digits.";
    if (formData.Message.length > 200)
      errors.Message = "Message cannot exceed 200 characters.";
    if (
      formData.NumberOfPeople &&
      !NumberOfPeopleRegex.test(formData.NumberOfPeople)
    )
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
      const templateIdRegistrationForm =
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_TEMPLATE_ID;

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
        setSelectedPackage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* Left: Contact Info */}
      <div className="bg-orange-50 w-full flex items-center px-6 md:px-[7vw] py-[4vw]">
        <div className="w-full md:w-1/2 h-full flex flex-col gap-[1vw]">
          <h2 className="text-2xl sm:text-5xl font-bold">Get in Touch!</h2>
          <p className="md:text-xl">
            📍 <strong>Corporate Location</strong>
            <br />
            12345 N. Main St, New York, NY 555555
          </p>
          <p className="md:text-xl">
            📞 <strong>Call Us</strong>
            <br />
            1.800.555.6789
          </p>
          <p className="md:text-xl">
            📧 <strong>Email</strong>
            <br />
            reservations@company.com
          </p>
        </div>
      </div>

      {/* map */}  
      <div className="h-2/3 w-full"></div>

      {/* Right: Form */}
      <div className="md:absolute top-5 right-5 w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 md:p-10 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Your Name"
            />
            {errors.Name && (
              <p className="text-red-500 text-sm">{errors.Name}</p>
            )}

            <input
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              type="email"
              placeholder="Email"
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email}</p>
            )}

            <input
              name="PhoneNo"
              value={formData.PhoneNo}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              type="tel"
              placeholder="Contact No"
            />

            <select
              name="PackageName"
              className="w-full border p-2 rounded"
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

            {selectedPackage === "other" && (
              <input
                name="OtherPackage"
                value={formData.OtherPackage}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Please specify your package"
              />
            )}

            <input
              name="NumberOfPeople"
              value={formData.NumberOfPeople}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              type="number"
              placeholder="No. of People"
            />

            <div>
              <label className="block text-sm font-medium mb-1">
                Arriving Date
              </label>
              <input
                name="ArrivingDate"
                value={formData.ArrivingDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                type="date"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Departing Date
              </label>
              <input
                name="DepartingDate"
                value={formData.DepartingDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                type="date"
              />
            </div>

            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows="3"
              placeholder="Your Message"
            ></textarea>
            {errors.Message && (
              <p className="text-red-500 text-sm">{errors.Message}</p>
            )}

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {successMessage && (
              <p className="text-green-600 text-sm">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
