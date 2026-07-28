import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface/60 border-t border-outline-variant w-full py-md mt-xl backdrop-blur-md relative z-10">
      <div className="flex justify-between items-center w-full px-lg max-w-[1440px] mx-auto text-sm text-on-surface-variant">
        <div>© 2024 PRPilot AI. Systems operational.</div>
        <div className="flex gap-lg">
          <a className="hover:text-white transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms
          </a>
          <a
            className="hover:bg-card transition-colors flex items-center gap-2"
            href="#"
          >
            <span className="w-2 h-2 rounded-full bg-card"></span> API Status
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
