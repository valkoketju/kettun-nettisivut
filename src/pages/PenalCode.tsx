import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, Link as LinkIcon, Filter } from "lucide-react";
import { useState } from "react";

  const PenalCode = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Rikokset henkilöitä vastaan");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const formatPrisonTime = (value: string) => {
      return value.replace(/months?/i, "kk");
    };

  const categories = [
    "Rikokset henkilöitä vastaan",
    "Omaisuusrikokset",
    "Petos ja vilppi",
    "Vahingonteko",
    "Julkishallintoa vastaan",
    "Järjestystä vastaan",
    "Terveys ja siveys",
    "Yleinen turvallisuus",
    "Hevoset ja ajoneuvot",
    "Luonnonvarat ja metsästys",
  ];

  const offenses = [
    { code: "2001", title: "Pahoinpitely", description: "Tahallinen toisen uhkaaminen tai vahingoittaminen.", fine: 150, prisonTime: "1 month", severity: "MISDEMEANOR", category: "Rikokset henkilöitä vastaan" },
    { code: "2002", title: "Törkeä pahoinpitely", description: "Vakavan ruumiinvamman aiheuttaminen.", fine: 350, prisonTime: "12 months", severity: "FELONY", category: "Rikokset henkilöitä vastaan" },
    { code: "2003", title: "Puukotus", description: "Teräaseen käyttö vahingoittamistarkoituksessa.", fine: 450, prisonTime: "18 months", severity: "FELONY", category: "Rikokset henkilöitä vastaan" },
    { code: "2004", title: "Ampuma-aseella uhkaaminen", description: "Aseen osoittaminen toista kohti kaupunginrajojen sisällä.", fine: 300, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Rikokset henkilöitä vastaan" },
    { code: "2005", title: "Kuoleman aiheuttaminen tuottamuksella", description: "Henkilön kuoleman aiheuttaminen huolimattomuudella.", fine: 800, prisonTime: "20 months", severity: "FELONY", category: "Rikokset henkilöitä vastaan" },
    { code: "2006", title: "Murhan yritys", description: "Suora askel kohti toisen surmaamista.", fine: 1500, prisonTime: "30 months", severity: "FELONY", category: "Rikokset henkilöitä vastaan" },
    { code: "2007", title: "Toisen sieppaus", description: "Henkilön ottaminen vastoin tahtoa.", fine: 600, prisonTime: "16 months", severity: "FELONY", category: "Rikokset henkilöitä vastaan" },
    { code: "2008", title: "Kidutus", description: "Kivun aiheuttaminen ilman kuolemaan johtavaa lopputulosta.", fine: 700, prisonTime: "18 months", severity: "FELONY", category: "Rikokset henkilöitä vastaan" },
    { code: "2009", title: "Kunnianloukkaus ja uhkailu", description: "Vakava uhkailu tai mustamaalaus.", fine: 200, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Rikokset henkilöitä vastaan" },
    { code: "2010", title: "Kaksintaistelun järjestäminen", description: "Luvaton kaksintaistelu, joka rikkoo kaupunkirajoja.", fine: 400, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Rikokset henkilöitä vastaan" },

    { code: "2101", title: "Hevosen varkaus", description: "Hevosen ottaminen ilman omistajan lupaa.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2102", title: "Karjavarkaus", description: "Karjan varastaminen tai lauman ohjaaminen luvatta.", fine: 700, prisonTime: "16 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2103", title: "Junaryöstö", description: "Matkustajajunan tai rahdin ryöstäminen.", fine: 1200, prisonTime: "24 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2104", title: "Postivaunun ryöstö", description: "Postivaunun tai kuljetuskatraan ryöstäminen.", fine: 900, prisonTime: "20 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2105", title: "Pankkiryöstö", description: "Pankin kassojen tai holvien ryöstäminen.", fine: 2000, prisonTime: "40 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2106", title: "Kaupan ryöstö", description: "Kauppiaan uhkailu ja omaisuuden anastaminen.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2107", title: "Asuntomurto", description: "Rakennukseen tunkeutuminen ja anastus.", fine: 450, prisonTime: "12 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2108", title: "Saddlebag-varkaus", description: "Satulalaukkujen tyhjentäminen luvatta.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Omaisuusrikokset" },
    { code: "2109", title: "Leiriryöstö", description: "Leiripaikan varastojen luvaton anastus.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Omaisuusrikokset" },
    { code: "2110", title: "Merkintäväärennös", description: "Karjamerkintöjen väärentäminen tai polttaminen yli.", fine: 650, prisonTime: "16 months", severity: "FELONY", category: "Omaisuusrikokset" },

    { code: "2201", title: "Uhkapelivilppi", description: "Korttien merkkaus, vilppi saluunassa.", fine: 250, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Petos ja vilppi" },
    { code: "2202", title: "Shekkihuijaus", description: "Väärennetty maksuväline.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Petos ja vilppi" },
    { code: "2203", title: "Kullan painon huijaus", description: "Kullan määrän väärä ilmoittaminen.", fine: 350, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Petos ja vilppi" },
    { code: "2204", title: "Tonttikeinottelu", description: "Maan myynti valheellisilla tiedoilla.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Petos ja vilppi" },
    { code: "2205", title: "Henkivakuutuspetos", description: "Väärennetyt kuolemanilmoitukset.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Petos ja vilppi" },
    { code: "2206", title: "Kauppiaan huijaus", description: "Mittamuottien manipulointi.", fine: 250, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Petos ja vilppi" },
    { code: "2207", title: "Palkkionmetsästäjän vilppi", description: "Väärennetyt todisteet palkkion saamiseksi.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Petos ja vilppi" },
    { code: "2208", title: "Väärä todistus", description: "Valhe oikeudessa.", fine: 300, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Petos ja vilppi" },
    { code: "2209", title: "Telegraph-petokset", description: "Sähkösanomien väärennys.", fine: 350, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Petos ja vilppi" },
    { code: "2210", title: "Valesheriffin tunnus", description: "Viranomaismerkkejä jäljitellään.", fine: 450, prisonTime: "12 months", severity: "FELONY", category: "Petos ja vilppi" },

    { code: "2301", title: "Vahingonteko", description: "Toisen omaisuuden tahallinen vahingoittaminen.", fine: 200, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Vahingonteko" },
    { code: "2302", title: "Junakaluston sabotaasi", description: "Kiskojen vahingoittaminen tai esteen asettaminen.", fine: 900, prisonTime: "20 months", severity: "FELONY", category: "Vahingonteko" },
    { code: "2303", title: "Telegrafikaapelin katkaisu", description: "Viestiyhteyden vahingoittaminen.", fine: 650, prisonTime: "16 months", severity: "FELONY", category: "Vahingonteko" },
    { code: "2304", title: "Leirin polttaminen", description: "Leiripaikan tuhopoltto.", fine: 800, prisonTime: "20 months", severity: "FELONY", category: "Vahingonteko" },
    { code: "2305", title: "Kaivoksen vahingoittaminen", description: "Kaivosrakenteiden tuhoaminen.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Vahingonteko" },
    { code: "2306", title: "Karjan haavoittaminen", description: "Karjan vahingoittaminen luvatta.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Vahingonteko" },
    { code: "2307", title: "Yrityksen kyltin vahingoittaminen", description: "Kaupan kyltin rikkominen.", fine: 150, prisonTime: "2 months", severity: "MISDEMEANOR", category: "Vahingonteko" },
    { code: "2308", title: "Pankkiholvin vahingoitus", description: "Holvin vahingoittaminen ilman ryöstöä.", fine: 700, prisonTime: "16 months", severity: "FELONY", category: "Vahingonteko" },
    { code: "2309", title: "Kirkon omaisuuden vahingoitus", description: "Pyhän omaisuuden vahingoittaminen.", fine: 250, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Vahingonteko" },
    { code: "2310", title: "Puhelinlinjan vahingoitus", description: "Linjainfrastruktuurin katkaisu.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Vahingonteko" },

    { code: "2401", title: "Viranomaisen vastustaminen", description: "Sheriffin tai deputyn määräyksen vastustaminen.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Julkishallintoa vastaan" },
    { code: "2402", title: "Oikeuden halventaminen", description: "Oikeuden toiminnan häiritseminen.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Julkishallintoa vastaan" },
    { code: "2403", title: "Todisteiden hävittäminen", description: "Rikosnäyttöjen tuhoaminen.", fine: 450, prisonTime: "12 months", severity: "FELONY", category: "Julkishallintoa vastaan" },
    { code: "2404", title: "Väärä ilmianto", description: "Valheellinen rikosilmoitus.", fine: 250, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Julkishallintoa vastaan" },
    { code: "2405", title: "Pakomatkan avustaminen", description: "Vangin auttaminen pakenemaan.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Julkishallintoa vastaan" },
    { code: "2406", title: "Lynkkauksen yllytys", description: "Joukkoväkivallan煽uttaminen.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Julkishallintoa vastaan" },
    { code: "2407", title: "Viranomaisen esittäminen", description: "Valepukuinen viranomaisrooli.", fine: 450, prisonTime: "12 months", severity: "FELONY", category: "Julkishallintoa vastaan" },
    { code: "2408", title: "Vangin vapauttamatta jättäminen", description: "Pidätetyn laiton säilytys.", fine: 550, prisonTime: "12 months", severity: "FELONY", category: "Julkishallintoa vastaan" },
    { code: "2409", title: "Telegraphin luvaton käyttö", description: "Viranomaislinjojen käyttö luvatta.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Julkishallintoa vastaan" },
    { code: "2410", title: "Rikoskumppanuus", description: "Osallistuminen rikoksen toteutukseen.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Julkishallintoa vastaan" },

    { code: "2501", title: "Järjestyshäiriö saluunassa", description: "Tappelun aloittaminen julkisessa tilassa.", fine: 150, prisonTime: "2 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2502", title: "Yörauhaa rikkova ammunta", description: "Ampuminen kaupungissa yöllä.", fine: 250, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2503", title: "Julkinen juopumus", description: "Merkittävä häiriö humalassa.", fine: 150, prisonTime: "2 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2504", title: "Häiritsevä huutelu", description: "Yllyttävä tai uhkaava huutelu.", fine: 120, prisonTime: "2 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2505", title: "Katujen tukkeaminen", description: "Väylien estäminen.", fine: 100, prisonTime: "1 month", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2506", title: "Luvaton kokoontuminen", description: "Suurjoukon kerääminen ilman lupaa.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2507", title: "Saarna ilman lupaa", description: "Julkinen julistus ilman lupaa.", fine: 120, prisonTime: "1 month", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2508", title: "Häiriö hautausmaalla", description: "Seremonian häirintä.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2509", title: "Saloongan sulkemiskäskyn rikkominen", description: "Aukioloajan laiton jatkaminen.", fine: 150, prisonTime: "2 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2510", title: "Järjestyksenvalvojan estäminen", description: "Saloongan vahtia estetään.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },

    { code: "2601", title: "Laiton aseen kantaminen saluunassa", description: "Ladattu ase saluunassa.", fine: 250, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Terveys ja siveys" },
    { code: "2602", title: "Alkoholin laiton tislaus", description: "Kuupoltto ilman lupaa.", fine: 300, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Terveys ja siveys" },
    { code: "2603", title: "Huumeiden valmistus", description: "Laiton lääkeaineiden keitto.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Terveys ja siveys" },
    { code: "2604", title: "Järjestäytynyt uhkapeli", description: "Laiton pelipöydän ylläpito.", fine: 350, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Terveys ja siveys" },
    { code: "2605", title: "Prostituution järjestäminen", description: "Laiton toiminnan organisointi.", fine: 450, prisonTime: "12 months", severity: "FELONY", category: "Terveys ja siveys" },
    { code: "2606", title: "Elintarvikkeiden saastutus", description: "Myrkyllinen lisäaine.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Terveys ja siveys" },
    { code: "2607", title: "Lääketieteellinen vilppi", description: "Valelääkärin toimet.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Terveys ja siveys" },
    { code: "2608", title: "Julkinen siveettömyys", description: "Törkeä käytös julkisesti.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Terveys ja siveys" },
    { code: "2609", title: "Huumaava juoma", description: "Juoman luvaton sekoitus.", fine: 250, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Terveys ja siveys" },
    { code: "2610", title: "Sairaalatarvikkeiden varkaus", description: "Lääkintävaraston anastus.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Terveys ja siveys" },

    { code: "2701", title: "Aseen laukaisu kaupungissa", description: "Ampuminen kaupunkialueella.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Yleinen turvallisuus" },
    { code: "2702", title: "Räjähteiden käyttö luvatta", description: "Dynamiitin käyttö ilman lupaa.", fine: 800, prisonTime: "18 months", severity: "FELONY", category: "Yleinen turvallisuus" },
    { code: "2703", title: "Tulipalon aiheuttaminen", description: "Laiminlyönnistä syttyvä palo.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Yleinen turvallisuus" },
    { code: "2704", title: "Paniikin lietsonta", description: "Valheellinen vaarailmoitus.", fine: 250, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Yleinen turvallisuus" },
    { code: "2705", title: "Luvaton vartiointi", description: "Aseistettu partio ilman lupaa.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Yleinen turvallisuus" },
    { code: "2706", title: "Palkkionmetsästäjän rajat ylittävä toiminta", description: "Toiminta ilman toimivaltaa.", fine: 450, prisonTime: "12 months", severity: "FELONY", category: "Yleinen turvallisuus" },
    { code: "2707", title: "Lainvalvojan aseiden anastus", description: "Viranomaisen ase viedään.", fine: 700, prisonTime: "16 months", severity: "FELONY", category: "Yleinen turvallisuus" },
    { code: "2708", title: "Aseiden salakuljetus", description: "Aseiden laiton kuljetus.", fine: 800, prisonTime: "18 months", severity: "FELONY", category: "Yleinen turvallisuus" },
    { code: "2709", title: "Luvaton vartion perustaminen", description: "Yksityisen miliisin luonti.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Yleinen turvallisuus" },
    { code: "2710", title: "Kaupungin rauhan rikkominen", description: "Mellakka tai laaja häiriö.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Yleinen turvallisuus" },

    { code: "2801", title: "Hevosen pahoinpitely", description: "Eläimen kohtuuton kuormittaminen.", fine: 250, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2802", title: "Vaarallinen ratsastus kaupungissa", description: "Holttiton ratsastus.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2803", title: "Vaunun ajaminen päihtyneenä", description: "Ajoneuvon kuljetus humalassa.", fine: 300, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2804", title: "Ratsastus kielletyllä alueella", description: "Ratsastus kirkon tai koulun pihalla.", fine: 150, prisonTime: "2 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2805", title: "Siltojen ylikuormitus", description: "Vaunun ylikuormittaminen.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2806", title: "Hevosen luvaton merkintä", description: "Brändäys ilman lupaa.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2807", title: "Postivaunun estäminen", description: "Kuljetuksen tukkiminen.", fine: 250, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2808", title: "Sillan vahingoittaminen ajolla", description: "Rakennevaurion aiheuttaminen.", fine: 450, prisonTime: "10 months", severity: "FELONY", category: "Hevoset ja ajoneuvot" },
    { code: "2809", title: "Kuljetus ilman kuittia", description: "Rahdin kuljetus ilman kirjauksia.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Hevoset ja ajoneuvot" },
    { code: "2810", title: "Hevosen luvaton teurastus", description: "Omistajan suostumuksetta.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Hevoset ja ajoneuvot" },

    { code: "2901", title: "Luvaton metsästys", description: "Metsästys ilman lupaa.", fine: 250, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Luonnonvarat ja metsästys" },
    { code: "2902", title: "Ylikalastus", description: "Saaliin rajoitusten ylitys.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Luonnonvarat ja metsästys" },
    { code: "2903", title: "Suojellun eläimen kaato", description: "Suojellun lajin tappaminen.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Luonnonvarat ja metsästys" },
    { code: "2904", title: "Metsäpalon aiheuttaminen", description: "Nuotion vartioimatta jättäminen.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Luonnonvarat ja metsästys" },
    { code: "2905", title: "Kaivosvaltauksen kaappaus", description: "Toisen claimin haltuunotto.", fine: 700, prisonTime: "16 months", severity: "FELONY", category: "Luonnonvarat ja metsästys" },
    { code: "2906", title: "Luvaton kultaetsintä", description: "Kullan huuhtominen ilman lupaa.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Luonnonvarat ja metsästys" },
    { code: "2907", title: "Jokiuoman saastutus", description: "Jätteiden lasku vesistöön.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Luonnonvarat ja metsästys" },
    { code: "2908", title: "Laiton ansapyynti", description: "Ansat ilman merkintää.", fine: 250, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Luonnonvarat ja metsästys" },
    { code: "2909", title: "Metsästys kylärajalla", description: "Ammunta lähellä asutusta.", fine: 200, prisonTime: "3 months", severity: "MISDEMEANOR", category: "Luonnonvarat ja metsästys" },
    { code: "2910", title: "Hirvieläimen teurastus myyntiin", description: "Laiton myynti toistuvasti.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Luonnonvarat ja metsästys" },

    // Lisäykset (20 uutta pykälää)
    { code: "2011", title: "Laiton vangitseminen", description: "Henkilön pidättäminen ilman toimivaltaa.", fine: 550, prisonTime: "12 months", severity: "FELONY", category: "Rikokset henkilöitä vastaan" },
    { code: "2012", title: "Väkivallalla uhkaaminen", description: "Törkeä uhkaus, joka aiheuttaa perusteltua pelkoa.", fine: 220, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Rikokset henkilöitä vastaan" },

    { code: "2111", title: "Kultaharkkojen salakuljetus", description: "Kultaesineiden laiton kuljetus rajojen yli.", fine: 900, prisonTime: "18 months", severity: "FELONY", category: "Omaisuusrikokset" },
    { code: "2112", title: "Setelikasan ryöstö", description: "Suuren rahasumman laiton anastus.", fine: 700, prisonTime: "14 months", severity: "FELONY", category: "Omaisuusrikokset" },

    { code: "2211", title: "Väärennetty kaivosclaimi", description: "Valheellinen valtauksen rekisteröinti.", fine: 600, prisonTime: "12 months", severity: "FELONY", category: "Petos ja vilppi" },
    { code: "2212", title: "Väärennetty lääkintälupa", description: "Lääkärin valtuuksien väärentäminen.", fine: 500, prisonTime: "10 months", severity: "FELONY", category: "Petos ja vilppi" },

    { code: "2311", title: "Asemalaiturin vahingoitus", description: "Rautatieaseman rakenteen vahingoittaminen.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Vahingonteko" },
    { code: "2312", title: "Liikkeen ikkunoiden rikkominen", description: "Kauppatalon julkisivun vahingoitus.", fine: 250, prisonTime: "6 months", severity: "MISDEMEANOR", category: "Vahingonteko" },

    { code: "2411", title: "Viranomaispäätöksen kiertäminen", description: "Oikeuden tai sheriffin päätöksen laiton kiertäminen.", fine: 450, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Julkishallintoa vastaan" },
    { code: "2412", title: "Vankikuljetuksen sabotaasi", description: "Vankikuljetuksen estäminen tai vaarantaminen.", fine: 800, prisonTime: "18 months", severity: "FELONY", category: "Julkishallintoa vastaan" },

    { code: "2511", title: "Mellakan lietsonta", description: "Joukon yllyttäminen väkivaltaan.", fine: 400, prisonTime: "10 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },
    { code: "2512", title: "Yöjuhlan häirintä", description: "Kylän tapahtuman merkittävä häirintä.", fine: 200, prisonTime: "4 months", severity: "MISDEMEANOR", category: "Järjestystä vastaan" },

    { code: "2611", title: "Laiton ruumiinavaus", description: "Tutkimuksen suorittaminen ilman lupaa.", fine: 600, prisonTime: "12 months", severity: "FELONY", category: "Terveys ja siveys" },
    { code: "2612", title: "Opiaattikauppa", description: "Lääkkeiden laiton myynti.", fine: 700, prisonTime: "16 months", severity: "FELONY", category: "Terveys ja siveys" },

    { code: "2711", title: "Räjähteiden varastointi kaupungissa", description: "Dynamiitin säilytys ilman lupaa.", fine: 700, prisonTime: "16 months", severity: "FELONY", category: "Yleinen turvallisuus" },
    { code: "2712", title: "Julkinen aseistautuminen", description: "Raskaan aseistuksen esilläpito julkisesti.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Yleinen turvallisuus" },

    { code: "2811", title: "Vaunun jarrujen manipulointi", description: "Kuljetusvälineen vaarantaminen.", fine: 450, prisonTime: "10 months", severity: "FELONY", category: "Hevoset ja ajoneuvot" },
    { code: "2812", title: "Hevosen myrkytys", description: "Eläimen tahallinen vahingoittaminen myrkyllä.", fine: 500, prisonTime: "12 months", severity: "FELONY", category: "Hevoset ja ajoneuvot" },

    { code: "2911", title: "Kalastus räjähteillä", description: "Saaliin hankinta räjähteillä.", fine: 600, prisonTime: "14 months", severity: "FELONY", category: "Luonnonvarat ja metsästys" },
    { code: "2912", title: "Turha tappaminen", description: "Eläimen tappaminen ilman tarkoitusta tai hyötyä.", fine: 300, prisonTime: "8 months", severity: "MISDEMEANOR", category: "Luonnonvarat ja metsästys" },
  ];

  const filteredOffenses = offenses.filter((offense) => {
    const matchesCategory = offense.category === selectedCategory;
    const matchesSearch = 
      offense.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offense.code.includes(searchQuery) ||
      offense.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="flex pt-16">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 border-r border-border bg-muted/30 min-h-screen p-4 fixed left-0 top-16 overflow-y-auto">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Haku..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-background"
              />
            </div>
          </div>

          <nav className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 rounded-lg bg-card border border-border">
            <h3 className="font-bold text-foreground mb-3">Rangaistusohjeet</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Maksimiaika</span>
                <span className="text-sm font-medium text-foreground">Maksimisakko</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-foreground">120 months</span>
                <span className="text-lg font-bold text-foreground">$100,000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden fixed top-20 left-4 z-40">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Avaa suodattimet</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Suodata rikoksia</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Haku..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 bg-background"
                  />
                </div>
              </div>

              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 rounded-lg bg-card border border-border">
                <h3 className="font-bold text-foreground mb-3">Rangaistusohjeet</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Maksimiaika</span>
                    <span className="text-sm font-medium text-foreground">Maksimisakko</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">120 months</span>
                    <span className="text-lg font-bold text-foreground">$100,000</span>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="lg:ml-72 flex-1 p-4 md:p-8">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 uppercase">
              {selectedCategory}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredOffenses.map((offense) => {
              return (
                <Card
                  key={offense.code}
                  className="overflow-hidden border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div
                    className={`px-4 py-2 flex items-center justify-between ${
                      offense.severity === "FELONY"
                        ? "bg-gradient-to-r from-red-900/80 to-red-800/80"
                        : "bg-gradient-to-r from-amber-800/80 to-amber-700/80"
                    }`}
                  >
                    <span className="font-bold text-sm tracking-wider text-foreground">
                      {offense.severity === "FELONY" ? "Vakava rikos" : "Lievä rikkomus"}
                    </span>
                    <LinkIcon className="h-4 w-4 text-foreground" />
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <div className="text-muted-foreground text-sm font-mono mb-1">P.C. {offense.code}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{offense.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{offense.description}</p>
                    </div>

                    <div className="pt-3 border-t border-border flex justify-between text-sm">
                      <div>
                        <span className="text-muted-foreground">Sakko: </span>
                        <span className="font-semibold text-foreground">${offense.fine}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Vankeusaika: </span>
                        <span className="font-semibold text-foreground">{formatPrisonTime(offense.prisonTime)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredOffenses.length === 0 && (
            <Card className="p-12 text-center border-border bg-card">
              <p className="text-muted-foreground">
                Hakuehdolla ei löytynyt rikkomuksia.
              </p>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PenalCode;
