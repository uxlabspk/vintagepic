import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <span className="text-2xl font-bold gradient-text">VintagePic</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Share Your
                <span className="block gradient-text">Moments</span>
                With The World
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Connect with friends, discover amazing photos, and share your story through stunning images on VintagePic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                >
                  Start Sharing Free
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full text-lg font-semibold border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <p className="text-3xl font-bold gradient-text">10M+</p>
                  <p className="text-gray-600 dark:text-gray-400">Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">50M+</p>
                  <p className="text-gray-600 dark:text-gray-400">Photos Shared</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">100M+</p>
                  <p className="text-gray-600 dark:text-gray-400">Likes</p>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4 animate-float">
                  <div className="space-y-4">
                    <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl"></div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">@explorer</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">2.3k likes</p>
                        </div>
                      </div>
                    </div>
                    <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl"></div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl"></div>
                    </div>
                    <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform">
                      <div className="w-full h-48 bg-gradient-to-br from-pink-400 to-red-400 rounded-xl"></div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-400"></div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">@creative</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">5.1k likes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Everything You Need</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              All the features to share and discover amazing moments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📷", title: "Share Photos", description: "Upload and share your best moments with friends and followers" },
              { icon: "❤️", title: "Like & Comment", description: "Engage with the community through likes and meaningful comments" },
              { icon: "#️⃣", title: "Hashtags", description: "Discover content and trends with powerful hashtag system" },
              { icon: "🏷️", title: "Tag Friends", description: "Tag people in your photos and share memories together" },
              { icon: "📍", title: "Locations", description: "Add locations to your photos and explore places around the world" },
              { icon: "👥", title: "Follow System", description: "Build your network by following friends and interesting creators" },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text">Ready to Get Started?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join millions of users sharing their moments on VintagePic
              </p>
              <Link
                href="/signup"
                className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Sign Up Now - It's Free
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400 dark:bg-pink-600 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-xl">📸</span>
            </div>
            <span className="text-xl font-bold gradient-text">VintagePic</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 VintagePic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
