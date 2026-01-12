import Link from "next/link";
import Image from "next/image";

// Simple icons component to avoid external dependencies for this demo
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.JSX.Element> = {
    camera: <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />,
    aperture: <circle cx="12" cy="12" r="10" />,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    film: <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />,
    globe: <circle cx="12" cy="12" r="10" />,
    arrow: <line x1="5" y1="12" x2="19" y2="12" />,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name] || icons.camera}
      {name === 'camera' && <circle cx="12" cy="13" r="4" />}
    </svg>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-orange-200">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Icon name="camera" className="w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">
              VintagePic
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/signin" className="hidden sm:block text-stone-900 font-medium hover:underline decoration-orange-500 underline-offset-4">
              Log in
            </Link>
            <Link href="/signup" className="px-6 py-2.5 bg-stone-900 text-[#FDFBF7] rounded-full font-medium hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/20 transition-all duration-300">
              Join Community
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              The Golden Era Reimagined
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight">
              Develop <br />
              <span className="text-orange-600 italic">your</span> story.
            </h1>

            <p className="text-xl text-stone-600 max-w-lg leading-relaxed">
              A curated community for the analog soul in a digital world. Share moments, not just pixels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/signup" className="px-8 py-4 bg-orange-600 text-white rounded-full text-lg font-semibold shadow-xl shadow-orange-600/20 hover:bg-orange-700 hover:scale-[1.02] transition-all duration-300 text-center">
                Start Capturing
              </Link>
              <Link href="#gallery" className="px-8 py-4 bg-white border border-stone-200 text-stone-900 rounded-full text-lg font-semibold hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 text-center flex items-center justify-center gap-2 group">
                View Gallery <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-stone-200/60">
              <div>
                <p className="text-3xl font-serif font-bold text-stone-900">2M+</p>
                <p className="text-sm text-stone-500 uppercase tracking-wider">Visuals</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-stone-900">50k</p>
                <p className="text-sm text-stone-500 uppercase tracking-wider">Artists</p>
              </div>
            </div>
          </div>

          {/* Right Visual (Polaroid Stack) */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl"></div>

            {/* Polaroid 1 */}
            <div className="absolute top-10 right-10 bg-white p-3 pb-12 shadow-2xl rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 cursor-pointer w-64 transform hover:scale-105">
              <div className="relative h-64 w-full bg-stone-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <Image src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&h=800&q=80" alt="Mountain" fill className="object-cover" />
              </div>
              <div className="font-handwriting text-stone-600 text-center mt-4 rotate-[-2deg]">Swiss Alps, '89</div>
            </div>

            {/* Polaroid 2 */}
            <div className="absolute top-32 left-10 bg-white p-3 pb-12 shadow-2xl -rotate-3 hover:rotate-0 hover:z-20 transition-all duration-500 cursor-pointer w-72 transform hover:scale-105">
              <div className="relative h-72 w-full bg-stone-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&h=800&q=80" alt="Camera" fill className="object-cover" />
              </div>
              <div className="font-handwriting text-stone-600 text-center mt-4">Summer Vibes</div>
            </div>

            {/* Polaroid 3 */}
            <div className="absolute bottom-10 right-20 bg-white p-3 pb-12 shadow-2xl rotate-12 hover:rotate-0 hover:z-20 transition-all duration-500 cursor-pointer w-60 transform hover:scale-105">
              <div className="relative h-60 w-full bg-stone-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <Image src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&h=800&q=80" alt="Friends" fill className="object-cover" />
              </div>
              <div className="font-handwriting text-stone-600 text-center mt-4">Roadtrip</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Text - CSS animation would be added in globals.css, simulating static here */}
      <div className="bg-stone-900 text-[#FDFBF7] py-4 overflow-hidden whitespace-nowrap">
        <div className="flex gap-12 font-serif italic text-2xl opacity-80">
          <span>Film Photography</span> • <span>Digital Nostalgia</span> • <span>Community</span> • <span>Art Direction</span> • <span>Visual Storytelling</span> • <span>Film Photography</span> • <span>Digital Nostalgia</span>
        </div>
      </div>

      {/* Gallery Grid */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-stone-900">Curated Moments</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">Shot on film, captured digitally. Explore the best works from our creators.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&h=1000&q=80",
              "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&h=1000&q=80",
              "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=800&h=1000&q=80",
              "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=800&h=1000&q=80",
              "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&h=1000&q=80",
              "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&h=1000&q=80"
            ].map((src, i) => (
              <div key={i} className="break-inside-avoid group cursor-pointer">
                <div className="relative bg-white p-4 shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
                    <Image src={src} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-stone-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View</span>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-between items-center border-t border-stone-100 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-stone-300"></div>
                      <span className="text-sm font-medium text-stone-600">@creator_{i + 1}</span>
                    </div>
                    <button className="text-stone-400 hover:text-red-500 transition-colors">
                      <Icon name="heart" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Dark Mode Block */}
      <section id="features" className="py-24 px-6 bg-[#1a1917] text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Ready to join the <br />resistance?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join 50,000+ photographers who have found their home. <br />
            No credit card required. Just art.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />
            <button className="px-8 py-4 bg-orange-900 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-16 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-900 rounded flex items-center justify-center text-white">
              <Icon name="camera" className="w-4 h-4" />
            </div>
            <span className="text-xl font-serif font-bold text-stone-900">VintagePic</span>
          </div>

          <div className="flex gap-8 text-stone-500 text-sm font-medium">
            <Link href="#" className="hover:text-stone-900 transition-colors">Manifesto</Link>
            <Link href="#" className="hover:text-stone-900 transition-colors">Careers</Link>
            <Link href="#" className="hover:text-stone-900 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-stone-900 transition-colors">Instagram</Link>
          </div>

          <p className="text-stone-400 text-sm">© 2025 VintagePic Inc.</p>
        </div>
      </footer>
    </div>
  );
}