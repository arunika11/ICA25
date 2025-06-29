import { ReactComponent as MailIcon } from "../assets/mail.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as LocationIcon } from "../assets/location.svg";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12 px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <h3 className="font-heading w-3/4 text-2xl font-bold text-[#4ECB38]">
            International Conference of Agriculture 2025
          </h3>
          <p className="font-body mt-6 text-base leading-relaxed text-gray-300">
            The conference will be in Guwahati, a gateway to Northeast India,
            known for the Brahmaputra River and Kamakhya Temple, with easy
            access to Kaziranga National Park.
          </p>
        </div>
        <div className="lg:ml-44 md:ml-0 sm:ml-">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <div className="flex flex-wrap gap-11 mt-6">
            <ul className="space-y-3 text-base">
              <li>
                <a href="/ica25" className="font-body hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/ica25/program" className="font-body hover:underline">
                  Program
                </a>
              </li>
              <li>
                <a
                  href="/ica25/organization"
                  className="font-body hover:underline"
                >
                  Organization
                </a>
              </li>
              <li>
                <a href="/ica25/calls" className="font-body hover:underline">
                  Calls
                </a>
              </li>
            </ul>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/ica25/venue" className="font-body hover:underline">
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="/ica25/sponsorship"
                  className="font-body hover:underline"
                >
                  Sponsorship
                </a>
              </li>
              <li>
                <a
                  href="/ica25/registration"
                  className="font-body hover:underline"
                >
                  Registration
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-20 md:ml-0 sm:ml-0">
          <h3 className="font-heading text-xl font-bold">Contact Us</h3>
          <ul className="mt-6 space-y-4 text-base">
            <li className="flex items-center space-x-3">
              <MailIcon className="w-6 h-6 text-[#4ECB38]" />
              <a
                href="mailto:ica25@iitg.ac.in"
                className="font-body hover:underline"
              >
                ica25@iitg.ac.in
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <PhoneIcon className="w-6 h-6 text-[#4ECB38]" />
              <a href="tel:01234560000" className="font-body hover:underline">
                0123 456 0000
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
