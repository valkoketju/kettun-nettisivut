import { useSearchParams, Link } from "react-router-dom";
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
  experience: z.string().min(50, "Kerro kokemuksestasi vähintään 50 merkkiä"),
  motivation: z.string().min(100, "Motivaatio on oltava vähintään 100 merkkiä"),
  availability: z.string().min(20, "Kerro saatavuudestasi"),
  background: z.string().min(50, "Taustatarinasi on oltava vähintään 50 merkkiä"),
});

type FormData = z.infer<typeof formSchema>;

const departmentNames = {
  lspd: "Los Santos Police Department",
  bcso: "Blaine County Sheriff's Office",
  sasp: "San Andreas State Police",
};

const GovernmentApplication = () => {
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") as keyof typeof departmentNames;
  const departmentName = departmentNames[dept] || "Government Department";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Application submitted:", data, "Department:", dept);
    toast.success("Hakemus lähetetty onnistuneesti!");
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
            <h1 className="text-3xl font-bold mb-2">{departmentName}</h1>
            <p className="text-muted-foreground mb-8">Täytä alla oleva hakemus huolellisesti</p>

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
                <Label htmlFor="experience">Aiempi kokemus roolipelaamisesta *</Label>
                <Textarea
                  id="experience"
                  {...register("experience")}
                  placeholder="Kerro aiemmasta kokemuksestasi roolipelipalvelimilla..."
                  className="min-h-[100px]"
                />
                {errors.experience && <p className="text-sm text-destructive mt-1">{errors.experience.message}</p>}
              </div>

              <div>
                <Label htmlFor="motivation">Miksi haluat liittyä tähän osastoon? *</Label>
                <Textarea
                  id="motivation"
                  {...register("motivation")}
                  placeholder="Kerro miksi haluat liittyä ja mitä voit tuoda osastolle..."
                  className="min-h-[120px]"
                />
                {errors.motivation && <p className="text-sm text-destructive mt-1">{errors.motivation.message}</p>}
              </div>

              <div>
                <Label htmlFor="availability">Saatavuutesi *</Label>
                <Textarea
                  id="availability"
                  {...register("availability")}
                  placeholder="Milloin pystyt pelaamaan? Kuinka monta tuntia viikossa?"
                  className="min-h-[80px]"
                />
                {errors.availability && <p className="text-sm text-destructive mt-1">{errors.availability.message}</p>}
              </div>

              <div>
                <Label htmlFor="background">Hahmosi taustatarina *</Label>
                <Textarea
                  id="background"
                  {...register("background")}
                  placeholder="Kerro hahmosi taustatarina..."
                  className="min-h-[120px]"
                />
                {errors.background && <p className="text-sm text-destructive mt-1">{errors.background.message}</p>}
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

export default GovernmentApplication;
