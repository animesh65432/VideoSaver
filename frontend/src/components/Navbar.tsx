'use client'
import React from 'react'
const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between bg-black text-slate-200 px-6 py-4 h-16">
            <div className="text-lg font-bold">YouTubeVideoSaver</div>
            <div className="flex gap-6">
                <a href="/" className="hover:text-white hover:underline">Home</a>
                <a href="/video" className="hover:text-white hover:underline">Video</a>
            </div>

        </nav>
    );
};

export default Navbar;
