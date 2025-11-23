import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Rules = () => {
  const sections = [
    { id: "yleiset-saannot", title: "Yleiset säännöt" },
    { id: "vastuuvapauslauseke", title: "Vastuuvapauslauseke" },
    { id: "huomio", title: "Huomio" },
    { id: "huom", title: "Huom" },
    { id: "nollatoleranssi", title: "Nollatoleranssisäännöt" },
    { id: "rp-ennen-vakivaltaa", title: "RP ennen väkivaltaa" },
    { id: "rdm", title: "RDM" },
    { id: "vdm", title: "VDM" },
    { id: "powergaming", title: "Powergaming" },
    { id: "combatlog", title: "Combatlog" },
    { id: "metapelaaminen", title: "Metapelaaminen" },
    { id: "kolmannen-osapuolen-viestinta", title: "Kolmannen osapuolen viestintä" },
    { id: "streamit", title: "Streamit" },
    { id: "discord-telegrammit", title: "Discord-telegrammit" },
    { id: "fear-rp", title: "Fear RP / NVL" },
    { id: "hevosten-varit", title: "Hevosten värit" },
    { id: "aseiden-kaytto-ja-uhka", title: "Aseiden käyttö ja uhka" },
    { id: "revenge-killing", title: "Revenge Killing (RK)" },
    { id: "kielletyt-tilanteet-sivullisilta", title: "Kielletyt tilanteet sivullisilta" },
    { id: "hogtie-saannot", title: "Hogtie-säännöt" },
    { id: "aanentunnistus-ja-naamiointi", title: "Äänentunnistus ja naamiointi" },
    { id: "laaketieteellinen-roolipeli", title: "Lääketieteellinen roolipeli" },
    { id: "ulkonaan-muokkaus", title: "Ulkonäön muokkaus" },
    { id: "laakarikorruptio", title: "Lääkärikorruptio" },
    { id: "viestinta-mikrofoni-ja-kieli", title: "Viestintä – Mikrofoni ja kieli" },
    { id: "toksinen-kaytos", title: "Toksinen käytös" },
    { id: "liiallinen-vakivalta", title: "Liiallinen väkivalta" },
    { id: "ruumiinosien-poistaminen", title: "Ruumiinosien poistaminen" },
    { id: "raskausroolipeli", title: "Raskausroolipeli" },
    { id: "ryostot", title: "Rikossäännöt – Ryöstöt" },
    { id: "pankit-ja-kaupat-viilennys", title: "Pankit ja kaupat – viilennys" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto md:mr-64">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Palvelimen <span className="text-primary">säännöt</span>
            </h1>
          </div>

          <div className="space-y-6">
            <Card id="yleiset-saannot" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Yleiset säännöt</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Tiliturvallisuus:</span> Steam-tunnuksia ei saa jakaa muiden kanssa.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Kunnioitus ja käytös:</span> Kohtele kaikkia yhteisön jäseniä kunnioittavasti. Häirintä, trollaus, seksismi, rasismi tai vihapuhe eivät ole sallittuja.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Mainostus:</span> Spämmäys tai itsensä mainostaminen (esim. palvelinkutsut, mainokset) ilman pääylläpitäjän lupaa on kielletty.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Sisältörajoitukset:</span> NSFW- tai säädytön sisältö on ehdottomasti kielletty. Tämä koskee tekstiä, kuvia tai linkkejä, jotka sisältävät alastomuutta, seksuaalista sisältöä, äärimmäistä väkivaltaa tai muuta graafisesti häiritsevää materiaalia.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Ongelmien raportointi:</span> Jos kohtaat sääntörikkomuksia tai tunnet olosi turvattomaksi, tee tukipyyntö (ticket). Pyrimme ylläpitämään tervetullutta ja turvallista yhteisöä.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Sääntöjen hyväksyntä:</span> Sinun tulee lukea ja ymmärtää kaikki säännöt ennen palvelimelle liittymistä.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Viestintä henkilöstön kanssa:</span> Älä lähetä yksityisviestejä henkilöstölle, elleivät he sitä erikseen pyydä. Käytä tukipyyntöjärjestelmää (Ticket System) saadaksesi apua.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Pelirajoitukset:</span> Makrojen käyttö on kielletty. Crosshairin käyttö on kielletty.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">AFK-käyttäytyminen:</span> Pelaajia ei saa ryöstää tai ampua ilman aiempaa vuorovaikutusta. AFK-tila ei kuitenkaan suojaa vuorovaikutukselta. Jos joudut poistumaan, kirjaudu ulos.</span></li>
              </ul>
            </Card>
            <Card id="vastuuvapauslauseke" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">★ VASTUUVAPAUSLAUSEKE ★</h2>
              <p className="text-foreground">
                Tietämättömyyttä säännöistä ei hyväksytä! Lähettämällä whitelist-hakemuksen vahvistat lukeneesi,
                ymmärtäneesi ja sitoutuneesi noudattamaan näitä sääntöjä.
              </p>
            </Card>

            <Card id="huomio" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">★ HUOMIO! ★</h2>
              <p className="text-foreground mb-3">
                Nämä säännöt voivat muuttua milloin tahansa! Kaikki, mitä ei ole erikseen mainittu näissä säännöissä,
                käsitellään tapauskohtaisesti. Jos olet epävarma tai sinulla on kysyttävää, tee tukipyyntö (ticket)!
              </p>
              <p className="text-foreground mb-3">Ylläpidolla on lopullinen päätösvalta kaikissa asioissa.</p>
              <p className="text-foreground">Kiitos!</p>
              <div className="mt-4 space-y-2">
                <p className="text-foreground">Jos pelaajaraportti koskee sääntöjen "harmaata aluetta", henkilöstö priorisoi roolipelikokemuksen tukemisen.</p>
                <p className="text-foreground">Säännöissä saa joustaa tiettyyn pisteeseen asti, jos se edistää roolipeliä ja sopii kaikille tilanteen osapuolille.</p>
              </div>
            </Card>

            <Card id="huom" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">★ HUOM ★</h2>
              <p className="text-foreground">
                Frosted RP on 18+ yhteisö. Sekä sinä että hahmosi tulee olla vähintään 18-vuotiaita. Hahmon nimet eivät
                saa viitata tunnetuihin henkilöihin historiasta, elokuvista, peleistä, kirjoista jne. Hahmon nimet ja
                puhetyyli tulee sopia Villin lännen aikakauteen (noin vuosi 1900). Tämä palvelin toimii omien sääntöjensä
                ja ohjeidensa mukaan – ei yksittäisten pelaajien tulkintojen "reiluudesta".
              </p>
            </Card>

            <Card id="nollatoleranssi" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">★ NOLLATOLERANSSISÄÄNNÖT ★</h2>
              <p className="text-foreground mb-4">
                Näiden sääntöjen rikkominen johtaa automaattisesti pysyvään porttikieltoon Frosted RP:stä, ellei
                henkilöstö toisin päätä:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Hyödyntäminen: Kaikki pelin bugien tai ei-tarkoitettujen mekaniikkojen käyttö.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Syrjivä kieli/käytös: Halventavat kommentit tai teot, jotka kohdistuvat rotuun, etnisyyteen, seksuaaliseen suuntautumiseen tai vammaisuuteen.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Seksuaalinen häirintä: Ei-toivotut tai sopimattomat seksuaalissävytteiset kommentit, teot tai lähestymiset, kohdistettuna toiseen yhteisön jäseneen – roolissa tai sen ulkopuolella.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Stalkkaus / saalistava käytös: Epämiellyttävä tai ei-toivottu huomio toista pelaajaa kohtaan.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Itsemurharoolipeli: Kaikki kuvaukset tai keskustelut aiheesta ovat ehdottomasti kiellettyjä.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Kolmannen osapuolen viestintä: Kaikki IC-viestintä tulee tapahtua pelin sisällä. (Ei Discordia jne.)</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Roolipelin vuoto: IC-toiminta, joka johtaa OOC-häirintään.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">OOC-tunteiden antaminen vaikuttaa negatiivisesti IC-roolipeliin.</span></li>
              </ul>
            </Card>

            <Card id="rp-ennen-vakivaltaa" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Roolipeli ennen väkivaltaa (RP ennen gunplayta)</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Aina tulee pyrkiä luomaan tarinaa jokaisesta tilanteesta. Roolipeli menee väkivallan edelle.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Ennen kuin hyökkäät toista vastaan, vaaditaan aitoa vuorovaikutusta. Kohtauksen tulee rakentua luonnollisesti ennen ampumista tai tappelua.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Säännön väärinkäyttö: Esimerkiksi "Hei, muistatko minut?" ja välitön hyökkäys ei ole hyväksyttävää roolipeliä.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Toisen pelaajan tappaminen lopettaa roolipelimahdollisuuden – mieti vaihtoehtoja (uhkailu, kidnappaus, haavoittaminen).</span></li>
              </ul>
            </Card>

            <Card id="rdm" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">RDM – Satunnainen tappaminen</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Et saa tappaa tai vahingoittaa toista pelaajaa ilman aiempaa vuorovaikutusta.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Toiminnallasi tulee olla selkeä syy tai motiivi.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä hyökkää NPC-hahmoihin ilman syytä – se voidaan luokitella RDM:ksi.</span></li>
              </ul>
            </Card>

            <Card id="vdm" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">VDM – Ajoneuvotappaminen</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Et saa tahallisesti ajaa pelaajien yli vaunulla, hevosella tai muulla kulkuneuvolla.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Vaaditaan aiempi vuorovaikutus ja perusteltu syy – esim. pakeneminen.</span></li>
              </ul>
            </Card>

            <Card id="powergaming" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Powergaming – Mekaniikkojen väärinkäyttö</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Bugien ja glitchien hyväksikäyttö on kielletty. Taloudellinen hyötyminen bugien avulla johtaa rangaistuksiin.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Leirien sijoittaminen suoraan laittomien sijaintien tai viljelyalueiden viereen on kielletty.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Restart-rikokset: älä suorita lainvalvojien reaktion laukaisevia rikoksia 30 minuutin sisällä uudelleenkäynnistyksestä.</span></li>
              </ul>
            </Card>

            <Card id="combatlog" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Combat Logging – Roolipelin keskeyttäminen tai pako</h2>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Uloskirjautuminen aktiivisessa roolipelissä</h3>
              <p className="text-foreground mb-3">Pelistä poistuminen kesken aktiivisen roolipelin on ehdottomasti kielletty.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Paikallisen lääkärin käyttö (respawn)</h3>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Voit käyttää paikallista lääkäriä vain, jos sinuun ei ole oltu kontaktissa yli 20 minuuttiin.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Tajuttomuus tai kaatuminen ei lopeta roolipeliä – pysy mukana, kunnes tilanne on ohi.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Roolipelin kunnioittaminen</h3>
              <p className="text-foreground mb-3">Jos olet mukana tilanteessa (esim. hevosen selässä, olkapäällä, lääkärin hoidossa), pysy mukana ja kunnioita roolipeliä.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Lääkintäroolipeli</h3>
              <p className="text-foreground">Et saa kirjautua ulos lääkintäroolipelin aikana, jos et halua osallistua – se ei ole sallittua.</p>
            </Card>

            <Card id="metapelaaminen" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Metapelaaminen – Ulkopuolisen tiedon väärinkäyttö</h2>
              <p className="text-foreground mb-3">Metapäissään pelaaminen on kielletty.</p>
            </Card>

            <Card id="kolmannen-osapuolen-viestinta" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Kolmannen osapuolen viestintä</h2>
              <p className="text-foreground">Nollatoleranssi: Kaikki OOC-viestintä (Discord, puhelut, muut alustat) IC-asioissa on kielletty.</p>
            </Card>

            <Card id="streamit" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Streamit</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä katso toisen pelaajan lähetystä, jos olette molemmat palvelimella.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Streamien käyttö IC-tiedon hankintaan tai hyötyyn on metapelaamista.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos olet konfliktissa streamaajan kanssa, älä katso hänen lähetystään.</span></li>
              </ul>
            </Card>

            <Card id="discord-telegrammit" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Discord-telegrammit</h2>
              <p className="text-foreground">Kaikki "telegrammi"-viestintä tulee tapahtua pelin sisällä – ei Discordissa. Ulkoisten palvelinten viestit eivät ole sallittuja IC-käyttöön.</p>
            </Card>

            <Card id="fear-rp" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Fear RP / NVL – Ei arvoa elämälle</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Arvioi tekosi realistisesti, arvosta hahmosi henkeä kuin omaasi.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos sinuun tähdätään aseella, harkitse tarkkaan ennen kuin toimit.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Ota riskejä tilanteen mukaan, mutta toimi realistisesti. Jos olet alakynnessä, pelon ja huolen tulee näkyä hahmossasi.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Tilannetaju: mieti seurauksia ennen kuin toimit. Esim. kahden henkilön tähtäessä sinuun, oman aseen vetäminen on huono valinta.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos näet ampumisen, hakeudu suojaan ja ilmoita viranomaisille.</span></li>
              </ul>
            </Card>

            <Card id="hevosten-varit" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Hevosten värit</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Epärealististen hevosenkarvojen käyttö on kielletty (esim. vihreä, sininen, pinkki, violetti).</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Satuloissa sallitaan värit, mutta niiden tulee olla aikakauteen sopivia ja luonnollisia.</span></li>
              </ul>
            </Card>

            <Card id="aseiden-kaytto-ja-uhka" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Aseiden käyttö ja uhka</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Aseen piteleminen ja sen osoittaminen ovat eri asioita.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos pidät asetta mutta et tähtää, et ylläpidä uhkaa tilanteessa.</span></li>
              </ul>
            </Card>

            <Card id="revenge-killing" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Revenge Killing (RK) – Kosto-tappaminen</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos sinut tapetaan roolipelitilanteessa, et saa palata kostamaan tappajille.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Vältä kontaktia kuolemaasi liittyneiden hahmojen kanssa vähintään tunnin ajan.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Respawnin jälkeen hahmosi ei muista tapahtumia ennen kuolemaa; roolipelaa hämmennystä.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä viittaa klippeihin tai ulkoisiin tallenteisiin hahmon muistoina.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Pään ampuminen ei automaattisesti aiheuta muistinmenetystä.</span></li>
              </ul>
            </Card>

            <Card id="kielletyt-tilanteet-sivullisilta" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Kielletyt tilanteet sivullisilta</h2>
              <p className="text-foreground mb-3">Pelaajat eivät saa puuttua seuraaviin tilanteisiin:</p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Pankkiryöstöt</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Panttivankitilanteet</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Kaikki lainvalvojien ja rikollisten väliset konfliktit</span></li>
              </ul>
            </Card>

            <Card id="hogtie-saannot" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Hogtie-säännöt – Köytettynä oleminen</h2>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Vapautuminen</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Et saa vapautua köysistä itse, paitsi jos joku käyttää /me-toimintoa (esim. "löysentää köysiä") ja poistuu paikalta.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Voit vapautua, jos sinut jätetään yksin yli 10 minuutiksi.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Köytettynä</h3>
              <p className="text-foreground mb-4">Et saa luovuttaa köytettynä. Pysy hahmossasi ja noudata tilannetta.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Vedettäessä</h3>
              <p className="text-foreground">Jos sinua vedetään, saat leikata köyden ja vapautua.</p>
            </Card>

            <Card id="aanentunnistus-ja-naamiointi" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Äänentunnistus ja naamiointi</h2>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Naamioituneet pelaajat</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos pelaaja käyttää naamiota ja yrittää muuttaa ääntään, muiden tulee kunnioittaa tätä eikä tunnistaa äänen perusteella.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos ääntä ei yritetä muuttaa, muut voivat tunnistaa pelaajan sen perusteella.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Arvet, vaatteet tai muut tunnistettavat piirteet ovat sallittuja tunnistamiseen (ilman powergamingia).</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Epäluonnolliset äänimuuntimet eivät ole sallittuja.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Et saa tunnistaa pelaajaa aksentin tai äänen sävyn perusteella, jos hän yrittää peittää äänensä.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Ilman naamiota</h3>
              <p className="text-foreground">Pelaajat ilman naamiota voidaan tunnistaa kaikista havaittavista piirteistä – mukaan lukien ääni.</p>
            </Card>

            <Card id="laaketieteellinen-roolipeli" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Lääketieteellinen roolipeli</h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Puhuminen tajuttomana:</span> Kun lääkintäroolipeli alkaa, kaatunut pelaaja saa alkaa puhua, tilanteeseen sopivalla tavalla.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Roolipelikomennot:</span> Käytä /me, /do tai /hurt-komentoja. Vastaa tilanteen mukaan ja roolipelaa vammasi uskottavasti.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Kehon tarkastus ja rehellisyys:</span> Jos lääkäri käyttää /me tai /do tarkastukseen, kerro totuudenmukaisesti hahmosi fyysisistä piirteistä. Valehtelu ei ole sallittua.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Vammojen realismi:</span> Roolipelaa vammat realistisesti tilanteen ja vakavuuden mukaan. Älä roolipelaa trollimaisia vammoja.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Vammojen pakottaminen:</span> Älä pakota vammoja toiselle pelaajalle.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Respawn:</span> Respawnin jälkeenkin roolipelaa vammat realistisesti seuraavissa kohtaamisissa.</span></li>
              </ul>
            </Card>

            <Card id="ulkonaan-muokkaus" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Ulkonäön muokkaus – Creatorin käyttö</h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Vammat ja arvet:</span> Voit lisätä arven ulkonäköön roolipelivamman perusteella.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Hiukset ja parta:</span> Muuta vain, jos et ole aktiivisessa tilanteessa. Muutoksia enintään kerran 24 tunnissa.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Parran kasvatusroolipeli:</span> Ajaessa parta, roolipelaa sen kasvu ajan kanssa (sänki → viikset → pieni parta → iso parta). Nopeutettu kasvu katsotaan powergamingiksi.</span></li>
              </ul>
            </Card>

            <Card id="laakarikorruptio" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Lääkärikorruptio – Takahuoneen tohtorit</h2>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Tarvikkeiden myyntirajoitukset</h3>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Korruptoituneet lääkärit saavat myydä enintään 2 tonicia viikossa per henkilö.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Enintään 10 sidettä päivässä per henkilö.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Varastointikielto</h3>
              <p className="text-foreground mb-3">Lääkärit eivät saa varastoida valmistettuja tarvikkeita (esim. toniceja, yrttejä) omiin varastoihin tai varastorakennuksiin.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Varkaudet lääkärivarastoista</h3>
              <p className="text-foreground mb-3">Lääkärivarastojen ryöstäminen on ehdottomasti kielletty. Rikkomus johtaa hahmon permaan tai pelaajan banniin.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Hyväksyntävaatimus</h3>
              <p className="text-foreground">Kaikki lääkärikorruptio tulee hyväksyttää henkilöstöllä tukipyynnön kautta.</p>
            </Card>

            <Card id="viestinta-mikrofoni-ja-kieli" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Viestintä – Mikrofoni ja kielirajoitukset</h2>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Mikrofonivaatimus</h3>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Palvelimella pelaamiseen vaaditaan toimiva mikrofoni.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Sinun tulee olla yhteydessä TeamSpeakiin koko pelin ajan.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Kielipolitiikka</h3>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Palvelin on englanninkielinen. Kaikki viestintä tulee tapahtua englanniksi.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Muiden kielten puhuminen ei ole sallittua, jotta henkilöstö ymmärtää viestisi.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Lääketieteelliset poikkeukset</h3>
              <p className="text-foreground mb-3">Jos sinulla on terveydellinen tila, joka vaikuttaa puhekykyysi, ilmoita siitä henkilöstölle etukäteen.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Mykät hahmot</h3>
              <p className="text-foreground">Mykkien hahmojen pelaaminen ei ole sallittua Frosted RP:ssä.</p>
            </Card>

            <Card id="toksinen-kaytos" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Toksinen käytös – Loukkaava asenne</h2>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Kunnioita yhteisön jäseniä – toksinen käytös muita pelaajia kohtaan on kielletty.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Yksityisviestit: älä lähetä loukkaavia tai vihamielisiä viestejä muille pelaajille.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">IC vs OOC: erottele hahmon sisäinen ja ulkoinen viestintä. Hahmojen viha ei ole pelaajien välistä vihaa.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">IC-läppä vs OOC-toksisuus: roolipohjainen naljailu on sallittua kontekstissa; asiayhteydetön loukkaaminen on kiellettyä.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Käytös striimeissä: älä häiritse toisten striimejä toksisilla kommenteilla.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Kommentointi julkisilla foorumeilla: toksiset kommentit palvelimesta voivat johtaa kurinpitotoimiin.</span></li>
              </ul>
            </Card>

            <Card id="liiallinen-vakivalta" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Liiallinen väkivalta</h2>
              <p className="text-foreground">Liiallinen väkivalta kaatunutta hahmoa kohtaan – kuten pään tai raajojen toistuva ampuminen – ei ole sallittua.</p>
            </Card>

            <Card id="ruumiinosien-poistaminen" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Ruumiinosien poistaminen</h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Ruumiinosan poistamiseen vaaditaan erillinen suostumus pelaajalta.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Pysyvät arvet: pelaaja päättää itse pysyvistä arvista tai vammoista – poikkeus, jos ruumiinosa on roolipelattu poistetuksi.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Kidutuksen lopputulos: et saa tappaa hahmoa kidutuksen jälkeen; hänen tulee selvitä tilanteesta.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Molemminpuolinen riski: älä osallistu kidutusroolipeliin, jos et ole valmis roolipelaamaan kidutettuna itse.</span></li>
              </ul>
            </Card>

            <Card id="raskausroolipeli" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Raskausroolipeli</h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Lapsena pelaaminen:</span> lapsi ei voi olla pelattava hahmo ennen kuin 3 RL-kuukautta on kulunut syntymästä.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Raskauden kesto:</span> vähimmäiskesto 3 viikkoa.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Kielletty roolipeli:</span> keskenmenon roolipelaaminen ei ole sallittua; lapsen murha tai kidutus on ehdottomasti kielletty.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Arpeutuminen vihamielisessä tilanteessa on sallittua.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Väkivalta raskauden aikana:</span> et saa aloittaa väkivaltaista vuorovaikutusta; voit puolustautua, mutta roolipelaa pelkoa lapsesi puolesta.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground"><span className="font-semibold">Lapsena roolipelaaminen:</span> et saa roolipelaa omia lapsiasi pelattavina hahmoina.</span></li>
              </ul>
            </Card>

            <Card id="ryostot" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Rikossäännöt – Ryöstöt, pankit, kaupat, leirit jne</h2>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Menusuojat</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä ryöstä pelaajia heidän ollessa valikossa (kauppa, asemyymälä, vaatekauppa).</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Roolipelin taide</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Roolipelaa uhrin kanssa ennen, aikana ja jälkeen – älä vain etsi ja juokse.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jätä vihjeitä uhreille ja/tai lainvalvojille jatkotilanteiden luomiseksi.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Valitse ryöstettävät tavarat hahmosi motiivien mukaan – vältä "taskujen tyhjennystä".</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Tehty on tehty</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos ryöstät pelaajan, et saa tappaa häntä jälkeenpäin.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos uhri ei arvosta henkeään, voit toimia sen mukaisesti – ja raportoi heti.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jos sinut kaadetaan vihamielisessä tilanteessa, sinut voidaan ryöstää.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Et saa ryöstää, palauttaa tavarat ja tappaa pelaajaa sen jälkeen.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Tarinakaaret</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Tavoitteena tulee olla tarinan ja immersiivisen kokemuksen luominen.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jätä vihjeitä (esim. "Ikkuna rikki, sinisiä lankoja roikkuu", "Kolikko, jossa pääkallo, jätetty kuolleen miehen jalkoihin").</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Ryöstön rajat</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä ota kaikkia tavaroita tai pudota niitä maahan katoamisen pakottamiseksi.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Valitse rajatut tavarat tai rahamäärät hahmon motiivien mukaan.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Kielletyt toimet</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä varasta kiinteistöavaimia (paitsi "Ornate Keys").</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä pakota nostamaan rahaa pankista tai varastosta.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Älä varasta RC-veneitä muilta.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Leirien ryöstö</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Leirissä tavattaessa voidaan vaatia arkun avaamista; ryöstäjät voivat ottaa vain sen, mitä kaksi henkilöä voi kantaa.</span></li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Vihamielisyyden viilennys</h3>
              <p className="text-foreground mb-4">Ryöstön jälkeen odota vähintään tunti ennen uutta vihamielistä vuorovaikutusta saman pelaajan kanssa.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Satulalaukkujen ryöstö</h3>
              <p className="text-foreground mb-4">Hevosen satulalaukut saa ryöstää kokonaan.</p>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Vankien käsittely</h3>
              <p className="text-foreground">Jos sidot tai peität pelaajan, vapauta hänet ennen kuin jätät yksin.</p>
            </Card>

            <Card id="pankit-ja-kaupat-viilennys" className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Pankkien ja kauppojen ryöstöt – Pakolliset viilennysajat</h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Pankit ovat korkean riskin ja korkean palkkion roolipelitilanteita; toteutus vaatii suunnittelua.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">•</span><span className="text-foreground">Jokaisen pankki- tai kaupparyöstön jälkeen noudata henkilöstön määrittelemiä viilennysaikoja ennen seuraavaa yritystä.</span></li>
              </ul>
            </Card>
          </div>
        </div>
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
        
      </main>

      <Footer />
    </div>
  );
};

export default Rules;
