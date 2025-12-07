"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  ChevronDown,
} from "lucide-react";

export default function ReliAssistLanding() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Get instant responses and solutions powered by advanced AI technology",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it",
    },
  ];

  const benefits = [
    "Reduce response time by 80%",
    "Automate repetitive tasks",
    "Scale support effortlessly",
    "Improve customer satisfaction",
    "Integrate with existing tools",
    "Get actionable insights",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose ReliAssist?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for modern businesses that demand excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Boost Your Productivity
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                See the impact of AI-powered assistance on your business
                operations
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-400 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-purple-50">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-6xl font-bold mb-4">80%</div>
                    <div className="text-xl text-purple-100">
                      Faster Response Time
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 aspect-square w-48 bg-indigo-500/30 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-sm text-purple-100">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of businesses already using ReliAssist
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center">
            Start Your Free Trial
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            ReliAssist
          </div>
          <p className="text-gray-400 mb-6">
            © 2024 ReliAssist. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
