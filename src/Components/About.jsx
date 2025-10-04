import React from "react";

export const About = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      {/* Introduction Section */}
      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-7">
          Every journey begins with a single step. Whether you are aiming to start
          a career, a project, or personal development, understanding the “why” behind
          your actions is crucial. This page will guide you step by step on how to
          start, where to start, and what to focus on, with practical tips and insights.
        </p>
      </section>

      {/* How to Start Section */}
      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">How to Start</h2>
        <p className="text-gray-700 leading-7 mb-4">
          The first step is always the hardest. You need clarity about your goals and
          understanding your current position. Ask yourself:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>What am I passionate about?</li>
          <li>What skills do I already have?</li>
          <li>Where do I want to see myself in 1, 3, or 5 years?</li>
          <li>What resources can I access today to move forward?</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Once you answer these questions, you’ll have a roadmap to follow. Remember,
          clarity leads to focus, and focus leads to results.
        </p>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Guide</h2>
        <p className="text-gray-700 leading-7 mb-4">
          Let’s break the journey into manageable steps:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <strong>Research:</strong> Understand the field or goal you want to pursue.
            Read articles, watch tutorials, and study successful examples.
          </li>
          <li>
            <strong>Learn the Basics:</strong> Start with fundamental skills and knowledge.
            Focus on building a strong foundation before advancing.
          </li>
          <li>
            <strong>Practice Consistently:</strong> Skills grow with daily practice.
            Small, consistent effort beats occasional bursts of work.
          </li>
          <li>
            <strong>Build Projects:</strong> Apply what you learn by creating projects.
            Projects make your learning tangible and showcase your abilities.
          </li>
          <li>
            <strong>Seek Feedback:</strong> Share your work with mentors or peers.
            Constructive feedback accelerates growth.
          </li>
          <li>
            <strong>Improve and Iterate:</strong> Learn from mistakes, improve continuously,
            and don’t be afraid to pivot when necessary.
          </li>
        </ol>
      </section>

      {/* Tips Section */}
      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Tips for Success</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Stay consistent and disciplined in your routine.</li>
          <li>Break large tasks into small, achievable goals.</li>
          <li>Learn from failures rather than fearing them.</li>
          <li>Network and learn from people who are already successful.</li>
          <li>Maintain a growth mindset and embrace challenges.</li>
          <li>Take care of your physical and mental health along the way.</li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-7">
          Starting something new can be overwhelming, but the key is to start small
          and remain consistent. Every expert was once a beginner, and every journey
          starts with one step. Keep learning, keep growing, and focus on your vision.
        </p>
        <p className="text-gray-700 mt-4">
          Remember, success is not just about speed—it’s about persistence, clarity,
          and the willingness to improve every day. Your journey begins today.
        </p>
      </section>
    </div>
  );
};
