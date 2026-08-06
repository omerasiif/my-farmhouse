import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roomImages = [
  "/images/room1.png",
  "/images/room2.png",
  "/images/room3.png",

  // Add more room images below whenever you upload them
  // "/images/room4.png",
  // "/images/room5.png",
  // "/images/room6.png",
];

export default function RoomsGallery() {
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
            Rooms Gallery
          </h1>

          <p className="text-gray-500 mt-3 mb-12">
            Explore all room photos of MY Farmhouse.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {roomImages.map((img, index) => (

              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >

                <img
                  src={img}
                  alt={`Room ${index + 1}`}
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
