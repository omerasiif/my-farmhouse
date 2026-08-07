import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysSolid />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-6">Terms & Conditions</h1>

          {/* NOTE card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-[#2E7D32] mb-3">NOTE</h2>
            <p className="text-gray-700 leading-relaxed">Complete fresh water in pools for every customer.</p>
            <p className="text-gray-700 leading-relaxed mt-2">For night cricket lights per hour <span className="font-semibold text-[#1B5E20]">₹500</span> extra.</p>
            <p className="text-gray-700 leading-relaxed mt-2">Incase of power failure, Generator available against fuel from customer.</p>
          </div>

          {/* Items to carry card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-[#2E7D32] mb-3">ITEMS TO CARRY FOR FARM STAY:-</h2>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
              <li>cooking gas</li>
              <li>charcoal</li>
              <li>fire wood</li>
              <li>Dish washing powder</li>
              <li>Disposable items, table cover (Qty as per requirement)</li>
              <li>Please remember to bring your own sports equipments</li>
            </ol>
          </div>

          {/* Rates card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-[#2E7D32] mb-3">RATES:-</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-medium">15,000/- 12hrs</p>
                <p className="text-gray-800 font-medium">20,000/- 24hrs Monday to Friday</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-medium">20,000/- 12hrs</p>
                <p className="text-gray-800 font-medium">25,000/- 24hrs Saturday and Sunday</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700"> </p>

            <p className="mt-6 font-semibold text-[#1B5E20]">**Complete balance to be paid on arrival**</p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <Link to="/" className="text-[#2E7D32] font-medium hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
