import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outdoorImages = [
  "/images/od1.png",
  "/images/od2.png",
  "/images/od3.png",
  "/images/od4.jpeg",
  "/images/od5.jpeg",
  "/images/od6.jpeg",
  "/images/od7.jpeg",
  "/images/od8.jpeg",
  "/images/od9.jpeg",
];

export default function OutdoorGallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysSolid />

      <section className="pt-32 pb-16 px-6 bg-[#F4FAF3]">
        <div className="max-w-7xl mx-auto">

          <Link
            to="/gallery"
            className="text-[#2E7D32] hover:underline text-sm font-medium"
          >
            ← Back to Gallery
          </Link>

          <h1 className="text-4xl font-bold text-[#1B5E20] mt-4">
            Outdoor Activities
          </h1>

          <p className="text-gray-500 mt-3 mb-12">
            Enjoy our outdoor activities and beautiful surroundings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {outdoorImages.map((img, index) => (

              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >

                <img
                  src={img}
                  alt={`Outdoor ${index + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />

              </div>

            ))}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
