import React, { useEffect, useState } from "react";

export const Portal = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("https://movix-cd636-default-rtdb.firebaseio.com/feedbacks.json");
        const data = await res.json();

        if (data) {
          const list = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setFeedbacks(list);
        } else {
          setFeedbacks([]);
        }
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <h2 className="text-center text-xl mt-10">Loading feedbacks...</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center"> User Feedbacks</h1>

      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-500">No feedbacks found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Message</th>
                <th className="py-2 px-4 border">Rating</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">User Email</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((f, index) => (
                <tr key={f.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border text-center">{index + 1}</td>
                  <td className="py-2 px-4 border">{f.name}</td>
                  <td className="py-2 px-4 border">{f.email}</td>
                  <td className="py-2 px-4 border">{f.category}</td>
                  <td className="py-2 px-4 border">{f.message}</td>
                  <td className="py-2 px-4 border text-center">{f.rating}</td>
                  <td className="py-2 px-4 border text-yellow-600 font-semibold">{f.status}</td>
                  <td className="py-2 px-4 border">{f.userEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
