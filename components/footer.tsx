export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
     <footer className="bg-gradient-to-b from-blue-700 to-blue-900 border-t-2 border-blue-800 mt-auto shadow-inner opacity-75">
      <div className="container mx-auto px-4 py-2 text-center mt-2">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-white">&copy; {currentYear} Smart Sheet Feedback System. All rights reserved.</p>

          <div className="flex space-x-6">
            <a href="#" className="text-sm text-blue-100 hover:text-white">
              FAQs
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white">
              Research
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white">
              Contact
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

