import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import aboutImage from "@/assets/engineering-apparatus-branded.png";
import aboutHero from "@/assets/about-hero.jpg";

const team = [
  {
    name: "Mandela Adamu",
    description: "Expert in project management, procurement, and specialist consultancy services.",
  },
  {
    name: "Ibby Woghiren",
    description: "Specialist in project and pension management, adding financial expertise to our portfolio.",
  },
  {
    name: "Kunle Kareem",
    description: "Active shareholder in TED UK division.",
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

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            alt="About Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(38_92%_50%_/_0.3),_transparent_70%)]" />
        </div>
        <div className="relative z-10 container mx-auto container-padding text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              About <span className="text-gradient">Us</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-primary-foreground/70 max-w-3xl mx-auto"
            >
              The Eleventh Dimension Ltd: Championing innovation in project management and specialist consultancy across various sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Started in the UK in 2023, The Eleventh Dimension Ltd began as a sole
                  proprietorship and thriving to provide consultancy services for
                  various complex projects and specialist consultancy.
                </p>
                <p>
                  We specialize in delivering complex projects efficiently, managing
                  multidisciplinary teams, and optimizing stakeholder relationships.
                </p>
                <p>
                  With a strong background in project management, our leadership team is
                  committed to expanding into other sectors.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aboutImage}
                  alt="Our Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Meet the <span className="text-gradient">Management Team</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our management team is dedicated to delivering complex projects
                efficiently, managing multidisciplinary teams, and optimizing supplier
                relationships.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-display font-bold text-accent-foreground">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
