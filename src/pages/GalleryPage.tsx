 "use client";

import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
const facilityExterior = "/facility-exterior.jpg";
const facilityInterior = "/facility-interior.jpg";
const facilityFront = "/facility-front.jpg";
const paintingTruck = "/painting-truck.jpg";
const ctaBg = "/cta-bg.jpg";
const teamPhoto = "/team-photo.jpg";
const teamGroupPhoto = "/team-group-photo.jpg";
const officeReception = "/office-reception.jpg";
const servicesCollisionBefore = "/services-collision-before.jpg";
const servicesCollisionAfter = "/services-collision-after.jpg";
const servicesCorvette = "/services-corvette.jpg";
const servicesShopInterior = "/services-shop-interior.jpg";
const insideBanner = "/inside-banner.jpg";
const galleryPaintBooth = "/gallery-paint-booth.jpg";
const galleryRepair = "/gallery-repair.jpg";
const heroPaintingTruck = "/hero-painting-truck.jpg";
const galleryShop = "/gallery-shop.jpg";
const galleryTeam = "/gallery-team.jpg";
const galleryShopInterior = "/gallery-shop-interior.jpg";
const galleryCollisionWork = "/gallery-collision-work.jpg";
const galleryHallway = "/gallery-hallway.jpg";
const galleryVehiclesLineup = "/gallery-vehicles-lineup.jpg";
const galleryShopWide = "/gallery-shop-wide.jpg";
const galleryTrucksShop = "/gallery-trucks-shop.jpg";
const galleryToyotaShop = "/gallery-toyota-shop.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

// All gallery images combined
const galleryImages: GalleryImage[] = [
  {
    src: servicesCorvette,
    alt: "Red Corvette Z06",
    caption: "Beautifully restored Corvette Z06"
  },
  {
    src: servicesShopInterior,
    alt: "Vehicles in paint booth area",
    caption: "State-of-the-art paint booth technology"
  },
  {
    src: galleryPaintBooth,
    alt: "Technicians working in paint booth",
    caption: "Our skilled team in the paint booth"
  },
  {
    src: galleryRepair,
    alt: "Collision repair work",
    caption: "Expert collision damage repair"
  },
  {
    src: heroPaintingTruck,
    alt: "Technician painting truck",
    caption: "Precision painting work"
  },
  {
    src: galleryShop,
    alt: "Vehicle on lift in shop",
    caption: "State-of-the-art repair equipment"
  },
  {
    src: galleryTeam,
    alt: "Team at front desk",
    caption: "Friendly customer service"
  },
  {
    src: facilityExterior,
    alt: "Superior Auto Body exterior",
    caption: "Our welcoming facility on North Farwell Street"
  },
  {
    src: facilityFront,
    alt: "Superior Auto Body building front",
    caption: "Serving Eau Claire since 1971"
  },
  {
    src: officeReception,
    alt: "Office reception area",
    caption: "Friendly customer service starts here"
  },
  {
    src: teamPhoto,
    alt: "Superior Auto Body team member",
    caption: "Expert technicians ready to help"
  },
  {
    src: teamGroupPhoto,
    alt: "Superior Auto Body team",
    caption: "The Superior Auto Body family"
  },
  {
    src: galleryShopInterior,
    alt: "Shop interior with vehicles",
    caption: "Spacious repair bays for all vehicle types"
  },
  {
    src: galleryCollisionWork,
    alt: "Collision repair in progress",
    caption: "Front-end collision repair work"
  },
  {
    src: galleryHallway,
    alt: "Office hallway",
    caption: "Our welcoming office space"
  },
  {
    src: galleryVehiclesLineup,
    alt: "Vehicles lined up in shop",
    caption: "Multiple vehicles in our repair facility"
  },
  {
    src: galleryShopWide,
    alt: "Wide view of repair shop",
    caption: "Our large-capacity repair facility"
  },
  {
    src: galleryTrucksShop,
    alt: "Trucks in repair shop",
    caption: "Full-size truck repair capabilities"
  },
  {
    src: galleryToyotaShop,
    alt: "Toyota in repair bay",
    caption: "All makes and models serviced"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const currentIndex = selectedImage ? galleryImages.findIndex(img => img.src === selectedImage.src) : -1;
  
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1]);
    }
  };
  
  const goToNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1]);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-charcoal text-card py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${insideBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 via-40% to-transparent to-60%" />
        
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-bold">
            Gallery
          </h1>
        </div>
      </section>

      <PageBreadcrumb currentPage="Gallery" />

      {/* Before & After Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the transformations we achieve with expert craftsmanship.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-charcoal/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                  <img 
                    src={servicesCollisionBefore} 
                    alt="Dodge Ram Collision Repair - Before"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                {/* After */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                  <img 
                    src={servicesCollisionAfter} 
                    alt="Dodge Ram Collision Repair - After"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Dodge Ram Collision Repair</h3>
                <p className="text-muted-foreground">Front-end collision damage fully restored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Superior Auto Body Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our expert craftsmanship and tour our state-of-the-art facility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-base">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{selectedImage?.alt}</DialogTitle>
          <DialogDescription className="sr-only">{selectedImage?.caption}</DialogDescription>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 bg-charcoal/50 text-white p-2 rounded-full hover:bg-charcoal/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Previous Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-charcoal/50 text-white p-2 rounded-full hover:bg-charcoal/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          {/* Next Arrow */}
          {currentIndex < galleryImages.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-charcoal/50 text-white p-2 rounded-full hover:bg-charcoal/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
          
          {selectedImage && (
            <div>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <div className="p-4 bg-card">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-muted-foreground">{selectedImage.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBg})` }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        
        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Want to See Your Vehicle Looking This Good?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate and experience the Superior difference.
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
