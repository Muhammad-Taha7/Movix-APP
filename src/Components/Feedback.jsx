import React, { useState } from "react";
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";
import { getAuth } from "firebase/auth";

export const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    category: "general",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const db = getDatabase();
  const auth = getAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Add feedback to Firebase Realtime Database
      await push(ref(db, "feedbacks"), {
        ...formData,
        userId: auth.currentUser?.uid || "anonymous",
        userEmail: auth.currentUser?.email || formData.email,
        timestamp: serverTimestamp(),
        status: "pending",
      });

      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        rating: 5,
        category: "general",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full mb-4">
            <i className="fa-solid fa-comments text-4xl text-white"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            We Value Your Feedback
          </h1>
          <p className="text-gray-600 text-lg">
            Help us improve by sharing your thoughts and suggestions
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3 animate-[fadeIn_0.3s_ease-in-out]">
            <i className="fa-solid fa-circle-check text-2xl text-green-600"></i>
            <div>
              <h3 className="font-semibold text-green-800">Thank you!</h3>
              <p className="text-green-700">Your feedback has been submitted successfully.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3">
            <i className="fa-solid fa-circle-exclamation text-2xl text-red-600"></i>
            <div>
              <h3 className="font-semibold text-red-800">Error</h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Category Field */}
          <div className="mb-6">
            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
              Feedback Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors bg-white"
            >
              <option value="general">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement Suggestion</option>
              <option value="complaint">Complaint</option>
              <option value="praise">Praise</option>
            </select>
          </div>

          {/* Rating Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3">
              Rate Your Experience <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                  className="group transition-transform hover:scale-110"
                >
                  <i
                    className={`fa-solid fa-star text-4xl transition-colors ${
                      star <= formData.rating
                        ? "text-yellow-400"
                        : "text-gray-300 group-hover:text-yellow-200"
                    }`}
                  ></i>
                </button>
              ))}
              <span className="ml-3 text-2xl font-semibold text-indigo-600 self-center">
                {formData.rating}/5
              </span>
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Your Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              placeholder="Tell us what you think..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-2">{formData.message.length} characters</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {loading ? (
              <>
                <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                Submitting...
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane mr-2"></i>
                Submit Feedback
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
