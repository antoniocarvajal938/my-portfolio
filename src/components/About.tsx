import { motion } from "framer-motion";
import {
  SiAndroid,
  SiKotlin,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJirasoftware,
  SiPostman,
  SiAstro,
} from "react-icons/si";

const techStack = [
  // Mobile App (principal)
  { icon: SiAndroid, name: "Android Studio", category: "Mobile" },
  { icon: SiKotlin, name: "Kotlin / Jetpack Compose", category: "Mobile" },
  { icon: SiJavascript, name: "JavaScript", category: "Mobile" },
  { icon: SiTypescript, name: "TypeScript", category: "Mobile" },
  { icon: SiMysql, name: "SQLite / SQL", category: "Mobile" },

  // Web (secundario)
  { icon: SiHtml5, name: "HTML5", category: "Web" },
  { icon: SiCss3, name: "CSS3", category: "Web" },
  { icon: SiReact, name: "React", category: "Web" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "Web" },
  { icon: SiAstro, name: "Astro", category: "Web" },

  // QA / Testing (secundario)
  { icon: SiJirasoftware, name: "Jira", category: "QA" },
  { icon: SiPostman, name: "Postman", category: "QA" },
];

export default function About() {
  return (
    <section className="bg-gray-900 text-white py-32 px-6 md:px-16 relative z-0">
      <div className="flex flex-col md:flex-row items-start md:items-center max-w-6xl mx-auto gap-16">
        {/* Texto de presentación */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hi! I'm Antonio Carvajal 👋
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-4">
            I am a passionate <span className="text-blue-500 font-semibold">Mobile App Developer 📱 </span> 
            from Málaga, Spain. I fell in love with programming 💻 and enjoy creating 
            Android apps that are clean, functional, and enjoyable 🚀.
          </p>
          <p className="text-gray-300 text-lg md:text-xl mb-4">
            My main focus is <span className="text-blue-500 font-semibold">Mobile Development </span> 
            with Kotlin, Java, Jetpack Compose, MVVM and Retrofit, building projects 
            that make an impact.
          </p>
          <p className="text-gray-300 text-lg md:text-xl mb-4">
            I am also open to <span className="text-blue-300 font-semibold">Web Development </span> 
            and <span className="text-blue-300 font-semibold">Quality Assurance,</span> 
            constantly learning new technologies and improving my skills 🌟.
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            Outside of coding, I enjoy collaborating with other developers 🤝, 
            exploring new tools and frameworks, and bringing creative ideas to life.
          </p>
        </motion.div>

        {/* Stack tecnológico */}
        <motion.div
          className="md:w-1/2 grid grid-cols-3 gap-6 z-10"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {techStack.map((tech, index) => {
            let colorClass = "text-gray-200";
            if (tech.category === "Mobile") colorClass = "text-blue-500 hover:text-blue-500";
            if (tech.category === "Web" || tech.category === "QA")
              colorClass = "text-blue-300 hover:text-blue-300";

            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center ${colorClass} transition-colors duration-300`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <tech.icon size={48} />
                <span className="mt-2 text-sm md:text-base text-center">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
