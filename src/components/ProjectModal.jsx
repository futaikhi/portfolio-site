import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkIcon, X } from "lucide-react";
import Image from "next/image";

const ProjectModal = ({ project, closeModal }) => {
  if (!project) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal} // Tutup modal saat klik di luar
        >
          <motion.div
            className="bg-[#1a1420]/90 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6 md:p-8 text-white"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Mencegah penutupan modal saat klik di dalam
          >
            {/* Tombol Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X size={24} />
            </button>

            {/* Judul Proyek */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white-400">{project.title}</h2>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tag) => (
                <span key={tag} className="bg-gray-700 text-white-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Galeri Gambar */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Galeri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images && project.images.map((src, index) => (
                  <div key={index} className="relative w-full h-64 rounded-md overflow-hidden">
                    <Image
                      src={src}
                      alt={`Screenshot ${project.title} ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Deskripsi Detail */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Tentang Proyek</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>


            {/* Tautan */}
            <div className="flex items-center gap-4">
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        <LinkIcon size={20} />
                        <span>Link</span>
                    </a>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
