import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Guides = () => {
  

  const sections = [
    { id: "aloita-redm", title: "Aloita RedM" },
    { id: "ohjaimet", title: "Ohjaimet ja toiminnot" },
    { id: "hevosen-hoito", title: "Hevosen hoito ja ratsastus" },
    { id: "leirin-rakentaminen", title: "Leirin rakentaminen" },
    { id: "metsastys-ansat", title: "Metsästys ja ansapyynti" },
    { id: "louhinta-kulta", title: "Louhinta ja kulta" },
    { id: "kalastus-ruoanlaitto", title: "Kalastus ja ruoanlaitto" },
    { id: "kauppa-talous", title: "Kauppa ja talous" },
    { id: "palkkionmetsastys", title: "Palkkionmetsästys" },
    { id: "sheriffi-laki", title: "Sheriffi ja laki" },
    { id: "laakintaroolipeli", title: "Lääkintäroolipeli" },
    { id: "aseet-ammukset", title: "Aseet ja ammukset" },
    { id: "saa-varusteet", title: "Sää ja varusteet" },
    { id: "telegrammit-posti", title: "Telegrammit ja posti" },
    { id: "junat-postivaunut", title: "Junat ja postivaunut" },
    { id: "rikollinen-etiketti", title: "Rikollinen etiketti" },
    { id: "rp-vinkit", title: "RP-vinkit" },
  ];

  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex pt-16">

        {/* Main Content */}
        <main className="flex-1 md:mr-64">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-8">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Oppaat</h1>
              <p className="text-muted-foreground">RedM-oppaat villiin länteen. Aloita perustaitoista ja syvennä roolipeliäsi.</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <section id="aloita-redm">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Aloita RedM</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Luo hahmo aikakauteen sopivilla taustoilla. Tutustu palvelimen sääntöihin <Link to="/rules" className="underline hover:text-primary">täällä</Link> ja aloita pienistä kohtauksista.
                </p>
              </section>

              <section id="ohjaimet">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Ohjaimet ja toiminnot</h2>
                <p className="text-foreground/90 leading-relaxed">Harjoittele perustoimintoja: esineiden käyttö, hevosen kutsu, inventaario, tähdääminen ja ampuminen, vuorovaikutus NPC:iden ja pelaajien kanssa.</p>
              </section>

              <section id="kauppa-talous">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Kauppa ja talous</h2>
                <p className="text-foreground/90 leading-relaxed">Ansaitse rehellisesti: metsästys, kalastus, louhinta, keräily. Myy saalis kauppiaille tai tee sopimuksia karjatiloille. Rakenna mainetta luotettavana kauppakumppanina.</p>
              </section>

              <section id="hevosen-hoito">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Hevosen hoito ja ratsastus</h2>
                <p className="text-foreground/90 leading-relaxed">Ruoki ja juota hevostasi säännöllisesti. Pidä huolta satulasta ja varusteista. Harjoittele ratsastusta eri maastoissa ja vältä ylikuormittamista.</p>
              </section>

              <section id="sheriffi-laki">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Sheriffi ja laki</h2>
                <p className="text-foreground/90 leading-relaxed">Lainvalvontaan hakeudutaan Discordin kautta. Perehdy rikoslakiin, koulutuspolkuun ja varusteisiin. Kunnioita RP-etiikkaa ja toimivaltaa.</p>
              </section>

              <section id="palkkionmetsastys">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Palkkionmetsästys</h2>
                <p className="text-foreground/90 leading-relaxed">Hanki toimeksiantoja laillisesti. Pidä kirjaa kohteista, käytä sidontaa ja kuljetusmenetelmiä turvallisesti. Toimita kohteet viranomaisille RP:n mukaisesti.</p>
              </section>

              <section id="leirin-rakentaminen">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Leirin rakentaminen</h2>
                <p className="text-foreground/90 leading-relaxed">Valitse suojaisa paikka veden läheltä. Pystytä nuotio, säilytä tarvikkeet vaunussa ja pidä leiri siistinä. Vältä kiellettyjä alueita ja leiriydy kauas viljelyksistä.</p>
              </section>

              <section id="metsastys-ansat">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Metsästys ja ansapyynti</h2>
                <p className="text-foreground/90 leading-relaxed">Seuraa tuulia, käytä sopivia aseita ja vältä turhaa tappamista. Merkitse ansat asianmukaisesti ja nouda saalis vastuullisesti.</p>
              </section>

              <section id="louhinta-kulta">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Louhinta ja kulta</h2>
                <p className="text-foreground/90 leading-relaxed">Hanki lupa louhintaan. Käytä asianmukaisia työkaluja, työskentele turvallisesti ja myy saalis luotettaville ostajille. Vältä kaivosvaltauksen kaappausta.</p>
              </section>

              <section id="kalastus-ruoanlaitto">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Kalastus ja ruoanlaitto</h2>
                <p className="text-foreground/90 leading-relaxed">Kalasta sallituilla välineillä ja noudata saalisrajoja. Valmista ruoka nuotiolla tai leirissä, huolehdi hygieniasta ja varastoinnista.</p>
              </section>

              <section id="laakintaroolipeli">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Lääkintäroolipeli</h2>
                <p className="text-foreground/90 leading-relaxed">Käytä /me ja /do-kuvauksia, arvioi vammat realistisesti ja kunnioita hoitoketjua. Viesti selkeästi ja vältä metapeliä.</p>
              </section>

              <section id="aseet-ammukset">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Aseet ja ammukset</h2>
                <p className="text-foreground/90 leading-relaxed">Valitse ase tilanteen mukaan: revolveri lähietäisyydelle, kivääri pitkälle. Huolla aseet, pidä ammukset kuivina ja noudata turvallisuuskäytäntöjä.</p>
              </section>

              <section id="saa-varusteet">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Sää ja varusteet</h2>
                <p className="text-foreground/90 leading-relaxed">Mukauta vaatetus sään mukaan. Sateessa suojaa varusteet, kylmässä kerrospukeudu ja pidä nuotio yllä turvallisesti.</p>
              </section>

              <section id="telegrammit-posti">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Telegrammit ja posti</h2>
                <p className="text-foreground/90 leading-relaxed">Käytä telegrapheja tiedonvälitykseen RP:n mukaisesti. Älä paljasta OOC-tietoa, pidä viestit lyhyinä ja selkeinä.</p>
              </section>

              <section id="junat-postivaunut">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Junat ja postivaunut</h2>
                <p className="text-foreground/90 leading-relaxed">Noudata matkustusetikettiä, vältä junien sabotaasia ja kunnioita korkeaa riskitasoa tilanteissa. Suunnittele etukäteen RP:n jatkuminen.</p>
              </section>

              <section id="rikollinen-etiketti">
                <h2 className="text-2xl font-bold mb-3 text-foreground">Rikollinen etiketti</h2>
                <p className="text-foreground/90 leading-relaxed">Roolipeli ennen väkivaltaa. Kommunikoi uhrin kanssa, jätä vihjeitä ja vältä taskujen tyhjennystä. Kunnioita viilennysaikoja.</p>
              </section>

              <section id="rp-vinkit">
                <h2 className="text-2xl font-bold mb-3 text-foreground">RP-vinkit</h2>
                <p className="text-foreground/90 leading-relaxed">Tee aloitteita, anna muille tilaa loistaa, ja pidä hahmon motiivit johdonmukaisina. Vältä metapelaamista ja powergamingia.</p>
              </section>
            </div>
          </div>
        </main>

        {/* Right Sidebar - On this page */}
        <aside className="hidden lg:block w-64 fixed right-0 top-16 h-[calc(100vh-4rem)] border-l border-border/50 bg-background overflow-y-auto">
          <div className="p-6">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground flex items-center gap-2">
              <span className="text-lg">≡</span>
              Tällä sivulla
            </h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Guides;
