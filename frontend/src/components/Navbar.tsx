import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between bg-black text-slate-200 px-6 py-4 h-16">
            <div className="text-lg font-bold">VideoSaver</div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#" className="hover:text-white">Video</a>
            </div>

        </nav>
    );
};

export default Navbar;
