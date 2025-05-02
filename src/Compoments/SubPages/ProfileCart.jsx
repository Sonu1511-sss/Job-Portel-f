import React from 'react';
import { FaUserFriends, FaEye, FaUserCircle } from 'react-icons/fa';
import CountUp from 'react-countup';

const ProfileCard = () => {
  return (
    <div className="bg-gray-800 mt-4 text-white p-6 rounded-lg shadow-md w-80 mx-auto">
   <a href="/edit-profile"><img src="\public\assids\shubha.jpeg" alt="Profile" className="rounded-full w-24 h-24 mx-auto" />
   </a>        <h2 className="text-center mt-2 font-bold text-lg">Shubham Uprade</h2>
      <p className="text-center text-sm text-gray-300">UI/UX Designer</p>

      {/* Stats Section */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaUserFriends className="text-blue-500" />
            <span>Connections</span>
          </div>
          <CountUp end={124} duration={2} className="text-lg font-semibold" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaEye className="text-green-500" />
            <span>Profile Views</span>
          </div>
          <CountUp end={512} duration={2} className="text-lg font-semibold" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-purple-500" />
            <span>Niche Views</span>
          </div>
          <CountUp end={83} duration={2} className="text-lg font-semibold" />
        </div>
      </div>

      {/* Links */}
      <div className="mt-4 text-center">
        <a
          href="/profile"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-full transition-all duration-300"
        >
          View My Profile
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
