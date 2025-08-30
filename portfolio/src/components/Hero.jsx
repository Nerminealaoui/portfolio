import { motion } from "framer-motion";
import photoProfil from "../assets/photo1.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-screen h-screen bg-animated text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 pt-24"
      // style={{ margin: 0, padding: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <span className="bg-green-600 text-sm px-4 py-1 rounded-full font-semibold">
          ✅ Available for Work
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Full Stack Developer <br />
          <span className="text-yellow-500">Nermine ALAOUI BELGHITI</span>
        </h1>

        <p className="text-gray-300 max-w-lg">
          Passionnée par le développement web moderne, j’adore créer des
          applications performantes et élégantes.
        </p>

        <div className="flex space-x-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            View Projects
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
      >
        <div className="rounded-full border-4 border-yellow-500 p-2 shadow-lg shadow-yellow-500/30">
          <img
            src={photoProfil}
            alt="Avatar"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
