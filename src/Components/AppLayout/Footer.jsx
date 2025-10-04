export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-sky-600 to-purple-600 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Column 1 - Logo / About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Movix</h2>
          <p className="text-gray-200 text-sm">
            Your ultimate movie hub. Discover, watch, and review your favorite films.
          </p>
        </div>

        {/* Column 2 - Movies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Movies</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Now Showing</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Upcoming</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Top Rated</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Genres</li>
          </ul>
        </div>

        {/* Column 3 - About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Our Story</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Team</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>

        {/* Column 4 - Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">FAQs</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-yellow-300 cursor-pointer transition-colors">Feedback</li>
          </ul>
        </div>

        {/* Column 5 - Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <i className="fa-brands fa-facebook-f text-gray-200 hover:text-yellow-300 cursor-pointer transition-colors"></i>
            <i className="fa-brands fa-twitter text-gray-200 hover:text-yellow-300 cursor-pointer transition-colors"></i>
            <i className="fa-brands fa-instagram text-gray-200 hover:text-yellow-300 cursor-pointer transition-colors"></i>
            <i className="fa-brands fa-youtube text-gray-200 hover:text-yellow-300 cursor-pointer transition-colors"></i>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-6 pt-4 text-center text-gray-300 text-sm md:pb-10">
        &copy; {new Date().getFullYear()} Movix. All rights reserved.
      </div>
    </footer>
  );
};
