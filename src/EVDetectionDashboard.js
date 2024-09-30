import React, { useState } from 'react';

const EVDetectionDashboard = () => {
  const [liveInfo, setLiveInfo] = useState({
    confidenceThreshold: 0.85,
    electricalCurrent: 5.2,
    distance: 45,
    detectedClass: 'Car'
  });

  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">EV Detection System Dashboard</h1>
      
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="bg-gray-900 aspect-video flex items-center justify-center mb-4 rounded-lg">
            <div className="text-gray-600 text-6xl">📷</div>
          </div>
          <div className="flex gap-4 mb-4">
            <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-full">
              Start Stream
            </button>
            <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-full">
              Stop Stream
            </button>
            <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-full">
              Capture Image
            </button>
          </div>
          <button className="w-full bg-blue-100 text-blue-700 py-2 px-4 rounded">
            Browse files...
          </button>
        </div>
        
        <div className="w-64 space-y-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Live Information</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Confidence:</span>
                <span className="bg-blue-100 px-2 rounded">{liveInfo.confidenceThreshold * 100}%</span>
              </div>
              <div className="flex justify-between">
                <span>Current:</span>
                <span className="bg-blue-100 px-2 rounded">{liveInfo.electricalCurrent}A</span>
              </div>
              <div className="flex justify-between">
                <span>Distance:</span>
                <span className="bg-blue-100 px-2 rounded">{liveInfo.distance}cm</span>
              </div>
              <div className="flex justify-between">
                <span>Class:</span>
                <span className="bg-blue-100 px-2 rounded">{liveInfo.detectedClass}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Database</h2>
            <p className="text-sm mb-3">Last capture: 2024-09-28 15:30:45</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-purple-500 text-white py-2 px-4 rounded">
                View Stored
              </button>
              <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVDetectionDashboard;
