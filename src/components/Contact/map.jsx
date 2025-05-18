"use client";
import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { FaSearchLocation } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "70vh" };
const fixedPosition = { lat: 32.06119913221474, lng: 76.71209094477592 };

const emailJsServiceID = "service_6qdd0uh";
const emailJsPublicKey = "u1JJ_0wWpDDp-jC36";
const templateIdRegistrationForm = "template_csd9hn1";
const googleSheetURL =
  "https://script.google.com/macros/s/AKfycbx-dszRsgRKfvFgCAWCh9G6bQ_HkvbrKBBakjsZobII8alisfBc8fbuVuI42q2UgkvH/exec";

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

  const validate = useCallback(() => {
    const errs = {};
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PhoneNoRegex = /^[0-9]{10}$/;
    const NumberOfPeopleRegex = /^[1-9][0-9]*$/;
    const DateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!formData.Name.trim()) errs.Name = "Name is required.";
    if (!EmailRegex.test(formData.Email)) errs.Email = "Invalid email address.";
    if (!PhoneNoRegex.test(formData.PhoneNo))
      errs.PhoneNo = "Phone number must be 10 digits.";
    if (formData.Message.length > 200)
      errs.Message = "Message cannot exceed 200 characters.";
    if (
      formData.NumberOfPeople &&
      (!NumberOfPeopleRegex.test(formData.NumberOfPeople) ||
        Number(formData.NumberOfPeople) <= 0)
    )
      errs.NumberOfPeople = "Invalid number of people.";
    if (formData.ArrivingDate && !DateRegex.test(formData.ArrivingDate))
      errs.ArrivingDate = "Invalid arriving date.";
    if (formData.DepartingDate && !DateRegex.test(formData.DepartingDate))
      errs.DepartingDate = "Invalid departing date.";

    return errs;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "PackageName") setSelectedPackage(value);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setErrors({});
      setSuccessMessage("");

      const validationErrors = validate();
      if (Object.keys(validationErrors).length) {
        setErrors(validationErrors);
        setIsSubmitting(false);
        return;
      }

      try {
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
    },
    [formData, validate]
  );

  return (
    <div className="flex flex-col h-full mt-8 md:mt-0">
      <div className="flex flex-col-reverse md:flex-row relative w-full p-[5vw] md:p-0 md:h-[70vh] gap-[5vw] md:gap-0">
        <div className="bg-orange-100 w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
          <div className="max-w-md w-full space-y-5 lg:text-left flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch!</h2>
            <a
              href="https://maps.app.goo.gl/xiUZZVMoVkXfCZtb8"
              className="hover:underline"
            >
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <FaSearchLocation className="text-[#d69d52]" />
                <strong>Location</strong>
              </div>
              <p>Dreamation Resorts, Ghornala, Bir, Baijnath, Kangra, Himachal Pradesh</p>
            </a>
            <a href="tel:7837000888" className="hover:underline">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <MdAddCall className="text-[#d69d52]" />
                <strong>Call Us at</strong>
              </div>
              <p>+91 7837000888</p>
            </a>
            <a
              href="mailto:info@dreamationresorts.com"
              className="hover:underline"
            >
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <IoMdMailUnread className="text-[#d69d52]" />
                <strong>Email Us at</strong>
              </div>
              <p>info@dreamationresorts.com</p>
            </a>
          </div>
        </div>

        <div className="w-full hidden md:flex h-full lg:w-1/2 items-center justify-center px-4 sm:px-6 py-10"></div>

        <div className="md:absolute right-[8vw] top-[2vw] w-full md:w-[35vw] bg-white shadow-lg rounded-3xl p-6 md:p-[3vw] space-y-4 z-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 md:space-y-4"
            noValidate
          >
            <input
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full border p-1 md:p-2 rounded"
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
              className="w-full border p-1 md:p-2 rounded"
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
              className="w-full border p-1 md:p-2 rounded"
              type="tel"
              placeholder="Contact No"
            />
            {errors.PhoneNo && (
              <p className="text-red-500 text-sm">{errors.PhoneNo}</p>
            )}

            <select
              name="PackageName"
              className="w-full border p-1 md:p-2 rounded"
              value={formData.PackageName}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="Ultra Luxury Acorn Cottages">
                Ultra Luxury Acorn Cottages
              </option>
              <option value="Luxury Acorn Cottages">
                Luxury Acorn Cottages
              </option>
              <option value="Fern Luxury Swisstents">
                Fern Luxury Swisstents
              </option>
              <option value="Earthen Echo Mud House">
                Earthen Echo Mud House
              </option>
              <option value="other">Other</option>
            </select>

            {selectedPackage === "other" && (
              <input
                name="OtherPackage"
                value={formData.OtherPackage}
                onChange={handleChange}
                className="w-full border p-1 md:p-2 rounded"
                type="text"
                placeholder="Please specify your package"
              />
            )}

            <input
              name="NumberOfPeople"
              value={formData.NumberOfPeople}
              onChange={handleChange}
              className="w-full border p-1 md:p-2 rounded"
              type="number"
              placeholder="No. of People"
            />
            {errors.NumberOfPeople && (
              <p className="text-red-500 text-sm">{errors.NumberOfPeople}</p>
            )}

            <label
              className="block text-sm font-medium mb-1"
              htmlFor="ArrivingDate"
            >
              Arriving Date
            </label>
            <input
              id="ArrivingDate"
              name="ArrivingDate"
              value={formData.ArrivingDate}
              onChange={handleChange}
              className="w-full border p-1 md:p-2 rounded"
              type="date"
            />
            {errors.ArrivingDate && (
              <p className="text-red-500 text-sm">{errors.ArrivingDate}</p>
            )}

            <label
              className="block text-sm font-medium mb-1"
              htmlFor="DepartingDate"
            >
              Departing Date
            </label>
            <input
              id="DepartingDate"
              name="DepartingDate"
              value={formData.DepartingDate}
              onChange={handleChange}
              className="w-full border p-1 md:p-2 rounded"
              type="date"
            />
            {errors.DepartingDate && (
              <p className="text-red-500 text-sm">{errors.DepartingDate}</p>
            )}

            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full border p-1 md:p-2 rounded"
              rows="3"
              placeholder="Your Message"
            />
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

      <div className="w-full h-full">
        <LoadScript googleMapsApiKey="AIzaSyAYeUr7IJ2HLtjaDebKgMlTIWcmKqqcsBY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={fixedPosition}
            zoom={15}
          >
            <Marker position={fixedPosition} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
