import React, { useState } from "react";
import { storage } from "../utils/storage";

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    eventType: "",
    guests: "",
    notes: "",
  });

  const services = [
    {
      id: "1",
      name: "Photography",
      description: "Capture your event’s best moments with professional photographers.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      vendors: [
        { id: "p1", name: "LensArt Studio", price: 15000, image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f" },
        { id: "p2", name: "PixelPro Photography", price: 12000, image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0" },
        { id: "p3", name: "Candid Moments", price: 18000, image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e" },
        { id: "p4", name: "Wedding Frames", price: 20000, image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
        { id: "p5", name: "Shutter Kings", price: 17000, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
        { id: "p6", name: "Golden Lens", price: 19000, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
        { id: "p7", name: "Elite Clicks", price: 22000, image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce" },
        { id: "p8", name: "Snap Studio", price: 16000, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
        { id: "p9", name: "Focus Masters", price: 25000, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
        { id: "p10", name: "Dream Shots", price: 14000, image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8" },
      ],
    },
    {
      id: "2",
      name: "Catering",
      description: "Delicious food services tailored to your event’s theme.",
      image: "https://images.unsplash.com/photo-1601050690597-1d936e4b6c41",
      vendors: [
        { id: "c1", name: "Spice & Serve", price: 25000, image: "https://images.unsplash.com/photo-1556911073-52527ac43716" },
        { id: "c2", name: "Tasty Treats", price: 20000, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2" },
        { id: "c3", name: "Royal Feast", price: 28000, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601" },
        { id: "c4", name: "Chef’s Delight", price: 32000, image: "https://images.unsplash.com/photo-1498575207490-3e4cefd3a2c9" },
        { id: "c5", name: "Kitchen Masters", price: 27000, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
        { id: "c6", name: "Food Fusion", price: 23000, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2" },
        { id: "c7", name: "Event Bites", price: 26000, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
        { id: "c8", name: "Feast Factory", price: 21000, image: "https://images.unsplash.com/photo-1604908812949-6e815efcfb7c" },
        { id: "c9", name: "TasteHub", price: 29500, image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38" },
        { id: "c10", name: "Elite Catering Co.", price: 31000, image: "https://images.unsplash.com/photo-1532634896-26909d0d4b49" },
      ],
    },
    {
      id: "3",
      name: "Convention Hall",
      description: "Spacious, well-equipped venues for weddings and parties.",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
      vendors: [
        { id: "h1", name: "Grand Palace Hall", price: 30000, image: "https://images.unsplash.com/photo-1591608516485-8f0f4dd2c93e" },
        { id: "h2", name: "Regal Banquets", price: 35000, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
        { id: "h3", name: "Emerald Hall", price: 28000, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
        { id: "h4", name: "Sunset Pavilion", price: 32000, image: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6" },
        { id: "h5", name: "Pearl Grand", price: 40000, image: "https://images.unsplash.com/photo-1549887534-3db1bd59dcca" },
        { id: "h6", name: "Celebration Hall", price: 33000, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2" },
        { id: "h7", name: "Galaxy Convention", price: 29000, image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357" },
        { id: "h8", name: "Skyline Banquet", price: 37000, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf" },
        { id: "h9", name: "DreamVenue", price: 31000, image: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6" },
        { id: "h10", name: "Diamond Palace", price: 45000, image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1" },
      ],
    },
    {
      id: "4",
      name: "Decoration",
      description: "Elegant and theme-based decor for all occasions.",
      image: "https://images.unsplash.com/photo-1529634896281-1a2d7e1a0bb3",
      vendors: [
        { id: "d1", name: "Floral Fiesta", price: 12000, image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d5" },
        { id: "d2", name: "Dream Décor", price: 10000, image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92" },
        { id: "d3", name: "Sparkle Events", price: 15000, image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b" },
        { id: "d4", name: "Elegant Designs", price: 16000, image: "https://images.unsplash.com/photo-1529634896281-1a2d7e1a0bb3" },
        { id: "d5", name: "Royal Décor", price: 18000, image: "https://images.unsplash.com/photo-1601050690597-1d936e4b6c41" },
        { id: "d6", name: "BloomCraft", price: 14000, image: "https://images.unsplash.com/photo-1597007518671-3e8b8cc9c3c1" },
        { id: "d7", name: "Artistic Aura", price: 13000, image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e" },
        { id: "d8", name: "Event Decorators", price: 17000, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
        { id: "d9", name: "Decor Dynasty", price: 19000, image: "https://images.unsplash.com/photo-1597007518671-3e8b8cc9c3c1" },
        { id: "d10", name: "Glamour Events", price: 20000, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
      ],
    },
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: storage.generateId(),
      vendorName: selectedVendor.name,
      serviceType: selectedVendor.serviceType,
      ...formData,
      dateBooked: new Date().toLocaleString(),
    };
    storage.addBooking(newBooking);
    alert("✅ Booking Confirmed!");
    setSelectedVendor(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      location: "",
      eventType: "",
      guests: "",
      notes: "",
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Our Services</h1>
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl shadow-lg p-4">
            <img src={service.image} alt={service.name} className="rounded-xl h-48 w-full object-cover" />
            <h2 className="text-xl font-semibold mt-3">{service.name}</h2>
            <p className="text-gray-600 mb-3">{service.description}</p>
            <button
              onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {selectedService?.id === service.id ? "Hide Vendors" : "View Vendors"}
            </button>

            {selectedService?.id === service.id && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.vendors.map((vendor) => (
                  <div key={vendor.id} className="p-3 border rounded-xl shadow-sm bg-gray-50">
                    <img src={vendor.image} alt={vendor.name} className="rounded-lg h-32 w-full object-cover" />
                    <h3 className="font-semibold mt-2">{vendor.name}</h3>
                    <p className="text-gray-500">💰 ₹{vendor.price}</p>
                    <button
                      onClick={() => setSelectedVendor({ ...vendor, serviceType: service.name })}
                      className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-center text-blue-700">
              Book {selectedVendor.name}
            </h2>
            <form onSubmit={handleBookingSubmit} className="flex flex-col gap-2">
              <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border p-2 rounded" />
              <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border p-2 rounded" />
              <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border p-2 rounded" />
              <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="border p-2 rounded" />
              <input type="text" placeholder="Event Location" required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="border p-2 rounded" />
              <input type="text" placeholder="Event Type (Wedding, Birthday, etc.)" required value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} className="border p-2 rounded" />
              <input type="number" placeholder="No. of Guests" required value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} className="border p-2 rounded" />
              <textarea placeholder="Special Notes" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="border p-2 rounded" />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Confirm Booking</button>
              <button type="button" onClick={() => setSelectedVendor(null)} className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
