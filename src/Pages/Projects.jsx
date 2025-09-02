"use client";
import { motion } from "framer-motion";
import React from 'react';
import { GridBeam } from "../ui/GridBeam";
import { Project3DCard } from "../components/Project3DCard"; // Import the 3D card
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route)
  };

  const projects = [
    {
      id: 1,
      title: "Expenso - Your Personal Finance Advisor",
      description: "Expenso is a smart and simple finance management web app that helps users take full control of their income and expenses. With its clean interface, interactive visualizations, and smart assistant, Expenso makes financial management easier, smarter, and more efficient.",
      image: '/images/Expenso.png', // Replace with your actual image paths
      technologies: ["React", "Node.js", "MongoDB", "Gemeni API" , "Chart.js"],
      githubUrl: "https://github.com/animeshthakur7879/expenso-moneyTracker",
      liveUrl: "https://expenso-80pe.onrender.com/",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "DevPractice – Online Code Playground",
      description: "A code playground inspired by CodePen and JSFiddle, featuring live HTML, CSS, and JS editing with real-time preview. Integrated the Monaco Editor to provide a VS Code–like experience. Implemented Firebase Authentication for secure login",
      image: "/images/DevPractice.png",
      technologies: ["Node.js", "React", "MongoDB", "Express" , "TailwindCSS"],
      githubUrl: "https://github.com/animeshthakur7879/DevPractice",
      liveUrl: "https://dev-practice-v1.onrender.com/",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Wheelie - Car Rental Platform",
      description: "This full-stack MERN car rental app features admin and user dashboards. Admins can manage car listings, rentals, and customer reviews, while users can browse, book, and manage car reservations. It includes authentication, role-based access, and a responsive UI",
      image: "/images/Wheelie.png",
      technologies: ["Node.js", "React", "Redux", "MongoDB" , "Express" , "TailwindCSS"],
      githubUrl: "https://github.com/animeshthakur7879/Wheelie-Car-Rental",
      liveUrl: "https://wheelie-frontend.onrender.com/",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Quick-Court - Book Your Court Anytime",
      description: "Developed a web platform for searching, booking, and managing sports courts, featuring secure authentication, real-time court availability tracking, and instant booking confirmation. The system also includes role-based access, enabling admins, venue owners, and players to efficiently manage their respective functionalities",
      image: "/images/QuickCourt.png",
      technologies: ["Node.js", "React", "Express", "MongoDB" , "Chart.js" , "RazorPay"],
      githubUrl: "https://github.com/mahak820/OdooHackathonSubmissionFinalMain.git",
      liveUrl: "https://github.com/mahak820/OdooHackathonSubmissionFinalMain.git",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "TradeX",
      description: "Developed a cryptocurrency tracker that provides real-time prices, trends, and market data. Integrated search, filter, and watchlist features to deliver a personalized user experience. Implemented live data fetching using CoinGecko/CoinMarketCap APIs for accurate and up-to-date insights",
      image: "/images/TradeX.png",
      technologies: ["React.js", "Redux", "Crypto-API", "TailwindCSS" , "JavaScript"],
      githubUrl: "https://github.com/animeshthakur7879/TradeX-Crypto-app",
      liveUrl: "https://tradex-crypto.netlify.app/",
      category: "Frontend"
    },
    {
      id: 6,
      title: "To-Do App",
      description: "A responsive To-Do App built with React, Redux, and Tailwind CSS for seamless task management. It allows users to add, edit, and delete tasks while managing state efficiently through Redux. The modern UI powered by Tailwind ensures a clean, minimal, and user-friendly experience across all devices.",
      image: "/images/Todo.png",
      technologies: ["React", "Redux", "TailwindCSS", "ContextAPI"],
      githubUrl: "https://github.com/animeshthakur7879/Tailwind-Todo-App",
      liveUrl: "https://todo-app-v3-tailwind.netlify.app/",
      category: "Frontend"
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#141618] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 h-full w-full grid-background bg-grid-white/[0.05]" />
      
      {/* Home button - Made fully responsive */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-30"
      >
        <motion.button
          onClick={() => handleNavigation('/')}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(129, 94, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1.5 sm:space-x-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-900/50 border border-gray-700 text-white rounded-lg backdrop-blur-sm hover:border-violet-400 transition-all duration-300 cursor-pointer text-sm sm:text-base"
        >
          <span className="text-base sm:text-lg">←</span>
          <span className="font-medium">Home</span>
        </motion.button>
      </motion.div>

      {/* Content wrapper - Enhanced responsive padding */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <GridBeam>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page title and intro - Fully responsive typography */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                My
                <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              {/* <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Showcasing my passion for creating digital experiences through code. 
                Each project represents a unique challenge and creative solution.
              </p> */}
            </motion.div>

            {/* 3D Projects grid - Enhanced responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {projects.map((project, index) => (
                <div key={project.id} className="flex justify-center">
                  <Project3DCard 
                    project={project} 
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Bottom CTA - Responsive spacing and sizing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-16 sm:mt-20 lg:mt-24"
            >
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-2 sm:px-0">
                Interested in collaborating on a project?
              </p>
              <motion.button
                onClick={() => handleNavigation('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </div>
        </GridBeam>
      </div>
    </div>
  );
};

export default Projects;