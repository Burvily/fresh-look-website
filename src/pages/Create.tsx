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

const features = [
  {
    icon: LayoutDashboard,
    title: "Project Management",
    description:
      "Organize and track all your construction projects in one place with AI-powered work breakdown structures.",
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
      "Efficiently manage personnel, equipment, and materials across multiple construction projects.",
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
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-secondary to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(38_92%_50%_/_0.2),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(222_47%_11%_/_0.1),_transparent_50%)]" />
        </div>
        <div className="relative container mx-auto container-padding">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full"
            >
              <Sparkles className="h-4 w-4" />
              AI-Powered Solution
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              <span className="text-gradient">CREATE</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 text-muted-foreground font-medium">
                by The Eleventh Dimension
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              AI-Powered Project Management for Construction. Streamline your construction
              projects with intelligent work breakdown structures, real-time tracking, and
              comprehensive resource management.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://createpm.cloud/projects/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8"
                >
                  Start Managing Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://createpm.cloud" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8"
                >
                  Login
                </Button>
              </a>
            </motion.div>
          </motion.div>
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
              Everything you need to manage construction projects efficiently and effectively.
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
              Join construction companies that are saving time and reducing costs with our
              AI-powered project management solution.
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
