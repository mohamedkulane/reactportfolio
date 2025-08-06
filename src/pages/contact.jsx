function Contact(){
    return <>

    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-md">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p>
              Feel free to reach out to us with any questions or inquiries. We're always happy to help!
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Email</h4>
          <a href="mailto:contact@yourdomain.com" className="text-blue-600 hover:underline">contact me </a>
          </div>

          <div>
            <h4 className="font-semibold">Phone</h4>
    <a href="https://wa.me/252613692550" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline"> Chat on WhatsApp</a>
          </div>

          <div>
            <h4 className="font-semibold">Location</h4>
            <p>Mogadishu, Somalia</p>
          </div>

     
        </div>
      </div>
    </div>




    </>
}
export default Contact