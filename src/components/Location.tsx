<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

  {/* Google Map */}
<div className="rounded-3xl overflow-hidden shadow-xl h-[450px] bg-red-500">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3808.895399176488!2d78.236439!3d17.3205953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbebddb3b5be17%3A0x80cc09c99cf64491!2sMY%20Farmhouse!5e0!3m2!1sen!2sin!4v1785685717008!5m2!1sen!2sin"
    className="w-full h-full"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
  {/* Information Card */}
  <div className="bg-[#F4FAF3] rounded-3xl p-8 flex flex-col justify-center gap-6 shadow-lg">

    <div>
      <span className="text-[#2E7D32] text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 mb-2">
        <MapPin className="w-3.5 h-3.5" /> Address
      </span>

      <p className="text-[#1B5E20] font-medium text-lg">
        MY Farmhouse
      </p>

      <p className="text-gray-500 mt-2 leading-relaxed">
        Hyderabad, Telangana
      </p>

      <a
        href={MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2E7D32] font-medium mt-3 inline-block hover:underline"
      >
        Open in Google Maps
      </a>
    </div>

    <div className="border-t border-green-200"></div>

    <div>
      <span className="text-[#2E7D32] text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 mb-2">
        <Phone className="w-3.5 h-3.5" /> Phone
      </span>

      <a
        href="tel:+918686465007"
        className="text-[#1B5E20] font-medium text-lg hover:text-[#2E7D32]"
      >
        86864 65007
      </a>
    </div>

    <a
      href={MAPS_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#2E7D32] hover:bg-[#388E3C] text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
    >
      <Navigation className="w-5 h-5" />
      Get Directions
    </a>

  </div>

</div>