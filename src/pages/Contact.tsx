import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xgvljlry", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(38_92%_50%_/_0.3),_transparent_70%)]" />
        </div>
        <div className="relative container mx-auto container-padding text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              Contact <span className="text-gradient">Us</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-primary-foreground/70 max-w-3xl mx-auto"
            >
              We value your inquiries and feedback. Please reach out to us through the
              following channels.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">
                Get in <span className="text-gradient">Touch</span>
              </h2>

              <div className="space-y-6 mb-12">
                <a
                  href="tel:+447440429875"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-lg font-medium text-foreground">+44 74 4042 9875</p>
                  </div>
                </a>

                <a
                  href="mailto:info@theeleventhdimension.co.uk"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-medium text-foreground break-all">
                      info@theeleventhdimension.co.uk
                    </p>
                  </div>
                </a>
              </div>

              <div className="bg-primary rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold text-primary-foreground mb-4">
                  Office Hours
                </h3>
                <p className="text-primary-foreground/70">
                  Monday - Friday: 9:00 AM - 6:00 PM (GMT)
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-foreground mb-2">
                      Thank You!
                    </h4>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 7xxx xxx xxx"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
