import React from "react";

const RegisterationPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
       <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "60vh",
          backgroundImage: `url('5.jpg')`,
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          style={{ zIndex: 1 }}
        ></div>

        <div className="flex items-center h-full">
          <div className="z-40 mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-32 w-full px-4">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
              <span className="font-semibold text-[#4ECB38]">Registration</span>
            </h3>
            <div className="flex flex-col space-y-8">
              <div className="flex justify-start sm:justify-end space-x-4 mt-14 lg:mt-0 mr-10">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf81VV1MbLWIKFMvIV6dblkKipoaL4GcfrleD1p-Kxl0FuogQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-body px-6 sm:px-8 py-2 bg-[#4ECB38] text-black font-medium hover:bg-green-600 transition">
                    Fee Payment Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="z-40 font-body w-full px-6 sm:px-16 flex flex-col mt-8 sm:mt-16 lg:flex-row items-center justify-center lg:items-start">
        <div className="w-full max-w-5xl bg-white rounded-lg p-6 sm:p-8">
          <h4 className="font-heading text-2xl py-4 sm:text-3xl lg:text-4xl text-center font-semibold">
            Early Registration:{" "}
            <span className="text-[#4ECB38]">Until 12/05/2025</span>
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400 text-left">
              <thead>
                <tr className=" text-gray-900">
                  <th
                    className="border border-gray-400 px-4 py-2 text-center"
                    colSpan="2"
                  >
                    Indian Participants
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Regular Registration
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    INR 15,000/- + GST <br />
                    (= INR 17,700)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Discounted Registration for Indian Faculty/Student
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    INR 8,000/- + GST <br />
                    (= INR 9,440)
                  </td>
                </tr>
              </tbody>

              <thead>
                <tr className=" text-gray-900">
                  <th
                    className="border border-gray-400 px-4 py-2 text-center"
                    colSpan="2"
                  >
                    International Participants
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Regular Registration
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    USD 200 + GST <br />
                    (= USD 236)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            <strong>Note:</strong> For each accepted paper/poster/demo,
            registration in one of the above categories (as per eligibility) is
            compulsory.
          </p>
        </div>
      </section>
      <section className="z-40 font-body w-full px-6 sm:px-16 flex flex-col mt-8 sm:mt-16 lg:flex-row items-center justify-center lg:items-start">
        <div className="w-full max-w-5xl bg-white rounded-lg p-6 sm:p-8">
          <h4 className="font-heading text-2xl py-4 sm:text-3xl lg:text-4xl text-center font-semibold">
            Additional <span className="text-[#4ECB38]">Pages</span>
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400 text-left">
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Max 4 extra pages
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    INR 5,000 per page
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="z-40 font-body w-full px-6 sm:px-16 flex flex-col mt-8 sm:mt-16 lg:flex-row items-center justify-center lg:items-start">
        <div className="w-full max-w-5xl bg-white rounded-lg p-6 sm:p-8">
          <h4 className="font-heading text-2xl py-4 sm:text-3xl lg:text-4xl text-center font-semibold">
            Registration <span className="text-[#4ECB38]">Process</span>
          </h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="py-2">
              Choose the right registration as per your category.
            </li>
            <li className="py-2">
              Make an online transfer of money to the bank given below. You can
              also do a UPI transfer using the bank QR code.
            </li>
            <li className="py-2">
              Once you complete the payment, please register using the following
              link (you need to upload the payment proof to complete the
              registration):{" "}
              <a
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://forms.gle/PXB9WYKTB7zb37Sn6"
              >
                {" "}
                Registeration Fee Payment link{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="z-40 font-body w-full px-6 sm:px-16 flex flex-col mt-8 sm:mt-16 lg:flex-row items-center justify-center lg:items-start">
        <div className="w-full max-w-5xl bg-white rounded-lg p-6 sm:p-8">
          <h4 className="font-heading text-2xl py-4 sm:text-3xl lg:text-4xl text-center font-semibold">
            Bank <span className="text-[#4ECB38]">Details</span>
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <tbody>
                <tr>
                  <td className="py-2 font-medium">Account Name:</td>
                  <td className="py-2">
                    IIT Ropar Tech and Innovation Foundation
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Account Number:</td>
                  <td className="py-2">41795650356</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Bank Name:</td>
                  <td className="py-2">SBI</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Bank Address:</td>
                  <td className="py-2">
                    I.I.T. Ropar, IIT Main Campus, Birla Farms, Rupnagar, Punjab
                    140001, India
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">IFSC Code:</td>
                  <td className="py-2">SBIN0013181</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Bank code:</td>
                  <td className="py-2">13181</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Swift Code:</td>
                  <td className="py-2">SBININBB576</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="z-40 font-body w-full px-6 sm:px-16 flex flex-col mt-8 sm:mt-16 lg:flex-row items-center justify-center lg:items-start">
        <div className="w-full max-w-5xl bg-white rounded-lg p-6 sm:p-8">
          <h4 className="font-heading text-2xl py-4 sm:text-3xl lg:text-4xl text-center font-semibold">
            UPI <span className="text-[#4ECB38]">QR Code</span>
          </h4>
          <div className="flex justify-center">
            <img
              src="qrcode.png"
              alt="UPI QR Code"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="z-40 pb-16 font-body w-full px-6 sm:px-16 flex flex-col mt-8 sm:mt-16 lg:flex-row items-center justify-center lg:items-start">
        <div className="w-full max-w-5xl bg-white rounded-lg p-6 sm:p-8">
          <h4 className="font-heading text-2xl py-4 sm:text-3xl lg:text-4xl text-center font-semibold">
            Camera Ready <span className="text-[#4ECB38]">Instructions</span>
          </h4>
          <div>
            <h5 className="font-semibold mt-4">STEP 1: PAPER FORMATTING</h5>
            <ol className="list-decimal pl-6 text-gray-700">
              <li className="py-1">
                REVIEW, REVISE, and AMEND your paper as per the reviewer’s
                comments. Add author details.
              </li>
              <li className="py-1">
                Make sure that the paper is in Springer LNCS format (very strict
                policy, visit{" "}
                <a
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                >
                  {" "}
                  Format Link
                </a>{" "}
                ). We strongly recommend using the LaTeX template for
                formatting.
              </li>
              <li className="py-1">
                Make sure the tables and figures do not exceed the allowed page
                boundaries.
              </li>
              <li className="py-1">
                Make sure the number of pages is 10-12 for regular papers and
                6-8 for short papers. For additional pages, an additional
                registration fee (Rs 5000 per page needs to be paid). Page limit
                includes references.
              </li>
              <li className="py-1">
                Enhance the quality of the pictures and tables that are used in
                your paper.
              </li>
              <li className="py-1">
                Make sure your paper has been proofread to ensure that it is
                ERROR-FREE. We recommend the use of Grammarly ({" "}
                <a
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.grammarly.com/"
                >
                  {" "}
                  App Link{" "}
                </a>
                ) for finding grammar errors.
              </li>
              <li className="py-1">
                Check for plagiarism. Final acceptance of the paper is subject
                to a similarity index of less than 20%.
              </li>
              <li className="py-1">
                In the case of LaTeX, place all the source files (except PDF) in
                a zip file and name it paperid_source_file.zip. For Word
                Word-formatted paper, rename the file to
                paperid_source_file.docx. Keep the PDF version also ready by
                naming it paperid_camera_ready.pdf.
              </li>
            </ol>

            <h5 className="font-semibold mt-4">STEP 2: COPYRIGHT FORM</h5>
            <ol className="list-decimal pl-6 text-gray-700" start="8">
              <li className="py-1">
                Fill in the copyright form given on the URL [
                <a
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="guide.pdf"
                >
                  Guide Link
                </a>
                ]. The form has a few entries already filled out. The remaining
                entries need to be filled in by the authors. We have also
                attached a form guide. You need to enter text in all the blue
                annotated boxes (Copyright form guide can be accessed at the
                following link: [
                <a
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="form_copyright.docx"
                >
                  Copyright Form Link
                </a>
                ]).
              </li>
              <li className="py-1">
                Rename the copyright form to paperid_copyright.pdf.
              </li>
              <li className="py-1">
                [Optional] The authors are also encouraged to do a plagiarism
                check and obtain paperid_plagiarism_report.pdf.
              </li>
            </ol>

            <h5 className="font-semibold mt-4">STEP 3: PAYMENT</h5>
            <ol className="list-decimal pl-6 text-gray-700" start="10">
              <li className="py-1">Please pay the registration fee online.</li>
              <li className="py-1">
                Rename the proof of payment as
                paperid_paymentproof.pdf/jpg/jpeg/png.
              </li>
            </ol>

            <h5 className="font-semibold mt-4">STEP 4: SUBMISSION</h5>
            <ol className="list-decimal pl-6 text-gray-700" start="11">
              <li className="py-1">
                Upload the final files (paperid_camera_ready.pdf,
                paperid_source_file.zip/paperid_source_file.docx,
                paperid_copyright.pdf, paperid_paymentproof.pdf/jpg/jpeg/png)
                using the following link:{"("}
                <a
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/aLSSGUD5QwbDVV9DA"
                >
                  Files Upload Link{")"}
                </a>
              </li>
              <li className="py-1">
                The deadline for camera-ready submission is 8th May 2025.
              </li>
              <li className="py-1">
                Please update the camera-ready copy on the CMT3 portal as well.
              </li>
            </ol>

            <h5 className="font-semibold mt-4">Additional Instructions:</h5>
            <p className="text-gray-700 pl-6">
              Authors should consult Springer’s Instructions for Authors of
              Proceedings and use either the LaTeX in Overleaf or the Word
              templates provided on the author’s page (
              <a
                href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Format Link
              </a>
              ) for the preparation of their papers.
            </p>
            <p className="text-gray-700 pl-6 mt-2">
              Springer encourages authors to include their ORCIDs in their
              papers.
            </p>
            <p className="text-gray-700 pl-6 mt-2">
              In addition, the corresponding author of each paper, acting on
              behalf of all of the authors of that paper, must complete and sign
              a License-to-Publish form.
            </p>
            <p className="text-gray-700 pl-6 mt-2">
              The corresponding author signing the copyright form should match
              the corresponding author marked on the paper.
            </p>
            <p className="text-gray-700 pl-6 mt-2">
              Once the files have been sent to Springer, changes relating to the
              authorship of the papers cannot be made.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterationPage;
