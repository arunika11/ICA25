import { ReactComponent as MailIcon } from '../assets/mail.svg'; // Replace with your mail SVG file
import { ReactComponent as PhoneIcon } from '../assets/phone.svg'; // Replace with your phone SVG file
import { ReactComponent as LocationIcon } from '../assets/location.svg'; // Replace with your location SVG file

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12 px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Section */}
        <div>
          <h3 className="font-heading w-3/4 text-2xl font-bold text-[#4ECB38]">
            International Conference of Agriculture 2025
          </h3>
          <p className="font-body mt-6 text-base leading-relaxed text-gray-300">
            The conference will be in Guwahati, a gateway to Northeast India,
            known for the Brahmaputra River and Kamakhya Temple, with easy access
            to Kaziranga National Park.
          </p>
        </div>

        {/* Middle Section */}
        <div className='lg:ml-44 md:ml-0 sm:ml-'>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <div className="flex flex-wrap gap-11 mt-6">
            <ul className="space-y-3 text-base">
              <li>
                <a href="/" className="font-body hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/program" className="font-body hover:underline">
                  Program
                </a>
              </li>
              <li>
                <a href="/organisation" className="font-body hover:underline">
                  Organisation
                </a>
              </li>
              <li>
                <a href="/calls" className="font-body hover:underline">
                  Calls
                </a>
              </li>
            </ul>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/venue" className="font-body hover:underline">
                  Venue
                </a>
              </li>
              <li>
                <a href="/sponsorship" className="font-body hover:underline">
                  Sponsorship
                </a>
              </li>
              <li>
                <a href="/registration" className="font-body hover:underline">
                  Registration
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className='lg:ml-20 md:ml-0 sm:ml-0'>
          <h3 className="font-heading text-xl font-bold">Contact Us</h3>
          <ul className="mt-6 space-y-4 text-base">
            <li className="flex items-center space-x-3">
              <MailIcon className="w-6 h-6 text-[#4ECB38]" />
              <a href="mailto:ica25@iitg.ac.in" className="font-body hover:underline">
                ica25@iitg.ac.in
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <PhoneIcon className="w-6 h-6 text-[#4ECB38]" />
              <a href="tel:+1234567890" className="font-body hover:underline">
                +123 456 7890
              </a>
            </li>
            <li className="flex items-start space-x-3 w-4/4">
              <LocationIcon className="w-6 h-6 text-[#4ECB38] mt-1" />
              <p className="font-body">
                IIT Guwahati, Amingaon, North Guwahati, Guwahati-781039
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
