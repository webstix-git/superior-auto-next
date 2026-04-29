import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Leaf, 
  Clock, 
  Shield, 
  Heart, 
  Handshake, 
  Eye,
  MapPin,
  Wrench,
  Car,
  Moon,
  Star,
  ChevronRight
} from "lucide-react";
import { Layout } from "@/components/Layout";
const heroImage = "/hero-banner.jpg";
const customerService = "/customer-service.jpg";
const galleryCorvette = "/gallery-corvette.jpg";
const galleryPaintBooth = "/gallery-paint-booth.jpg";
const galleryTeam = "/gallery-team.jpg";
const galleryShop = "/gallery-shop.jpg";
const galleryTruck = "/gallery-truck.jpg";
const galleryRepair = "/gallery-repair.jpg";
const nightDropOffHome = "/night-drop-off-home.jpg";
const collisionRepairHome = "/collision-repair-home.jpg";
const aboutUsSmall = "/about-us-small.jpg";
const gallery1 = "/gallery-1.jpg";
const gallery2 = "/gallery-2.jpg";
const facilityInterior = "/facility-interior.jpg";
const teamPhoto = "/team-photo.jpg";
const teamGroupPhoto = "/team-group-photo.jpg";
const officeReception = "/office-reception.jpg";
const paintBoothService = "/paint-booth-service.jpg";
const ctaBg = "/cta-bg.jpg";

const differentiators = [
  {
    icon: Award,
    stat: "55+",
    label: "Years of Excellence",
    description: "Serving the Chippewa Valley since 1971"
  },
  {
    icon: Shield,
    stat: "I-CAR",
    label: "Gold Class Certified",
    description: "Top 10% of collision repair shops nationally"
  },
  {
    icon: Users,
    stat: "90%",
    label: "Repeat & Referrals",
    description: "Our reputation speaks for itself"
  },
  {
    icon: Leaf,
    stat: "Eco",
    label: "Friendly Practices",
    description: "Water-based paints for a greener future"
  }
];

const services = [
  {
    image: nightDropOffHome,
    title: "Night Drop-Off Service",
    link: "/services"
  },
  {
    image: collisionRepairHome,
    title: "Collision Repair",
    link: "/services"
  },
  {
    image: paintBoothService,
    title: "Eco-Friendly Paint",
    link: "/services"
  }
];

const testimonials = [
  {
    name: "David F.",
    rating: 5,
    text: "Dave Savage (and Cindy) made me feel as if I was the most important customer ever. Honest, open appraisal and explanations. Attentive to every detail every step of the way. My car looked like it came off of the showroom floor, inside and out. I couldn't be more pleased!"
  },
  {
    name: "Gerald L.",
    rating: 5,
    text: "Outstanding service and the very best repair work. I would go to no other repair shop. Always treated special, really like family. Thanks again Dave and Brian."
  },
  {
    name: "Kerry C.",
    rating: 5,
    text: "Dave and his crew went above and beyond. So much so that they even vacuumed the car, washed it and returned it looking good. Great service, would be the only shop I take my vehicles to."
  }
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Black overlay only on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 via-40% to-transparent to-60%" />
        
        <div className="container relative py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Superior Collision Repair You Can{" "}
              <span className="text-white">Trust</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Family-owned for over 55 years, we take the stress out of collision repair. 
              Expert craftsmanship, honest service, and a commitment to getting you back on the road safely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild 
                className="text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal rounded-sm"
              >
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive collision repair with convenience at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-4 bg-card text-center">
                  <h3 className="font-semibold text-[20px]">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" asChild className="text-base">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Overlapping Images + Stats */}
            <div className="relative">
              {/* Main large image */}
              <div className="ml-16 mt-12">
                <img 
                  src={officeReception} 
                  alt="Superior Auto Body Office" 
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" 
                />
              </div>
              
              {/* Overlapping smaller image */}
              <div className="absolute top-0 left-0 w-2/5 z-10">
                <img 
                  src={aboutUsSmall} 
                  alt="Superior Auto Body Team" 
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-xl border-4 border-background" 
                />
              </div>
              
              {/* Years Experience Badge */}
              <div className="flex items-center gap-4 mt-6 ml-16 p-4 bg-card rounded-lg shadow-sm border">
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">55+</span>
                  <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <p className="text-base text-muted-foreground">
                  Superior Auto Body is a family-owned business that has been serving the Chippewa Valley since 1971.
                </p>
              </div>
            </div>
            
            {/* Right: Content */}
            <div>
              <p className="text-base font-medium text-primary mb-2">Welcome to Superior Auto Body</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted Collision Repair with a Legacy of Quality and Care
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Superior Auto Body, we're proud to be your go-to source for expert collision repair 
                right here in Eau Claire. As a family-owned business with deep local roots, we've spent 
                over five decades perfecting our craft and building lasting relationships with our customers. 
                Whether you need minor dent repair, major collision work, or a complete restoration, 
                we're here to bring your vehicle back to life with care and precision.
              </p>
              <Button size="lg" asChild className="text-base">
                <Link href="/about">Read More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-10 w-10 mx-auto mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{item.stat}</div>
                <div className="text-lg font-medium mb-2">{item.label}</div>
                <p className="text-base opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              90% of our business comes from repeat customers and referrals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" asChild className="text-base">
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the quality craftsmanship that has made us the trusted choice for over 55 years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={galleryCorvette} alt="Red Corvette" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={galleryPaintBooth} alt="Paint booth work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={galleryTeam} alt="Our team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={gallery2} alt="Shop interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={galleryTruck} alt="Truck repair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={gallery1} alt="Shop gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" asChild className="text-base">
              <Link href="/gallery">View More Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBg})` }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        
        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Get Your Vehicle Back to Perfect?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you need a quick estimate or want to learn more about our process, 
            we're here to help. Contact us today and experience the Superior difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="h-12 text-base font-semibold">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 text-base font-semibold border-white bg-white hover:bg-white/90" style={{ color: '#333' }}>
              <a href="tel:715-834-7707">Call (715) 834-7707</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
