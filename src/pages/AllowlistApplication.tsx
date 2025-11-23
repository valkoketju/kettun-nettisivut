import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nimen on oltava vähintään 2 merkkiä"),
  age: z.string().min(1, "Ikä on pakollinen"),
  discord: z.string().min(3, "Discord-käyttäjänimi on pakollinen"),
  steamId: z.string().min(1, "Steam ID on pakollinen"),
  rpExperience: z.string().min(100, "Kerro kokemuksestasi vähintään 100 merkkiä"),
  character: z.string().min(100, "Hahmokuvaus on oltava vähintään 100 merkkiä"),
  rules: z.string().min(50, "Vastaa kysymykseen vähintään 50 merkillä"),
  scenario: z.string().min(150, "Skenaario-vastaus on oltava vähintään 150 merkkiä"),
  why: z.string().min(100, "Vastaus on oltava vähintään 100 merkkiä"),
});

type FormData = z.infer<typeof formSchema>;

const AllowlistApplication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Allowlist application submitted:", data);
    toast.success("Allowlist-hakemus lähetetty onnistuneesti!");
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-20">
        <Link to="/allowlist" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Takaisin
        </Link>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-border/50">
            <h1 className="text-3xl font-bold mb-2">Allowlist-hakemus</h1>
            <p className="text-muted-foreground mb-8">
              Täytä hakemus huolellisesti. Tämä on ensimmäinen askel liittyäksesi Frosted-yhteisöön.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nimi *</Label>
                <Input id="name" {...register("name")} placeholder="Koko nimesi" />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="age">Ikä *</Label>
                <Input id="age" type="number" {...register("age")} placeholder="Ikäsi" />
                {errors.age && <p className="text-sm text-destructive mt-1">{errors.age.message}</p>}
              </div>

              <div>
                <Label htmlFor="discord">Discord *</Label>
                <Input id="discord" {...register("discord")} placeholder="käyttäjänimi#0000" />
                {errors.discord && <p className="text-sm text-destructive mt-1">{errors.discord.message}</p>}
              </div>

              <div>
                <Label htmlFor="steamId">Steam ID *</Label>
                <Input id="steamId" {...register("steamId")} placeholder="STEAM_0:..." />
                {errors.steamId && <p className="text-sm text-destructive mt-1">{errors.steamId.message}</p>}
              </div>

              <div>
                <Label htmlFor="rpExperience">Kerro aiemmasta roolipelaamisen kokemuksestasi *</Label>
                <Textarea
                  id="rpExperience"
                  {...register("rpExperience")}
                  placeholder="Missä palvelimilla olet pelannut? Millaisia hahmoja olet pelannut? Kuinka kauan olet roolipelannyt?"
                  className="min-h-[120px]"
                />
                {errors.rpExperience && <p className="text-sm text-destructive mt-1">{errors.rpExperience.message}</p>}
              </div>

              <div>
                <Label htmlFor="character">Kuvaile hahmoa, jonka haluat pelata Frostedissa *</Label>
                <Textarea
                  id="character"
                  {...register("character")}
                  placeholder="Kuka hahmosi on? Mikä on hänen taustatarinansa? Mitä hän tekee elääkseen?"
                  className="min-h-[120px]"
                />
                {errors.character && <p className="text-sm text-destructive mt-1">{errors.character.message}</p>}
              </div>

              <div>
                <Label htmlFor="rules">Mitä roolipelin säännöt merkitsevät sinulle? *</Label>
                <Textarea
                  id="rules"
                  {...register("rules")}
                  placeholder="Miksi säännöt ovat tärkeitä? Miten suhtaudut niiden rikkomiseen?"
                  className="min-h-[100px]"
                />
                {errors.rules && <p className="text-sm text-destructive mt-1">{errors.rules.message}</p>}
              </div>

              <div>
                <Label htmlFor="scenario">
                  Skenaario: Olet kaupassa ja joku alkaa ryöstää paikkaa. Mitä teet? *
                </Label>
                <Textarea
                  id="scenario"
                  {...register("scenario")}
                  placeholder="Kuvaile miten reagoisit tähän tilanteeseen hahmosi näkökulmasta..."
                  className="min-h-[120px]"
                />
                {errors.scenario && <p className="text-sm text-destructive mt-1">{errors.scenario.message}</p>}
              </div>

              <div>
                <Label htmlFor="why">Miksi haluat liittyä Frosted-yhteisöön? *</Label>
                <Textarea
                  id="why"
                  {...register("why")}
                  placeholder="Mikä Frostedissa kiinnostaa sinua? Mitä odotat yhteisöltä?"
                  className="min-h-[100px]"
                />
                {errors.why && <p className="text-sm text-destructive mt-1">{errors.why.message}</p>}
              </div>

              <Button type="submit" className="w-full" size="lg">
                Lähetä hakemus
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllowlistApplication;
