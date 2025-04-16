import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../contexts/FeedbackContext";

const FeedbackForm = () => {
  const [category, setCategory] = useState("Product Features");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { setFeedbackUpdated } = useFeedback();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/feedback", {
        userId: user.sub,
        category,
        rating,
        comments,
      });
      alert("Feedback submitted!");
      setComments("");
      setFeedbackUpdated(true);
      navigate("/view-feedback");
    } catch (err) {
      alert("Error submitting feedback");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-10 sm:p-16 space-y-10 animate-fade-in border border-gray-100"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 tracking-tight">
          ✨ Share Your Feedback
        </h2>

        <div>
          <label className="block text-xl font-semibold text-gray-700 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white border border-gray-300 focus:ring-4 focus:ring-purple-200 focus:border-purple-400 rounded-xl px-4 py-3 text-gray-700 text-lg transition"
          >
            <option>Product Features</option>
            <option>Product Pricing</option>
            <option>Product Usability</option>
          </select>
        </div>

        <div>
          <label className="block text-xl font-semibold text-gray-700 mb-2">Rating (1 to 5)</label>
          <input
            type="number"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            className="w-full bg-white border border-gray-300 focus:ring-4 focus:ring-purple-200 focus:border-purple-400 rounded-xl px-4 py-3 text-gray-700 text-lg transition"
          />
        </div>

        <div>
          <label className="block text-xl font-semibold text-gray-700 mb-2">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="6"
            placeholder="Write your thoughts here..."
            className="w-full bg-white border border-gray-300 focus:ring-4 focus:ring-purple-200 focus:border-purple-400 rounded-xl px-4 py-3 text-gray-700 text-lg resize-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 shadow-md"
        >
          🚀 Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
