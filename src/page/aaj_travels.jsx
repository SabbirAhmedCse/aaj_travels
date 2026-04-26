import React, { useState, useEffect } from 'react';
import {
  Plane, FileText, Hotel, DollarSign, Calendar, Shield, Headphones, Menu, X,
  Facebook, Linkedin, Youtube, Instagram, Search, ArrowRightLeft, ChevronLeft, ChevronRight
} from 'lucide-react';
import logo from '../assets/AAJ Travels Logo.svg';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';

export default function AAJTravels() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tripType, setTripType] = useState('one-way');
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlider((prevSlider) => (prevSlider + 1) % 3);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const airlines = [
    { name: 'Biman Bangladesh Airlines', color: '#c41e3a' },
    { name: 'Qatar Airways', color: '#5c0a1e' },
    { name: 'Emirates Airline', color: '#d71a21' },
    { name: 'Thai Airways', color: '#2e2f7c' },
    { name: 'Malaysia Airlines', color: '#0f4c81' },
    { name: 'US-Bangla Airlines', color: '#00a651' },
    { name: 'Cathay Pacific Airline', color: '#006564' },
    { name: 'Turkish Airlines', color: '#c70b1f' },
    { name: 'Air Astra', color: '#1e4d8c' },
    { name: 'Novoair', color: '#f47920' },
    { name: 'Saudi Airlines', color: '#006c35' },
    { name: 'Indigo', color: '#0f3a99' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <img src={logo} alt="AAJ Travels" className="w-10 h-10" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">AAJ Travels</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">Sign In</button>
              <button className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">Sign Up</button>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t pt-4">
              <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-full">Sign In</button>
              <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-full">Sign Up</button>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[420px] sm:h-[480px]">
        {/* Slider Background Images */}
        {[slider1, slider2, slider3].map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url("${src}")`,
              opacity: slider === i ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />

        {/* Slider Navigation Arrows */}
        <button
          onClick={() => setSlider((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setSlider((prev) => (prev + 1) % 3)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setSlider(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${slider === i ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6">
            {/* Tabs */}
            <div className="flex gap-2 sm:gap-3 mb-4 border-b pb-4">
              {[{id:'flight',label:'Flight',icon:Plane},{id:'visa',label:'Visa',icon:FileText},{id:'hotel',label:'Hotel',icon:Hotel}].map(t => {
                const Icon = t.icon;
                return (
                  <button key={t.id} onClick={()=>{}} className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${t.id==='flight'?'bg-gray-100 text-gray-900':'text-gray-500 hover:bg-gray-50'}`}>
                    <Icon size={18} /><span>{t.label}</span>
                  </button>
                );
              })}
            </div>
            {/* Trip Type */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-4">
              {['one-way','round-trip','multi-city'].map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input type="radio" name="trip" checked={tripType===t} onChange={()=>setTripType(t)} className="w-4 h-4 accent-amber-500" />
                  <span>{t==='one-way'?'One Way':t==='round-trip'?'Round Trip':'Multi City'}</span>
                </label>
              ))}
            </div>
            {/* Search Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-3 items-end">
              <div className="lg:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">From</label>
                <input type="text" defaultValue="Dhaka" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400" />
                <span className="text-[10px] text-gray-400">DAC, Hazrat Shahjalal...</span>
              </div>
              <div className="hidden lg:flex justify-center pb-4">
                <button className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white">
                  <ArrowRightLeft size={14} />
                </button>
              </div>
              <div className="lg:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">To</label>
                <input type="text" defaultValue="Cox's Bazar" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400" />
                <span className="text-[10px] text-gray-400">return or Another Airp...</span>
              </div>
              <div className="lg:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">Date</label>
                <input type="text" defaultValue="22 Mar, 2025" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400" />
                <span className="text-[10px] text-gray-400">Saturday</span>
              </div>
              <div className="lg:col-span-2">
                <label className="block text-xs font-medium text-gray-500 mb-1">Options</label>
                <input type="text" placeholder="Bigger saving on return flight" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400" />
              </div>
              <div className="lg:col-span-2 flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Travellers</label>
                  <input type="text" defaultValue="1 Traveller" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400" />
                </div>
                <button className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 flex-shrink-0 mt-5">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3 text-gray-700">
                <DollarSign size={40} strokeWidth={1} />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-1">Best Price Guarantee</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Our Price Guarantee is valid for purchases made within 30 days</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-gray-700">
                <div className="relative">
                  <Plane size={36} strokeWidth={1} className="rotate-[-45deg]" />
                  <Calendar size={14} strokeWidth={1} className="absolute -bottom-0.5 -right-1" />
                </div>
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-1">Booking Easy & Quick</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Book with us today, and let us take care of the details</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-gray-700">
                <Shield size={40} strokeWidth={1} />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-1">Reliable & Safest</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Our 24/7 support team is here to assist you every step of the way</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 text-gray-700">
                <Headphones size={40} strokeWidth={1} />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-1">24/7 Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Our 24/7 support team is here to assist you every step of the way</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airlines Partners */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2">Experience the Best with Our Airlines Partner</h2>
          <p className="text-center text-sm text-gray-500 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Fly with confidence and comfort, knowing that AAJ Travels Connects you with the best airlines in the skies
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {airlines.map((a, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-3 sm:p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white" style={{backgroundColor:a.color}}>
                  <Plane size={18} />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized By */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-10">Authorized by</h2>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-50 border border-gray-200 flex flex-col items-center justify-center">
              <Plane size={20} className="text-red-600 mb-1" />
              <span className="text-[10px] sm:text-xs font-bold text-gray-700">CAAB</span>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-700 flex flex-col items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider">IATA</span>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-50 border border-gray-200 flex flex-col items-center justify-center">
              <span className="text-[10px] sm:text-xs font-bold text-blue-700">ATAB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-12 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="AAJ Travels" className="w-10 h-10" />
                <span className="text-xl font-bold text-gray-900">AAJ Travels</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">AAJ Travels is a privately owned start up Travel Agency in Dhaka, Bangladesh.We are doing Business in Travel & Tourism Sector. AAJ Travels is committed to provide the best possible assistance in realizing your dreams of traveling anywhere in the world.Govt. Approved Travel Agent License No: 12777</p>
              <div className="text-xs text-gray-500 mb-1">Follow us:</div>
              <div className="flex items-center gap-3">
                <Facebook size={18} className="text-gray-700 cursor-pointer hover:text-blue-600" />
                <span className="text-gray-700 cursor-pointer hover:text-gray-900 text-sm font-bold">𝕏</span>
                <Linkedin size={18} className="text-gray-700 cursor-pointer hover:text-blue-700" />
                <Instagram size={18} className="text-gray-700 cursor-pointer hover:text-pink-600" />
                <Youtube size={18} className="text-gray-700 cursor-pointer hover:text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 mb-4">Explore</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="hover:text-gray-900 cursor-pointer">Flights</li>
                <li className="hover:text-gray-900 cursor-pointer">Hotel</li>
                <li className="hover:text-gray-900 cursor-pointer">Visa</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 mb-4">Useful Links</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                <li className="hover:text-gray-900 cursor-pointer">Visa Guide & Application</li>
                <li className="hover:text-gray-900 cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-gray-900 cursor-pointer">Refund & Cancellation</li>
                <li className="hover:text-gray-900 cursor-pointer">Void & Rescheduling Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-2 text-xs text-gray-500 leading-relaxed">
                <p>Ka-1/1 (2nd Floor), Jagannathpur<br/>Bashundhara Road, Vatara<br/>Dhaka-1229</p>
                <p className="pt-2">+8802 6416262, +880171 1907262</p>
                <p>aajtravelsbd@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="border-t border-gray-200 py-8">
            <h3 className="font-bold text-sm text-gray-900 text-center mb-4">Payment Method</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Visa','Mastercard','Amex','bKash','Nagad','Rocket','Upay','Nexus','DBBL'].map((m,i) => (
                <div key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-medium text-gray-600">{m}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-amber-400 py-3">
          <p className="text-center text-xs text-gray-900 font-medium">Copyright © 2018-2025 AAJ Travels. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}