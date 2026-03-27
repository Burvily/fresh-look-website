import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import aiProjectImage from "@/assets/ai-project-management.png";

const features = [
  {
    icon: LayoutDashboard,
    title: "Project Management",
    description:
      "Organize and track all your projects in one place with CREATE work breakdown structures.",
  },
  {
    icon: CheckSquare,
    title: "Task Tracking",
    description:
      "Assign, monitor, and complete tasks across project phases with real-time status updates.",
  },
  {
    icon: Clock,
    title: "Timeline Management",
    description:
      "Visualize project timelines, track milestones, and identify potential delays before they impact your schedule.",
  },
  {
    icon: Users,
    title: "Resource Allocation",
    description:
      "Efficiently manage personnel, equipment, and materials across multiple projects.",
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

const Create = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(0_84%_50%_/_0.3),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(222_47%_11%_/_0.2),_transparent_50%)]" />
        </div>
        <div className="relative container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-accent/20 text-accent rounded-full"
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                CREATE Solution
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4 sm:mb-6"
              >
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent to-red-400">CREATE</span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-4 text-primary-foreground/70 font-medium">
                  by The Eleventh Dimension
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                CREATE – AI Assisted Self Project Management Platform. Streamline your projects with intelligent work breakdown structures, real-time tracking, risk management, and comprehensive resource management.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://createpm.cloud/projects/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                  >
                    Start Managing Projects
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a href="https://createpm.cloud" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 border-primary-foreground/30 text-foreground bg-white hover:bg-gray-100 text-sm sm:text-base"
                  >
                    Login
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-primary-foreground/10">
                <img
                  src={aiProjectImage}
                  alt="CREATE Project Management Platform"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              {/* Decorative elements - hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Key <span className="text-gradient">Features</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Everything you need to manage projects efficiently and effectively.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
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
              className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-6"
            >
              Ready to Transform Your Project Management?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-primary-foreground/70 text-lg mb-8"
            >
              Join companies that are saving time and reducing costs with our
              CREATE project management solution.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="https://createpm.cloud/projects/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Create;
