import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Sankariosio */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,53,0.15),transparent_50%)]" />
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-border bg-card/50 backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Oikeasti hyvä <span className="text-primary">RedM</span>
                <br />
                yhteisö?
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
                Selvitä itse.
              </h2>

              <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
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
