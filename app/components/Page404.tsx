import { Link } from "remix";

const Page404 = () => {
  return (
    <div className="bg-sky-500 h-screen flex justify-center items-center px-6">
      <div className="text-center">
        <img src="/logo.png" className="mb-6 mx-auto" alt="logo" />
        <div className="bg-orange-50 text-center rounded-xl px-6 py-4 max-w-xl mb-6">
          <p className="text-gray-800">Halaman tidak ditemukan</p>
        </div>
        <Link to="/">
          <p className="text-white text-lg font-semibold flex items-center">
            &#8592; Kembali
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
