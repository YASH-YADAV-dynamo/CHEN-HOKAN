// src/NewPage.jsx
import React, { useState } from 'react';

const NewPage = () => {
  const [files, setFiles] = useState([]);

  const handleAddFile = () => {
    document.getElementById('fileInput').click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar for folders */}
      <aside className="w-1/4 bg-gray-800 text-gray-100 p-4 border-r-2 border-gray-600">
        <h2 className="text-xl font-semibold mb-4">Folders</h2>
        <ul>
          <li><a href="#" className="block py-2 hover:text-gray-300">Documents</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300">Images</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300">Videos</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300">Audio</a></li>
        </ul>
      </aside>
      
      {/* Main content area for files */}
      <main className="w-3/4 bg-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Files</h1>
          <button 
            className="bg-gray-600 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" 
            onClick={handleAddFile}
          >
            Add File
          </button>
          <input
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden" // Hide the default file input
          />
        </div>
        <div className="grid grid-cols-4 gap-6">
          {/* Display selected files */}
          {files.map((file, index) => (
            <div className="bg-gradient-to-br from-purple-600 to-purple-400 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center" key={index}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-100 text-sm">{file.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewPage;
