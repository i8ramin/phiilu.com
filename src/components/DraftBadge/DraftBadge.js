import React from 'react';

const DraftBadge = ({ isPublished }) => {
  if (isPublished) return null;
  return (
    <div
      className="absolute px-8 py-1 font-semibold tracking-tight text-red-800 uppercase bg-red-200 rounded-md shadow-lg"
      style={{ top: -50, right: 0 }}>
      Draft
    </div>
  );
};

export default DraftBadge;
