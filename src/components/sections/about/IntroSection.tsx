import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <div className="flex flex-col items-start max-w-4xl mx-auto mb-20">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-center">
          <span className="text-white">LET</span>{" "}
          <span className="text-white">ME</span>{" "}
          <span className="text-orange-500">INTRODUCE</span>{" "}
          <span className="text-white">MYSELF</span>
        </h2>

        <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
            I am a passionate{" "}
            <span className="text-orange-500 font-semibold">
              Quality Assurance 🐛
            </span>{" "}
            professional from Málaga, Spain, deeply motivated by ensuring the
            quality, reliability, and performance of digital products.
          </p>
          <p>
            Currently, my main focus is shifting towards{" "}
            <span className="text-orange-400 font-semibold">
              Quality Assurance
            </span>
            , a field where I aim to grow and establish myself within the
            industry. At the same time, I maintain a strong interest in{" "}
            <span className="text-orange-300 font-semibold">
              Mobile and Web Development
            </span>
            , expanding my knowledge to remain versatile and technically
            prepared. 📱 💻
          </p>
          <p>
            I enjoy working in collaborative environments 🤝🏻, sharing ideas, and
            contributing to teams committed to building high-quality solutions.
            ✨
          </p>
          <br></br>
          <br></br>
          <br></br>
          
        </div>
      </motion.div>
    </div>
  );
}