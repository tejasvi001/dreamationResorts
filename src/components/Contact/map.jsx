'use client';
import { useEffect, useRef } from 'react';

export default function Contact() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Contact Info */}
            <div className="bg-orange-50 p-10 md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Get in Touch!</h2>
                <div className="space-y-4">
                    <p>📍 <strong>Corporate Location</strong><br/>12345 N. Main St, New York, NY 555555</p>
                    <p>📞 <strong>Call Us at</strong><br/>1.800.555.6789</p>
                    <p>📧 <strong>Email</strong><br/>reservations@company.com</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="relative md:w-1/2">
                <div className="relative bg-white p-6 md:p-10 z-10 m-4 md:m-10">
                    <form className="space-y-3">
                        <input className="w-full border p-2" type="text" placeholder="Your Name" />
                        <input className="w-full border  p-2" type="email" placeholder="Email" />
                        <input className="w-full border  p-2" type="text" placeholder="Subject" />
                        <select className="w-full border  p-2">
                            <option>Select Destination</option>
                            <option>Lahore</option>
                            <option>Delhi</option>
                        </select>
                        <input className="w-full border  p-2" type="text" placeholder="Reason for Travel" />
                        <input className="w-full border  p-2" type="number" placeholder="No. of days you will stay" />
                        <input className="w-full border  p-2" type="number" placeholder="No. of People Staying" />
                        <input className="w-full border  p-2" type="date" placeholder="Arriving Date" />
                        <input className="w-full border p-2" type="date" placeholder="Departing Date" />
                        <textarea className="w-full border  p-2" rows="3" placeholder="Your Message"></textarea>
                        <button className="border border-orange-400 text-orange-600 px-6 py-2 rounded hover:bg-orange-100 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
