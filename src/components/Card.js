import React from "react";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai"; // Delete icon

const Card = (props) => {
    const { item, } = props
    return (
        <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center m-1"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
        >
                <img
                    src={item.download_url}
                    alt={item.author}
                    className="w-full h-50 object-cover"
                />
                <div className="p-2 flex justify-between items-center">
                    <h2 className="text-sm font-semibold mx-2">{item.author}</h2>
                    <button
                        className="bg-red-500 text-white px-2 py-1 text-xs rounded"
                    >
                        <AiFillDelete />
                    </button>
                </div>
 
        </motion.div>
    );
};

export default Card;