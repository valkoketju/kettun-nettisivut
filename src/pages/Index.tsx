import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Sankariosio */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_50%)]" />
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 lg:p-12 border-border bg-card/50 backdrop-blur-sm">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6">
                Oikeasti hyvä <span className="text-primary">RedM</span>
                <br />
                yhteisö?
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6">
                Selvitä itse.
              </h2>

              <p className="text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8">
                Frosted on kehitysprojekti, joka pyrkii olemaan yksi parhaista RedM-
                yhteisöistä. Tiimimme tarjoaa laadukasta, tuoretta sisältöä ja
                ensiluokkaisen pelikokemuksen, joka nostaa palvelimemme muiden yläpuolelle.
              </p>
              
              
            </Card>
          </div>
        </div>
      </section>
      

      <Footer />
    </div>
  );
};

export default Index;
