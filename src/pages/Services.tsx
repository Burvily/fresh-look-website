import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  DollarSign,
  ClipboardList,
  Shield,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    category: "Project Planning and Execution",
    icon: Target,
    items: [
      "Full-Cycle Project Planning & Execution",
      "Resource Allocation",
      "Risk Management",
      "Quality Control",
      "Reports and Documentation",
    ],
  },
  {
    category: "Financial Planning and Management",
    icon: DollarSign,
    items: [
      "Strategic financial planning for infrastructural projects",
      "Development project financing and execution",
      "Budget forecasting and financial risk management",
    ],
  },
  {
    category: "Supplier and Cost Management",
    icon: Users,
    items: [
      "Managing Supplier Selection & Bidding Processes",
      "Cost Estimation & Contract Negotiation",
    ],
  },
];

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

const Services = () => {
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
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-primary-foreground/70 max-w-3xl mx-auto"
            >
              Transforming visions into reality. Our expertise at your service, ensuring
              efficient and successful outcomes for diverse projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4"
            >
              Our Exceptional <span className="text-gradient">Solutions</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Leading the way in innovative solutions: Discover our comprehensive services
              for successful project execution.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6"
            >
              Ready to Get <span className="text-gradient">Started?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg mb-8"
            >
              Contact us today to discuss your project requirements and discover how we
              can help you achieve your goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8"
                >
                  Contact Us
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

export default Services;
