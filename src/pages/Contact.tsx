import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6 animate-fade-in-up">
            Get In Touch
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to capture your special moments? Let's discuss your
            photography needs.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-fade-in-up">
              <h2 className="font-display text-2xl font-light mb-6">
                Send a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">
                        Wedding Photography
                      </SelectItem>
                      <SelectItem value="portrait">Portrait Session</SelectItem>
                      <SelectItem value="commercial">
                        Commercial Photography
                      </SelectItem>
                      <SelectItem value="event">Event Photography</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                      <SelectItem value="over-5000">Over $5,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your vision, event details, or any specific requirements..."
                    rows={5}
                  />
                </div>

                <Button variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Map */}
            <div
              className="space-y-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Contact Information */}
              <Card className="p-8">
                <h2 className="font-display text-2xl font-light mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Studio Address</h3>
                      <p className="text-muted-foreground">
                        123 Photography Lane
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        hello@elenarodriguez.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-8">
                <h2 className="font-display text-2xl font-light mb-6">
                  Follow My Work
                </h2>

                <div className="flex gap-4">
                  {[
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: Facebook, label: "Facebook", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                  ].map((social, i) => (
                    <Button
                      key={i}
                      variant="ghost-elegant"
                      size="lg"
                      className="flex-1"
                      asChild
                    >
                      <a href={social.href} className="flex items-center gap-2">
                        <social.icon className="w-5 h-5" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Response Time */}
              <Card className="p-6 bg-gradient-elegant text-white">
                <h3 className="font-display text-xl font-light mb-2">
                  Quick Response
                </h3>
                <p className="text-white/90">
                  I typically respond to inquiries within 24 hours. For urgent
                  requests, please call directly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12 animate-fade-in-up">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How far in advance should I book?",
                answer:
                  "For weddings, I recommend booking 6-12 months in advance. For other sessions, 2-4 weeks is usually sufficient.",
              },
              {
                question: "Do you travel for shoots?",
                answer:
                  "Yes! I'm available for destination weddings and shoots. Travel fees may apply depending on location.",
              },
              {
                question: "How long until I receive my photos?",
                answer:
                  "Wedding galleries are delivered within 4-6 weeks. Portrait sessions are typically ready in 1-2 weeks.",
              },
              {
                question: "Can I see some recent work?",
                answer:
                  "Absolutely! Check out my portfolio page for recent work, or follow my Instagram for daily updates.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <h3 className="font-medium mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
