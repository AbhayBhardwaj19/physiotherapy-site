import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-gold/10 animate-gradient bg-300%"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary mb-4">
                  🏠 Doorstep Service Available
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Professional Physiotherapy</span>
                  <br />
                  <span className="text-primary">for Faster Recovery</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                  Expert Physiotherapy at Your Doorstep
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl font-medium">
                  Personalized treatment plans to restore mobility, reduce pain, and improve your quality of life — delivered to your home.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/book"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105 shadow-xl"
                  aria-label="Book Appointment"
                >
                  <span>Book Appointment</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
               <a
                 href="tel:+918077295562"
                 className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 
                 hover:bg-blue-700 transition-all shadow-md"
               >
                 Call Now
               </a>
              </div>
            </div>

            {/* Right: Image Card */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-gold rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
                <div className="relative glass rounded-3xl p-6 shadow-2xl border-2 border-gold/30 backdrop-blur-xl">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full blur-xl opacity-50 animate-float"></div>
                  <Image
                    src="/doctor.jpg"
                    alt="Professional Physiotherapy Service"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-2xl object-cover shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Comprehensive physiotherapy services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/p1.jpeg"
                    alt="Manual Therapy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg -mt-8 relative z-20 bg-white">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Manual Therapy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hands-on techniques to improve joint mobility, reduce pain, and enhance tissue healing at your convenience.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/p2.jpg"
                    alt="Sports Rehabilitation"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg -mt-8 relative z-20 bg-white">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Sports Rehabilitation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized rehabilitation programs for athletes to recover from injuries and enhance performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/p3.jpg"
                    alt="Neuro Physiotherapy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg -mt-8 relative z-20 bg-white">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Neuro Physiotherapy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rehabilitation for neurological conditions to improve movement, balance, and coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/p4.jpg"
                    alt="Pain Management"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg -mt-8 relative z-20 bg-white">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Pain Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Effective strategies to manage and reduce chronic and acute pain conditions in the comfort of your home.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/p5.jpg"
                    alt="Post-Surgery Recovery"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg -mt-8 relative z-20 bg-white">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Post-Surgery Recovery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive rehabilitation programs to restore function after surgical procedures.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/p5.jpg"
                    alt="Cardio Respiratory Rehab"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg -mt-8 relative z-20 bg-white">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Cardio Respiratory Rehab</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized programs to improve cardiovascular and respiratory function and endurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Doctor Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-gold rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-slow"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-accent/20 rounded-full blur-xl"></div>
                  <Image
                    src="/doctor.jpg"
                    alt="Dr. Harshit"
                    width={256}
                    height={256}
                    className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-gold shadow-2xl group-hover:shadow-glow-gold transition-all duration-300 transform group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="space-y-6 text-center md:text-left">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-2">
                  Our Expert
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="gradient-text">Meet Dr. Harshit</span>
                </h2>
                <p className="text-2xl text-accent font-bold mb-4">Lead Physiotherapist</p>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Certified Physiotherapist with expertise in advanced rehabilitation techniques, dedicated to helping patients recover faster with personalized at-home care.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-6 py-3 rounded-xl text-sm font-bold border border-primary/20 shadow-md">
                    BPT MPT
                  </span>
                  <span className="bg-gradient-to-r from-gold/20 to-gold/10 text-primary px-6 py-3 rounded-xl text-sm font-bold border border-gold/30 shadow-md">
                    8+ years experience
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3 text-center md:text-left">Specializations</h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="bg-gradient-to-r from-accent/20 to-accent/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold border border-accent/30 shadow-sm">
                      Orthopedic
                    </span>
                    <span className="bg-gradient-to-r from-accent/20 to-accent/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold border border-accent/30 shadow-sm">
                      Neurological
                    </span>
                    <span className="bg-gradient-to-r from-accent/20 to-accent/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold border border-accent/30 shadow-sm">
                      Sports
                    </span>
                    <span className="bg-gradient-to-r from-accent/20 to-accent/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold border border-accent/30 shadow-sm">
                      Pediatric
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary via-accent to-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
              Get Started Today
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Book Your Appointment</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 mb-2 font-medium">
              Available for door-step physiotherapy across [Your City]
            </p>
            <p className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm inline-block px-4 py-2 rounded-full">
              ⏰ Appointments between 9:00 AM – 7:00 PM
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/918077295562?text=Hi%20Doctor%20Harshit%2C%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105 shadow-xl"
              aria-label="Book on WhatsApp"
            >
              <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book on WhatsApp
            </a>
            <a
              href="tel:+918077295562"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
              aria-label="Call Now"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
