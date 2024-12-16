const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Ingredion</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Company Overview</a></li>
              <li><a href="#" className="hover:text-blue-300">Leadership Team</a></li>
              <li><a href="#" className="hover:text-blue-300">Careers</a></li>
              <li><a href="#" className="hover:text-blue-300">Investor Relations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Starches</a></li>
              <li><a href="#" className="hover:text-blue-300">Sweeteners</a></li>
              <li><a href="#" className="hover:text-blue-300">Proteins</a></li>
              <li><a href="#" className="hover:text-blue-300">Fibers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Innovation Center</a></li>
              <li><a href="#" className="hover:text-blue-300">Technical Documents</a></li>
              <li><a href="#" className="hover:text-blue-300">Blog</a></li>
              <li><a href="#" className="hover:text-blue-300">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Locations</a></li>
              <li><a href="#" className="hover:text-blue-300">Support</a></li>
              <li><a href="#" className="hover:text-blue-300">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Ingredion Incorporated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

