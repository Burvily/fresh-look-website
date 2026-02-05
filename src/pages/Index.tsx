import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-construction.jpg";

const features = [
  "Delivery-focused project management",
  "Supplier & tender process expertise",
  "Expertise in managing construction and IT projects using collaborative digital platforms",
];

const services = [
  {
    title: "Full-Cycle Project Planning & Execution",
    description:
      "We manage every phase of your projects from start to finish, ensuring timely and successful outcomes through meticulous planning and execution.",
    icon: Target,
  },
  {
    title: "Managing Supplier Selection & Bidding",
    description:
      "We oversee the entire supplier selection and bidding process, ensuring you receive the best value and quality for your projects.",
    icon: Users,
  },
  {
    title: "Strategic Financial Planning",
    description:
      "Our expert team provides comprehensive financial planning to ensure your construction projects are efficiently managed and completed within budget.",
    icon: Briefcase,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto container-padding">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/20 text-accent rounded-full"
            >
              Experts in Design, Construction & Project Management
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              The Eleventh
              <span className="block text-gradient">Dimension</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
            >
              Building your dreams with precision. We provide specialist project management
              and engineering services to drive the success of complex construction and
              infrastructure projects.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Why Work <span className="text-gradient">With Us?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                At The Eleventh Dimension Ltd, we are committed to excellence, innovation, 
                and delivering exceptional results on every project we undertake.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-primary rounded-2xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                Our Clients
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                We are proud to partner with a diverse range of esteemed clients across
                various industries. From construction and engineering to IT project
                management, we deliver tailored solutions that meet our clients' unique
                needs and exceed their expectations.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed">
                Our commitment to excellence, innovation, and client satisfaction drives
                us to achieve outstanding results in every project we undertake.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Services */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              Key Services <span className="text-gradient">We Offer</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Transforming visions into reality with our comprehensive suite of project
              management and engineering services.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="outline" size="lg" className="h-12 px-8">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6"
            >
              Ready to Start Your Next Project?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-primary-foreground/70 text-lg mb-8"
            >
              Let's work together to bring your vision to life. Contact us today to
              discuss your project requirements.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
