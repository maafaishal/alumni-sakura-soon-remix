import { Link } from "remix";

function Home() {
  return (
    <div className="bg-sky-500 h-screen flex justify-center items-center px-6">
      <div className="text-center">
        <img
          src="./logo.svg"
          className="mb-6 mx-auto w-48 sm:w-96"
          alt="logo"
        />
        <h1 className="text-white text-4xl sm:text-6xl font-semibold mb-8">
          Alumni Sakura
        </h1>
        <div className="bg-orange-50 text-center rounded-xl px-6 py-4 max-w-xl mb-6">
          <p className="text-gray-800">
            Situs saat ini dalam tahap pembaharuan
          </p>
        </div>
        <Link to="/tentang">
          <p className="text-lg text-white font-semibold">Tentang</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
