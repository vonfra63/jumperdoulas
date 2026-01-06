import { Card } from "@/components/ui/card";
import { BookOpen, Video } from "lucide-react";
import newbornNursingImage from "@/assets/newborn-nursing.png";
import motherBabyJoyImage from "@/assets/mother-baby-joy.png";

const Resources = () => {
  const videos = [
    {
      title: "Understanding Doula Support",
      url: "https://www.youtube.com/watch?v=xrMbD6xFFy4",
      id: "xrMbD6xFFy4"
    },
    {
      title: "Birth Support & Education",
      url: "https://www.youtube.com/watch?v=bjwZoNujI6w&t=2s",
      id: "bjwZoNujI6w"
    },
    {
      title: "Maternal Health Resources",
      url: "https://www.youtube.com/watch?v=TFUSdaCZEL8",
      id: "TFUSdaCZEL8"
    }
  ];

  const books = [
    {
      title: "Babies are not - they're born, not delivered",
      author: "Rebecca Dekker, PhD, RN"
    },
    {
      title: "Hypnobirthing - practical ways to make your birth better",
      author: "Siobhan Miller"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Resources & Education
            </h2>
            <p className="text-xl text-muted-foreground font-serif italic">
              Helpful materials for your birthing journey
            </p>
          </div>

          {/* Video Resources */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Video className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Educational Videos</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden shadow-card hover:shadow-lg transition-smooth">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/20 hover:bg-primary/30 transition-smooth">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-accent-foreground border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground text-lg">{video.title}</h4>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Postpartum support images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={newbornNursingImage} 
                alt="Tender moment of newborn nursing - postpartum support" 
                className="w-full h-56 object-cover brightness-95 contrast-95 saturate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={motherBabyJoyImage} 
                alt="Joyful moment between mother and baby" 
                className="w-full h-56 object-cover brightness-95 contrast-95 saturate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-primary/10 pointer-events-none" />
            </div>
          </div>

          {/* Book Recommendations */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Recommended Reading</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <Card key={index} className="p-8 shadow-card border-secondary/20">
                  <div className="space-y-3">
                    <BookOpen className="h-8 w-8 text-accent" />
                    <h4 className="text-xl font-semibold text-foreground">{book.title}</h4>
                    <p className="text-muted-foreground">by {book.author}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground">
              These resources have been carefully selected to help you prepare for your birthing journey. Feel free to reach out if you have questions about any of these materials or need additional recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
