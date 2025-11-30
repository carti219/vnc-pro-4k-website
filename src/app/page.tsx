"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const galleryImages = [
    { src: "https://i.ibb.co/whn8LCDG/Screenshot-2025-04-28-13-00-40.png", alt: "Live Sports & TV Guide - NFL Network, ESPN, and thousands of channels", caption: "30,000+ Live TV Channels" },
    { src: "https://i.ibb.co/4Z9X02ZN/Screenshot-2025-04-28-13-01-04.png", alt: "Movie Browser - Latest movies including Sonic 3, Den of Thieves 2", caption: "Latest Releases" },
    { src: "https://i.ibb.co/ymvc5dBP/Screenshot-2025-04-28-13-01-23.png", alt: "4K Series Library - Game of Thrones, The Penguin, and more", caption: "Premium 4K Content" },
    { src: "https://i.ibb.co/svSS9HXS/Screenshot-2025-04-28-13-01-39.png", alt: "Pre-installed Apps - TiviMate, Stremio, and more", caption: "Pre-Configured & Ready" },
    { src: "https://i.ibb.co/JWcs7Ywx/Screenshot-2025-04-28-13-02-02.png", alt: "Movies on Demand - Latest releases and classics", caption: "100,000+ Movies & Series" },
    { src: "https://i.ibb.co/dsxhk8xq/Screenshot-2025-04-28-13-05-11.png", alt: "Content Hub - Trending videos and entertainment", caption: "All-in-One Entertainment" },
  ];

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Auto-cycle gallery
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, galleryImages.length]);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="VNC Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#device" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Device
                </Link>
                <Link href="#how-to-order" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  How to Order
                </Link>
                <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
                <Link href="#support" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </Link>
                <Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden sm:flex bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-5 h-9"
              >
                <a href="mailto:vncstream@protonmail.com">Contact Us</a>
              </Button>
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 py-3 space-y-3">
              <Link
                href="#device"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Device
              </Link>
              <Link
                href="#how-to-order"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                How to Order
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#support"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Support
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                FAQ
              </Link>
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full h-10"
                >
                  <a href="mailto:vncstream@protonmail.com">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="device" className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Pre-configured & Ready to Stream
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-4 tracking-tight">
            VNC Pro 4K
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-3 font-light">
            Premium IPTV Streaming Device
          </p>
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Experience unlimited entertainment with our pre-configured VNC Pro 4K device. Over 30,000+ channels and 100,000+ movies and shows, ready to stream.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8 h-12 text-base"
            >
              <a href="mailto:vncstream@protonmail.com">Order via Email</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5 rounded-full px-8 h-12 text-base"
            >
              <a href="#how-to-order">Learn How to Order</a>
            </Button>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[16/10] bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="/device-original.png"
                alt="VNC Pro 4K Streaming Device"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section id="how-to-order" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4 tracking-tight">
              How to Order
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Simple, secure, and completely anonymous ordering process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-[#0071e3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Send Email</h3>
              <p className="text-gray-600 leading-relaxed">
                Contact us at <a href="mailto:vncstream@protonmail.com" className="text-[#0071e3] hover:underline font-medium">vncstream@protonmail.com</a> with your order details and preferred subscription plan.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-[#0071e3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Receive Quote</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll send you a personalized quote including device cost, subscription, and shipping. All information kept confidential.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-[#0071e3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Delivered</h3>
              <p className="text-gray-600 leading-relaxed">
                After payment confirmation, your pre-configured device ships within 24-48 hours. Just plug in and start streaming!
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Privacy guaranteed:</span> We never share customer information. All communications are encrypted.
            </p>
            <Button
              asChild
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8 h-12 text-base"
            >
              <a href="mailto:vncstream@protonmail.com">Start Your Order</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Why Choose VNC Pro 4K?
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Your satisfaction is our priority
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-gray-600">
                Transparent pricing with no activation fees, cancellation charges, or surprise costs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Private</h3>
              <p className="text-sm text-gray-600">
                Your personal information is never shared or stored. Fully encrypted communications.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-600">
                Orders ship within 24-48 hours. Worldwide delivery available.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lifetime Support</h3>
              <p className="text-sm text-gray-600">
                Free technical support for as long as you own your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 tracking-tight">
              What's Included
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Everything you need for unlimited entertainment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                30,000+
              </div>
              <div className="text-lg text-gray-300 mb-2">Live TV Channels</div>
              <div className="text-sm text-gray-500">Sports, News, Movies, Entertainment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                100K+
              </div>
              <div className="text-lg text-gray-300 mb-2">Movies & Series</div>
              <div className="text-sm text-gray-500">Latest releases & classics on demand</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                8K
              </div>
              <div className="text-lg text-gray-300 mb-2">Maximum Quality</div>
              <div className="text-sm text-gray-500">8K, 4K, FHD, HD streaming</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-lg text-gray-300 mb-2">FREE Support</div>
              <div className="text-sm text-gray-500">Always here to help you</div>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Pre-Configured Device</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>VNC Pro 4K with Google TV</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pre-installed streaming apps</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Voice remote included</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ready to use out of the box</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Premium Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>50+ country support (FREE)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Traditional TV Guide (EPG)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Catch-up TV (4 days)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>PPV, UFC, Boxing, F1</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Daily Updates</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Quality & Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>99% server uptime</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Anti-buffering technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lifetime support included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#f5f5f7] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4 tracking-tight">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Flexible pricing based on number of devices. All plans include pre-configured VNC Pro 4K device.
            </p>
          </div>

          {/* Setup Fees */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">One-Time Setup Cost</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-[#0071e3] to-[#0055b3] rounded-3xl p-8 shadow-2xl text-white text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-auto max-w-[90%]">
                  <span className="bg-yellow-400 text-gray-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                    Flat Rate • Any Quantity
                  </span>
                </div>
                <div className="text-6xl font-bold mb-4 mt-2">$100</div>
                <div className="text-2xl font-semibold mb-2">Per Device</div>
                <div className="text-yellow-300 text-xl font-semibold mb-4">
                  + Service Plan Required
                </div>
                <div className="text-blue-100 text-lg mb-6">
                  Includes pre-configured VNC Pro 4K device + professional setup
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-left bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Device Included</div>
                      <div className="text-blue-100 text-sm">VNC Pro 4K box with voice remote</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Pre-Configured</div>
                      <div className="text-blue-100 text-sm">Ready to stream out of the box</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold">Standard Shipping</div>
                      <div className="text-blue-100 text-sm">Worldwide delivery available</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold text-green-300">FREE Shipping on 3+</div>
                      <div className="text-blue-100 text-sm">Order 3 or more devices</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6 space-y-2">
              <p className="text-base font-semibold text-gray-900">
                Total Cost = Setup ($100/device) + Monthly or Annual Service
              </p>
              <p className="text-sm text-gray-600">
                Choose your service plan below • Service required for streaming
              </p>
            </div>
          </div>

          {/* Service Plan Required Callout */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-[#0071e3] rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Step 2: Choose Your Service Plan</h3>
              </div>
              <p className="text-gray-700">
                After your one-time setup, select either <strong>Monthly</strong> or <strong>Annual</strong> service to start streaming
              </p>
            </div>
          </div>

          {/* Monthly vs Annual Service */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Monthly Service */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">Monthly Service</h3>
                <p className="text-gray-600">Pay as you go, cancel anytime</p>
              </div>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">First Device</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$20</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Main VNC Pro 4K box</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">Additional Device</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$10</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Each extra VNC Pro 4K box</p>
                </div>
                <div className="pb-2">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">Mobile Add-on</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$10</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Per mobile device (phone/tablet)</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full mt-8 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5 rounded-full h-12"
              >
                <a href="mailto:vncstream@protonmail.com?subject=Monthly Service Order">Order Monthly Plan</a>
              </Button>
            </div>

            {/* Annual Service */}
            <div className="bg-gradient-to-b from-[#0071e3] to-[#0055b3] rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">Annual Service</h3>
                <p className="text-blue-100">Save up to 38% with yearly billing</p>
              </div>
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-semibold text-white">First Device</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">$150</div>
                      <div className="text-sm text-blue-100">per year</div>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100">Main VNC Pro 4K box (save $90/year)</p>
                </div>
                <div className="border-b border-white/20 pb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-semibold text-white">Additional Device</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">$90</div>
                      <div className="text-sm text-blue-100">per year</div>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100">Each extra VNC Pro 4K box (save $30/year)</p>
                </div>
                <div className="pb-2">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-lg font-semibold text-white">Mobile Add-on</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">$90</div>
                      <div className="text-sm text-blue-100">per year</div>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100">Per mobile device (save $30/year)</p>
                </div>
              </div>
              <Button
                asChild
                className="w-full mt-8 bg-white text-[#0071e3] hover:bg-gray-100 rounded-full h-12 font-semibold"
              >
                <a href="mailto:vncstream@protonmail.com?subject=Annual Service Order">Order Annual Plan</a>
              </Button>
            </div>
          </div>

          {/* Pricing Example */}
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Example Pricing</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1 Device + Monthly */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">1 Device + Monthly</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup (device + fee):</span>
                    <span className="font-medium">$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly service:</span>
                    <span className="font-medium">$20/mo</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold text-gray-900 text-xs">First month:</span>
                    <span className="font-bold text-[#0071e3]">$120</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900 text-xs">Year 1 total:</span>
                    <span className="font-bold text-[#0071e3]">$340</span>
                  </div>
                </div>
              </div>

              {/* 1 Device + Annual */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">1 Device + Annual</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup (device + fee):</span>
                    <span className="font-medium">$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual service:</span>
                    <span className="font-medium">$150/yr</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold text-gray-900 text-xs">First year:</span>
                    <span className="font-bold text-[#0071e3]">$250</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span className="font-semibold text-xs">You save:</span>
                    <span className="font-bold">$90</span>
                  </div>
                </div>
              </div>

              {/* 2 Devices + Monthly */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">2 Devices + Monthly</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup (2x $100):</span>
                    <span className="font-medium">$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly service:</span>
                    <span className="font-medium">$30/mo</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold text-gray-900 text-xs">First month:</span>
                    <span className="font-bold text-[#0071e3]">$230</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900 text-xs">Year 1 total:</span>
                    <span className="font-bold text-[#0071e3]">$560</span>
                  </div>
                </div>
              </div>

              {/* 2 Devices + Annual */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">2 Devices + Annual</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup (2x $100):</span>
                    <span className="font-medium">$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual service:</span>
                    <span className="font-medium">$240/yr</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold text-gray-900 text-xs">First year:</span>
                    <span className="font-bold text-[#0071e3]">$440</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span className="font-semibold text-xs">You save:</span>
                    <span className="font-bold">$120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">
              All devices come pre-configured with your IPTV subscription ready to use
            </p>
            <p className="text-sm text-gray-500">
              Setup fee is one-time only • Service billed monthly or annually
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 tracking-tight">
              Why Switch to VNC Pro 4K?
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              Save thousands per year compared to traditional cable and streaming services
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Traditional Cable */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Traditional Cable</h3>
                <div className="text-gray-400 text-sm">Average annual cost</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Basic package:</span>
                  <span className="text-white font-medium">$100/mo</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Premium channels:</span>
                  <span className="text-white font-medium">$50/mo</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">DVR service:</span>
                  <span className="text-white font-medium">$20/mo</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Equipment fees:</span>
                  <span className="text-white font-medium">$15/mo</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold text-lg">Annual Total:</span>
                  <span className="font-bold text-2xl text-red-400">$2,220</span>
                </div>
              </div>
              <div className="text-center text-gray-400 text-sm space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Limited content</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>No PPV included</span>
                </div>
              </div>
            </div>

            {/* Multiple Streaming Services */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Multiple Streaming</h3>
                <div className="text-gray-400 text-sm">Average annual cost</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Netflix Premium:</span>
                  <span className="text-white font-medium">$23/mo</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Hulu + Live TV:</span>
                  <span className="text-white font-medium">$77/mo</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Disney+:</span>
                  <span className="text-white font-medium">$14/mo</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">HBO Max:</span>
                  <span className="text-white font-medium">$16/mo</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold text-lg">Annual Total:</span>
                  <span className="font-bold text-2xl text-red-400">$1,560</span>
                </div>
              </div>
              <div className="text-center text-gray-400 text-sm space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Multiple apps needed</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>No live sports PPV</span>
                </div>
              </div>
            </div>

            {/* VNC Pro 4K */}
            <div className="bg-gradient-to-b from-[#0071e3] to-[#0055b3] rounded-3xl p-8 relative border-4 border-yellow-400 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Best Value
                </span>
              </div>
              <div className="text-center mb-6 mt-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">VNC Pro 4K</h3>
                <div className="text-blue-100 text-sm">Annual cost</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-blue-100">Setup (device + fee):</span>
                  <span className="text-white font-medium">$100</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-blue-100">Annual service:</span>
                  <span className="text-white font-medium">$150/yr</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-blue-100">Additional fees:</span>
                  <span className="text-white font-medium">$0</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-blue-100">PPV Access:</span>
                  <span className="text-white font-medium">FREE</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold text-lg">First Year Total:</span>
                  <span className="font-bold text-3xl text-yellow-300">$250</span>
                </div>
              </div>
              <div className="text-center text-white text-sm font-medium space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30,000+ channels</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100K+ VOD • 50+ countries • PPV included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-2 border-yellow-400/50 rounded-2xl p-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Save Up to <span className="text-yellow-400">$1,920+</span> Per Year!
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              That's enough savings to buy a new TV, take a vacation, or invest in your future
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="w-10 h-10 mb-3 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">All Content, One Platform</h4>
                <p className="text-gray-400 text-sm">
                  No need for multiple subscriptions. Get everything in one place with VNC Pro 4K.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="w-10 h-10 mb-3 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">50+ Countries Available</h4>
                <p className="text-gray-400 text-sm">
                  Request channels from any country at no extra charge. We support international content.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="w-10 h-10 mb-3 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">PPV Events Included</h4>
                <p className="text-gray-400 text-sm">
                  Watch major sporting events and pay-per-view content without additional fees.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="w-10 h-10 mb-3 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Premium Performance</h4>
                <p className="text-gray-400 text-sm">
                  Anti-buffering technology and premium servers ensure smooth, reliable streaming.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button
                asChild
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded-full px-8 h-12 text-lg font-semibold"
              >
                <a href="mailto:vncstream@protonmail.com">Start Saving Today</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action Gallery */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4 tracking-tight">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Explore the VNC Pro 4K interface and discover endless entertainment
            </p>
          </div>

          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gallery Container */}
            <div className="relative aspect-[16/9] bg-black rounded-3xl overflow-hidden shadow-2xl">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg md:text-2xl font-semibold text-center">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide
                      ? 'bg-[#0071e3] w-8 h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Pause Indicator */}
            {isPaused && (
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  Paused • Click arrows or dots to navigate
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4 tracking-tight">
              Support & Setup
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              We're here to help you every step of the way
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                Easy Setup Process
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Unbox & Connect</h4>
                    <p className="text-gray-600">Connect the VNC Pro 4K to your TV via HDMI and power it on.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Connect to WiFi</h4>
                    <p className="text-gray-600">Follow the on-screen prompts to connect to your home network.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Start Streaming</h4>
                    <p className="text-gray-600">Everything is pre-configured. Just open the app and enjoy!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#0071e3] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Setup Takes Less Than 5 Minutes
              </h3>
              <p className="text-gray-600 mb-6">
                No technical knowledge required. If you can plug in a cable, you can set this up!
              </p>
              <Button
                asChild
                variant="outline"
                className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5 rounded-full"
              >
                <a href="mailto:vncstream@protonmail.com">Get Setup Help</a>
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#0071e3] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Email Support</h3>
              <p className="text-gray-600 mb-4">
                Get help anytime via email. We respond within 2 hours.
              </p>
              <a href="mailto:vncstream@protonmail.com" className="text-[#0071e3] hover:underline font-medium">
                vncstream@protonmail.com
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#0071e3] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote Assistance</h3>
              <p className="text-gray-600 mb-4">
                Need help? We can remotely guide you through any issue.
              </p>
              <span className="text-gray-500">Available via email upon request</span>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#0071e3] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step video guides available if needed.
              </p>
              <span className="text-gray-500">Available via email upon request</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#f5f5f7] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Everything you need to know before ordering
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is IPTV?
              </h3>
              <p className="text-gray-600">
                IPTV (Internet Protocol Television) is a streaming service that delivers live TV channels,
                movies, and shows over the internet instead of traditional cable or satellite. With IPTV, you get
                access to thousands of channels and on-demand content from around the world, all through your internet
                connection. It's more affordable, offers more content, and works on multiple devices.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What comes in the box?
              </h3>
              <p className="text-gray-600">
                You'll receive the VNC Pro 4K streaming device, voice remote with batteries, HDMI cable, and power adapter. The device comes pre-configured with your IPTV subscription ready to use immediately.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I order?
              </h3>
              <p className="text-gray-600">
                Simply email us at <a href="mailto:vncstream@protonmail.com" className="text-[#0071e3] hover:underline">vncstream@protonmail.com</a> with
                your preferred plan (monthly or annual) and how many devices you need. We'll respond with payment
                instructions and shipping details. All customer information is kept strictly confidential.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I see a full channel list?
              </h3>
              <p className="text-gray-600 mb-3">
                Due to the massive scale of our service—<strong>over 30,000 live TV channels</strong>—providing a complete channel list would be impractical. In the United States alone, we offer <strong>10,000+ channels</strong>, with thousands more from 50+ countries worldwide.
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Need to verify specific channels?</strong> Simply email us at <a href="mailto:vncstream@protonmail.com" className="text-[#0071e3] hover:underline">vncstream@protonmail.com</a> with your list of desired channels (up to 20 channels per inquiry), and we'll confirm their availability for you within 24 hours.
              </p>
              <p className="text-gray-600">
                Popular networks like ESPN, CNN, HBO, local news stations, international sports channels, and niche programming are all available. If it's broadcast anywhere, chances are we have it!
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Recommended internet speed?
              </h3>
              <p className="text-gray-600">
                A stable Internet connection is recommended, with speeds of 30 Mbps or greater for optimal streaming quality.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How to renew my subscription?
              </h3>
              <p className="text-gray-600">
                We'll send you a reminder email before your subscription expires with renewal instructions.
                You can also renew at any time by contacting us at <a href="mailto:vncstream@protonmail.com" className="text-[#0071e3] hover:underline">vncstream@protonmail.com</a>.
                Renewals are quick and easy!
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I have technical issues?
              </h3>
              <p className="text-gray-600">
                Our 24/7 support team is always available via email at <a href="mailto:vncstream@protonmail.com" className="text-[#0071e3] hover:underline">vncstream@protonmail.com</a>.
                We typically respond within 2 hours and can provide remote assistance if needed to resolve any issues.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How to get content from other countries?
              </h3>
              <p className="text-gray-600">
                We support content from 50+ countries at no additional charge! Simply request channels,
                movies, or shows from any country and we'll add them to your service for free. Want UK shows,
                Spanish channels, Asian content, or anything else? Just email us your request!
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What app do I use to watch live TV?
              </h3>
              <p className="text-gray-600">
                We recommend using <span className="font-semibold text-gray-900">TiviMate</span> for watching live TV channels.
                TiviMate provides an excellent user interface with EPG (TV Guide), favorites, recording capabilities,
                and an easy-to-navigate channel list. The app comes pre-installed on your VNC Pro 4K device.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I find sporting events?
              </h3>
              <p className="text-gray-600">
                You can easily find sporting events in TiviMate by using the search option - either by voice or by
                typing in the event name. Alternatively, browse through the specific sporting event categories. For example,
                to watch an NFL game, go to the <span className="font-semibold text-gray-900">NFL PPV</span> category.
                All major sports have dedicated categories for easy navigation including UFC, Boxing, F1, Soccer, and more.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What app do I use to watch movies and shows?
              </h3>
              <p className="text-gray-600">
                For movies and TV shows on demand, we recommend <span className="font-semibold text-gray-900">Stremio</span>.
                Stremio offers a Netflix-like interface with access to our entire library of 100,000+ movies and series.
                Browse by genre, search for specific titles, and enjoy seamless streaming. The app comes pre-installed
                on your device.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does VNC Pro 4K differ from SuperBox or VseeBox?
              </h3>
              <p className="text-gray-600 mb-3">
                VNC Pro 4K offers several key advantages over competitors like SuperBox and VseeBox:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Better Local & International Content:</strong> We offer more local channels and worldwide content from 50+ countries, giving you access to programming that other devices simply don't carry.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Transparent Pricing:</strong> Our pricing is clear and honest—you know exactly what you're paying for with no hidden surprises.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>24/7 Customer Support:</strong> We provide lifetime technical support with quick response times—you'll never be left on your own if you have issues.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Professional Setup:</strong> Every device comes pre-configured by our team, ensuring optimal performance from day one.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are "lifetime IPTV" claims realistic?
              </h3>
              <p className="text-gray-600 mb-3">
                Some competitors advertise "lifetime" or "one-time fee" IPTV service, but this is <strong>extremely unlikely to be sustainable</strong>. Here's why:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span><strong>IPTV Requires Ongoing Costs:</strong> Maintaining servers, bandwidth, channel licenses, and content updates requires continuous operating expenses. No legitimate service can provide "lifetime" access for a one-time fee.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Service Often Stops Working:</strong> Many customers report that "lifetime" devices stop functioning after months or require additional paid renewals, making the "lifetime" claim misleading.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Security Concerns:</strong> Devices claiming "lifetime" service may use unverified software or apps that could pose security risks. Always verify what's running on your device.</span>
                </li>
              </ul>
              <p className="text-gray-600">
                <strong>VNC Pro 4K is honest and transparent:</strong> We charge a fair monthly or annual service fee because that's what it costs to maintain quality servers, regular updates, and reliable customer support. Our customers appreciate knowing exactly what they're paying for with no surprises.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button
              asChild
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8 h-12"
            >
              <a href="mailto:vncstream@protonmail.com">Contact Support</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Ready to Start Streaming?
          </h2>
          <p className="text-2xl text-gray-600 mb-8 font-light">
            Get your pre-configured VNC Pro 4K device today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              asChild
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8 h-12 text-lg"
            >
              <a href="mailto:vncstream@protonmail.com">Order Now via Email</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5 rounded-full px-8 h-12 text-lg"
            >
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Private ordering • Worldwide shipping • 24/7 technical support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#device" className="text-sm text-gray-600 hover:text-gray-900">VNC Pro 4K</Link></li>
                <li><Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Ordering</h4>
              <ul className="space-y-2">
                <li><Link href="#how-to-order" className="text-sm text-gray-600 hover:text-gray-900">How to Order</Link></li>
                <li><a href="mailto:vncstream@protonmail.com" className="text-sm text-gray-600 hover:text-gray-900">Place Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="#support" className="text-sm text-gray-600 hover:text-gray-900">Setup Guide</Link></li>
                <li><a href="mailto:vncstream@protonmail.com" className="text-sm text-gray-600 hover:text-gray-900">Contact Support</a></li>
                <li><Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Contact: <a href="mailto:vncstream@protonmail.com" className="text-[#0071e3] hover:underline">vncstream@protonmail.com</a>
            </p>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} VNC Pro 4K. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
