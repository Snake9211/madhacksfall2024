// SubmitReportForm.tsx
import React, { useState } from "react";
import { db } from '../firebaseConfig'; 
import { collection, addDoc } from "firebase/firestore";

const Submit: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(""); 
  const [communicationType, setCommunicationType] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phone, setPhoneNumber] = useState(""); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const reportData = {
      title,
      content,
      category,
      communicationType,
      email, 
      phone, 
      reportID: generateUniqueFirestoreId(), // Simple unique ID
      time: Date.now() / 1000 
    };

    try {
      await addDoc(collection(db, "Scam Report"), reportData);
      alert("Report submitted!");
      setTitle(title);
      setContent(content);
      setCategory(category);
      setCommunicationType(communicationType);
      setEmail(email); 
      setPhoneNumber(phone); 
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  function generateUniqueFirestoreId(){
    // Alphanumeric characters
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let autoId = '';
    for (let i = 0; i < 20; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return autoId;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Submit a New Report</h2>

        <label className="block mb-4">
          <span className="text-lg font-semibold">Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-semibold">Content:</span>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
            rows={4}
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-semibold">Category:</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
          >
            <option value="Phishing">Phishing</option>
            <option value="Job">Job</option>
            <option value="Housing">Housing</option>
            <option value="Identity Theft">Identity Theft</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-lg font-semibold">Communication Type:</span>
          <select
            value={communicationType}
            onChange={(e) => setCommunicationType(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
          >
            <option selected hidden >Choose here</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone Call / Text Message</option>
          </select>
        </label>


        <label className="block mb-4">
            <span className="text-lg font-semibold">Scammer Contact: {communicationType}</span>
            <input
                value={content}
                onChange={(e) => {
                if (communicationType === "Email") {
                    setEmail(e.target.value);
                } else if (communicationType === "Phone") {
                    setPhoneNumber(e.target.value);
                }
                //setContent(e.target.value); // Updates content state regardless
                }}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
            />
        </label>


        <button
          type="submit"
          className="w-full py-3 mt-6 bg-red-600 text-white font-semibold rounded-lg text-lg hover:bg-red-700 focus:outline-none focus:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default Submit;
