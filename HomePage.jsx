import React from "react";
import { Mail, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Gemmill LLC</h1>
        <p className="text-lg">Mobile Detailing, Lawn Care & Hauling Services</p>
        <p className="text-sm text-gray-500">Serving King of Prussia, PA and surrounding areas</p>
      </header>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-12">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Mobile Detailing</h2>
          <p>
            Complete car care at your location. Interior and exterior packages available to restore your vehicle’s shine.
          </p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Lawn Care</h2>
          <p>
            Precision mowing, edging, and yard cleanup tailored to your schedule. Weekly and bi-weekly plans offered.
          </p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Hauling Services</h2>
          <p>
            Light hauling and junk removal services for residential and small business needs. Affordable and reliable.
          </p>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
        <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
          Contact Us
        </button>
      </section>

      <footer className="border-t pt-6 text-center text-sm text-gray-500">
        <p>Gemmill LLC &copy; {new Date().getFullYear()} | King of Prussia, PA</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" /> gemmillservices@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" /> (484) 555-1234
          </span>
        </div>
      </footer>
    </div>
  );
}