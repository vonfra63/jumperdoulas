import { Card } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";
import yvonnePhoto from "@/assets/yvonne-franklin.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* About Yvonne */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Meet Yvonne Franklin
              </h2>
              <div className="flex justify-center">
                <img 
                  src={yvonnePhoto} 
                  alt="Yvonne Franklin - Certified Professional Doula" 
                  className="w-64 md:w-80 rounded-2xl object-contain shadow-lg border-4 border-secondary/30"
                />
              </div>
              <p className="text-xl text-muted-foreground font-serif italic">
                Your compassionate doula companion
              </p>
            </div>
            
            <div className="prose prose-lg max-w-4xl mx-auto text-foreground">
              <p className="text-lg leading-relaxed">
                I am a wife, mother, grandmother, aunt, and sister, born and raised in Denver, Colorado. I adopted my nephew and, thirty years later, gained temporary custody of my great-nephew. I have had a lifelong infatuation with children, which began when I was just a child myself. At the age of 14, I was honored to become a godmother for the first time. Throughout my life, I have been the matriarch of my family.
              </p>
              
              <p className="text-lg leading-relaxed">
                I am outgoing, fun-loving, honest, trustworthy, and spiritual. I enjoy life and possess a wealth of wisdom, expertise, and a strong desire to learn. This eagerness will undoubtedly enhance my work as a doula. Since childhood, I have felt a deep need to protect and love babies. Whenever there is a need, I am there to lend a helping hand.
              </p>
              
              <p className="text-lg leading-relaxed">
                I volunteer as an advocate for children, families, and my community, driven by the knowledge that I can make a difference as a certified professional doula. I am determined to learn more about the maternal health system, particularly how it has not been designed with the needs of Black individuals and immigrants in mind.
              </p>
              
              <p className="text-lg leading-relaxed">
                I have experienced several career changes throughout my life, but my passion for helping others remains constant. I am well versed in available resources and can seamlessly transition from being a leadership professional to a trusted friend. As a certified professional doula, I provide respectful, compassionate, and nonjudgemental care to individuals who may not have access to continuous birth support. I create a safe environment through trust and understanding, utilizing my knowledge and resources to address issues during my clients' pregnancies through active listening and effective communication with clients and their birth teams.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-card space-y-4 text-center border-secondary/20">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Compassionate Care</h3>
              <p className="text-muted-foreground">
                I provide respectful, compassionate, and nonjudgemental support tailored to your unique journey
              </p>
            </Card>

            <Card className="p-8 shadow-card space-y-4 text-center border-secondary/20">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Cultural Understanding</h3>
              <p className="text-muted-foreground">
                I honor diversity and recognize the unique needs of all families, particularly those facing health disparities
              </p>
            </Card>

            <Card className="p-8 shadow-card space-y-4 text-center border-secondary/20">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Evidence-Based Support</h3>
              <p className="text-muted-foreground">
                I use proven techniques and resources to enhance your birthing experience and reduce maternal health disparities
              </p>
            </Card>
          </div>

          {/* Mission */}
          <div className="bg-secondary/20 rounded-2xl p-8 md:p-12 space-y-6">
            <h3 className="text-3xl font-bold text-foreground text-center">My Mission</h3>
            <div className="space-y-4 text-lg text-foreground max-w-4xl mx-auto">
              <p>
                Jumper Doula Services, LLC strives to enhance the birthing experience through evidence-based birth techniques, education, and resources that reduce health disparities in maternal healthcare.
              </p>
              <p>
                I proudly recognize and honor the diversity of people and their reproductive choices and experiences. My birthing experiences are carefully tailored to meet the unique wishes of each birthing parent, ensuring a truly personalized and empowering journey.
              </p>
              <p>
                I deliver powerful comfort measures, effective coping techniques, and unwavering support to ensure you have a fulfilling birth experience. My services provide proactive suggestions as challenges arise, along with expert assistance in massage, positioning, and relaxation techniques during labor. Furthermore, my postpartum doula care is dedicated to caring for the mother and supporting the newborn, ensuring a smooth transition into this new chapter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
