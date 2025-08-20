// import React from 'react';
// import fileService from '../appwrite/files';
// import { Link } from 'react-router-dom';

// function PostCard({ $id, title, featuredImage }) {
  

//   return (
//     <Link to={`/post/${$id}`}>
//       <div
//         className="bg-black border border-yellow-500/40 rounded-lg overflow-hidden 
//                    shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] 
//                    transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//       >
//         {/* Image */}
//         <div className="overflow-hidden">
//           <img
//             src={fileService.filePreview(featuredImage).toString()}
//             alt={title}
//             className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
//           />
          
//         </div>

//         {/* Title */}
//         <h2 className="p-4 text-lg font-semibold text-yellow-400 tracking-wide hover:text-yellow-300 transition-colors duration-300">
//           {title}
//         </h2>
//       </div>
//     </Link>
//   );
// }

// export default PostCard;


import React, { useState, useEffect } from 'react';
import fileService from '../appwrite/files';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    async function fetchPreview() {
      try {
        const url = await fileService.filePreview(featuredImage); // returns the URL
        setPreviewUrl(url); // set the state
      } catch (error) {
        console.error('Error fetching preview:', error);
      }
    }

    if (featuredImage) fetchPreview();
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div
        className="bg-black border border-yellow-500/40 rounded-lg overflow-hidden 
                   shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] 
                   transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      >
        {/* Image */}
        <div className="overflow-hidden">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          ) : (
            <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500">
              Loading...
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="p-4 text-lg font-semibold text-yellow-400 tracking-wide hover:text-yellow-300 transition-colors duration-300">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

