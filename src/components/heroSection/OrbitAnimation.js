import { motion } from "framer-motion";
import { FaGithub, FaReact, FaHtml5, FaCss3, FaFigma, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { image } from "../../assets/data";


const OrbitAnimation = () => {
  const icons = [
    { icon: <FaGithub />, position: { top: "0%", left: "50%" } },
    { icon: <FaFigma />, position: { top: "50%", left: "100%" } },
    { icon: <FaCss3 />, position: { top: "85.4%", left: "85.4%" } },
    { icon: <FaHtml5 />, position: { top: "100%", left: "50%" } },
    { icon: <FaReact />, position: { top: "85.4%", left: "14.6%" } },
    { icon: <FaNodeJs />, position: { top: "50%", left: "0%" } },
    { icon: <FaGitAlt />, position: { top: "14.6%", left: "14.6%" } },
    { icon: <IoLogoVercel />, position: { top: "14.6%", left: "85.4%" } },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative flex items-center justify-center w-[90vw] max-w-[360px] aspect-square md:max-w-[500px] ">
        
        {/* --- Orbit Ring --- */}
        <motion.div
          className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-gray-600"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* --- Orbit Icons --- */}
          {icons.map((item, index) => (
            <div
              key={index}
              className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-[#1f2937] border border-gray-700 rounded-full shadow-lg"
              style={{
                top: item.position.top,
                left: item.position.left,
              }}
            >
              {/* Counter-rotation to keep icons upright */}
              <motion.div 
                className="text-2xl text-cyan-400 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {item.icon}
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* --- Center Image --- */}
        <div className="relative z-10 w-36 h-36 md:w-60 md:h-60 lg:h-80 lg:w-80 rounded-full overflow-hidden border-4 border- border-richblack-800 shadow-[0px_0px_20px_3px_rgba(0,_255,_255,_0.5)] bg-gray-800">
          <img
            src={image.profileImg}
            alt="Center Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OrbitAnimation;