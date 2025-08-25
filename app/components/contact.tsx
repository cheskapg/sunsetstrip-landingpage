"use client";

import { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Address",
      details: [
        "Purok 3, Tambis, Sangi, Madridejos",
        "Alegria, Cebu 8030 Philippines",
      ],
      color: "text-orange-500",
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Phone",
      details: ["(323) 555-0123", "Local: +63 917 123 4567"],
      color: "text-blue-500",
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email",
      details: ["hello@sunsetstrip.com", "reservations@sunsetstrip.com"],
      color: "text-green-500",
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Hours",
      details: [
        "24/7 Concierge Service",
        "Check-in: 3:00 PM | Check-out: 12:00 PM",
      ],
      color: "text-purple-500",
    },
  ];

  const subjects = [
    "General Inquiry",
    "Room Reservation",
    "Event Planning",
    "Dining Reservation",
    "Transportation",
    "Feedback",
    "Other",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help make your stay unforgettable. Reach out to us for
            reservations, inquiries, or any assistance you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className={`${info.color} mr-4 mt-1`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="+63 917 123 4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-700 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="font-medium">Error sending message.</p>
                    <p className="text-sm">
                      Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-span-1 lg:col-span-3 bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-4">Our Location</h4>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.6957314171345!2d123.34617997527003!3d9.791792076582269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab951ed89f446b%3A0x6155af2e4488c961!2sSunset%20Strip%20Beach%20Resort!5e0!3m2!1sen!2sph!4v1756125670625!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Sunset Strip Beach Resort Location"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-600 text-sm">
                Purok 3, Tambis, Sangi, Madridejos, Alegria, Cebu 8030 Philippines
              </p>
              <a
                href="https://maps.google.com/?q=Sunset+Strip+Beach+Resort"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors duration-200"
              >
                View in Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-yellow-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Book Your Stay?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Don't wait! Experience the magic of Sunset Strip Beach Resort
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Book Now
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                View Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
