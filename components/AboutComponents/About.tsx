import banner from "@/public/about_banner.png";
import woman from "@/public/woman.png";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-grad italic">ReliAssist</span>
            </h1>
            <p className="text-gray-700 leading-relaxed text-lg">
              ReliAssist was founded with a clear mission: To provide reliable,
              high-quality virtual assistance to businesses that want to
              optimise their time and grow without the stress of extra overhead.
              We're dedicated to creating value by connecting you with skilled
              professionals who are invested in your success.
            </p>
          </div>

          {/* Right Column - Single Image */}
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={banner}
              alt="ReliAssist team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission, Vision, and CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Mission and Vision Stacked */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white">
              <span className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-4">
                Our Mission
              </span>
              <p className="text-lg leading-relaxed">
                To empower businesses of all sizes with seamless, dependable
                virtual assistance that simplifies day-to-day operations.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl p-8 text-white">
              <span className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-4">
                Our Vision
              </span>
              <p className="text-lg leading-relaxed">
                To become a global leader in virtual assistant outsourcing by
                delivering high-quality, reliable, and cost-effective solutions.
              </p>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Lighten Your Workload</h2>
              <p className="text-base leading-relaxed mb-8">
                Take the first step toward reclaiming your time and simplifying
                your workflow. Connect with us and find a reliable virtual
                assistant tailored to meet your needs.
              </p>
            </div>

            <div className="flex justify-center items-end">
              <div className="relative">
                <Image
                  src={woman}
                  alt="Customer service representative"
                  className="rounded-t-full w-48 h-64 object-cover object-top"
                />
                <Link href={"/contact"}>
                <button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
                  Contact Us
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
