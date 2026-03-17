import React from "react";
import { Heart, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2026 Ayush Yogi. Made with</span>
            <Heart className="text-red-500 fill-red-500" size={16} />
            <span>and creativity</span>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ayushyogi0"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushyogi"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/ayush_yogi09?igsh=b2c1cGY2bWxjdmE5"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
