import React from 'react';

const ProfileCard = ({ name, title, education, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden font-suse">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xs text-gray-500 mt-1">{education}</p>
      <a href="/about/Profiles">
        <button className="mt-2 text-blue-500 text-sm font-semibold">
          View Profile
        </button>
      </a>
    </div>
  </div>
);

const ProfileGrid = ({profiles}) => {

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;