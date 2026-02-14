"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348130935623"
      target="_blank"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-12  right-12 w-12 h-12 rounded-full shadow-lg z-50 animate-bounce"
    >
    <img src="image/whatsapp.svg" alt="WhatsApp" className="w-full h-full" />
    </motion.a>
  );
}
