export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white px-6 md:px-12 py-16 space-y-16" >
      {/* CTA Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="text-xl font-light">
          <p>We would love to hear from you.</p>
          <p>Let’s work — together with <span className="font-semibold">Colstic©</span></p>
        </div>
        <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
          contact us
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-white font-medium mb-2">Business requires</h4>
          <p className="text-gray-400">hello@colstic.com</p>
          <p className="text-gray-400">+27 123 456 789</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Open positions</h4>
          <ul className="text-gray-400 space-y-1">
            <li>Junior Graphic Design</li>
            <li>Videography</li>
            <li>Photography</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">London</h4>
          <p className="text-gray-400">
            133A Rye lane<br />
            London SE15 4BQ<br />
            UK
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Cape town</h4>
          <p className="text-gray-400">
            14 Upper pepper street<br />
            CBD, 8001<br />
            Cape Town
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-white font-light">Colstic©</p>
        <div className="flex gap-6 text-white font-medium">
          <a href="#">DRIBBBLE</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
}
