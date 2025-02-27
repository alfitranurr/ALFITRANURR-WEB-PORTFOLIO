// src/pages/certificate.tsx

import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="flex justify-center mt-6 px-4 pt-[60px]"
    >
      <div className="w-full max-w-screen-xl mx-auto p-8 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <h1 className="text-lg font-semibold text-white text-center mb-4">
          MY CERTIFICATES
        </h1>
        <p className="text-white text-center mb-6">
          Here is a list of some of the certificates I’ve earned along my
          journey.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-6 w-full">
          <Link
            to="/certificate/competition"
            className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]"
          >
            <h3 className="text-base font-bold">Competition</h3>
            <p className="mt-1 text-xs">
              Gained valuable experience through participation in various
              competitions.
            </p>
          </Link>
          <Link
            to="/certificate/seminar-workshop"
            className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]"
          >
            <h3 className="text-base font-bold">Seminar & Workshop</h3>
            <p className="mt-1 text-xs">
              Engaged in insightful sessions to broaden perspectives and expand
              knowledge.
            </p>
          </Link>
          <Link
            to="/certificate/license-certification"
            className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]"
          >
            <h3 className="text-base font-bold">License & Certification</h3>
            <p className="mt-1 text-xs">
              Earned professional certifications in various fields.
            </p>
          </Link>
          <Link
            to="/certificate/committee-organization"
            className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]"
          >
            <h3 className="text-base font-bold">Committee & Organization</h3>
            <p className="mt-1 text-xs">
              Led and participated in various committees and organizations to
              drive impactful events.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
``;
