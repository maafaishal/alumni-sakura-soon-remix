import { Link } from "remix";

import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Tentang | Alumni Sakura",
  };
};

const About = () => {
  return (
    <div className="bg-sky-500 h-screen flex justify-center items-center px-6">
      <div className="text-center">
        <img src="./logo.png" className="mb-6 mx-auto" alt="logo" />
        <div className="bg-orange-50 text-center rounded-xl px-6 py-4 max-w-xl mb-6">
          <p className="text-gray-800">
            <b>Situs Alumni Sakura</b> adalah situs alumni dari SMAN 1 Cikarang
            Utara yang nantinyan akan menampilkan informasi kegiatan, artikel,
            dan data alumni. Namun saat ini situs masih dalam tahap
            "pembaharuan".
          </p>
        </div>
        <Link to="/">
          <p className="text-lg text-white font-semibold align-middle">
            &#8592; Kembali
          </p>
        </Link>
      </div>
    </div>
  );
};

export default About;
