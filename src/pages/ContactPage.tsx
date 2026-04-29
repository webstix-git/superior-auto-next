 "use client";

import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from "lucide-react";
import { z } from "zod";
const insideBanner = "/inside-banner.jpg";
const logo = "/logo.gif";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Validate before allowing native form submission
    try {
      contactSchema.parse(formData);
      setErrors({});
      // Validation passed — allow the native form submission to proceed
      // The browser will POST to the action URL and redirect to the service's Thank You page
    } catch (error) {
      e.preventDefault(); // Only prevent default if validation fails
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
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
            Contact
          </h1>
        </div>
      </section>

      <PageBreadcrumb currentPage="Contact" />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border shadow-sm">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Fields marked with an asterisk (<span className="text-destructive">*</span>) are required.
                </p>
                <form
                  method="POST"
                  action="https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/71df9957-4b08-4b67-8cc9-ea6586693e5d"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <Label htmlFor="name" className="text-base">
                      Name: <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-base text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base">
                      Email: <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-base text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base">
                      Phone: <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-1 ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-base text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base">
                      Message: <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`mt-1 ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-base text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg">
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Logo and Contact Info */}
              <div>
                <img 
                  src={logo} 
                  alt="Superior Auto Body" 
                  className="h-24 mb-6"
                />
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base">
                      301 North Farwell St.<br />
                      Eau Claire, WI 54703
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="tel:715-834-7707" className="text-base hover:text-primary">
                      715-834-7707
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="mailto:office@superiorautobodyinc.com" className="text-base hover:text-primary">
                      office@superiorautobodyinc.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.8475034562566!2d-91.50079!3d44.8141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f8bdb8b0b0b0b1%3A0x1234567890abcdef!2s301%20N%20Farwell%20St%2C%20Eau%20Claire%2C%20WI%2054703!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Superior Auto Body Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
