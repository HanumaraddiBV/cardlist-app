import React from "react";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai"; // Delete icon

const Card = ({ item, handleDelete }) => {
    return (
        <motion.div
            className="relative bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg rounded-xl overflow-hidden p-4"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }} // Zoom effect on hover
            transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
        >
  
            <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition"
            >
                <AiFillDelete className="text-lg" />
            </button>
            <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                loading="lazy"
            />

            <div className="p-3 text-center">
                <h2 className="text-sm font-semibold text-gray-700">{item.author}</h2>
            </div>
        </motion.div>
    );
};

export default Card;