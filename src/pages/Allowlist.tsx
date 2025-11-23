import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldCheck, Star, Users, UserCheck, Building2, Megaphone, ExternalLink } from "lucide-react";
import discordLogo from "@/assets/discord-logo.png";

const Allowlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Card className="p-12 border-border/50 bg-gradient-to-br from-primary/10 to-accent/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              City Services & Applications
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Join the Frosted Community and help shape the future of Los Santos. Explore career opportunities in law enforcement, emergency services, and community management.
            </p>
          </Card>
        </div>

        {/* Government Services */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Government Services</h2>
            <p className="text-muted-foreground">Official departments serving the citizens of Los Santos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Police Department */}
            <Card className="p-6 border-border bg-card relative">
              <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                Recruiting
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Shield className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Los Santos Police Department</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                The Los Santos Police Department is currently seeking qualified candidates to join our team of dedicated law enforcement professionals. As a member of the LSPD, you will have the opportunity to serve and protect the citizens of Los Santos, while also enforcing the law and maintaining order within the city.
              </p>
              <div className="space-y-3">
                <Link to="/government-application?dept=lspd" className="block">
                  <Button className="w-full" variant="secondary">
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Button className="w-full" variant="outline">
                  <img src={discordLogo} alt="Discord" className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </Card>

            {/* Sheriff's Office */}
            <Card className="p-6 border-border bg-card relative">
              <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                Recruiting
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <ShieldCheck className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Blaine County Sheriff's Office</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Are you looking for a challenging and rewarding career in law enforcement? The Blaine County Sheriff's Office is seeking highly motivated individuals to join our team. As a member of the BCSO, you will play a crucial role in maintaining public safety and enforcing the law in one of the largest and most diverse counties in the state.
              </p>
              <div className="space-y-3">
                <Link to="/government-application?dept=bcso" className="block">
                  <Button className="w-full" variant="secondary">
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Button className="w-full" variant="outline">
                  <img src={discordLogo} alt="Discord" className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </Card>

            {/* State Police */}
            <Card className="p-6 border-border bg-card relative">
              <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                Recruiting
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Star className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">San Andreas State Police</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                The San Andreas State Patrol operates statewide, patrolling the high crime areas of San Andreas and its interstate freeways and highways. The SASP is the bridge between enforcement of the Law between the great city of Los Santos and Blaine County, working with both departments to bring criminals to justice.
              </p>
              <div className="space-y-3">
                <Link to="/government-application?dept=sasp" className="block">
                  <Button className="w-full" variant="secondary">
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Button className="w-full" variant="outline">
                  <img src={discordLogo} alt="Discord" className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Community Applications */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Community Applications</h2>
            <p className="text-muted-foreground">Join our team and help build the Frosted Community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Support Team */}
            <Card className="p-6 border-border bg-card relative">
              <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                OPEN
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Support Team Applications</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Join our support team and be the face of the community. We're looking for dedicated individuals to help with community engagement and support and those who wish to help the community grow.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-sm mb-2">Requirements:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Active community member
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Strong communication skills
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Reliable availability
                  </li>
                </ul>
              </div>
              <Link to="/community-application?role=support" className="block">
                <Button className="w-full" variant="secondary">
                  Apply Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </Card>

            {/* Staff Applications */}
            <Card className="p-6 border-border bg-card relative">
              <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                OPEN
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <UserCheck className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Staff Applications</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Become a member of staff and help manage the day-to-day operations of Frosted Community. We're looking for dedicated individuals to enforce our rules and regulations and uphold the integrity of the RP on the server.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-sm mb-2">Requirements:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Active community member
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Ability to make quick decisions and enforce rules
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Reliable availability
                  </li>
                </ul>
              </div>
              <Link to="/community-application?role=staff" className="block">
                <Button className="w-full" variant="secondary">
                  Apply Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </Card>

            {/* Real Estate */}
            <Card className="p-6 border-border bg-card relative">
              <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                OPEN
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Building2 className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Real Estate Applications</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Shape the landscape of Los Santos by joining our real estate development team. Help design, plan, and manage properties throughout the city while working with players to create amazing living and business spaces.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-sm mb-2">Requirements:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Understanding of city planning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Collaborative mindset
                  </li>
                </ul>
              </div>
              <Link to="/community-application?role=realestate" className="block">
                <Button className="w-full" variant="secondary">
                  Apply Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </Card>

            {/* Public Relations */}
            <Card className="p-6 border-border bg-card relative">
              <Badge className="absolute top-4 right-4 bg-green-500/20 text-green-400 border-green-500/30">
                OPEN
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Megaphone className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Public Relations Applications</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Be the voice of Frosted Community! Help manage our social media presence, create engaging content, and communicate with our player base to keep everyone informed and excited about what's happening in our community.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-sm mb-2">Requirements:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Creative content creation skills
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    Social media experience
                  </li>
                </ul>
              </div>
              <Link to="/community-application?role=pr" className="block">
                <Button className="w-full" variant="secondary">
                  Apply Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>

        {/* Allowlist Application CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Aloita täällä - Allowlist-hakemus
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ennen kuin voit hakea mihinkään osastoon tai tiimiin, sinun täytyy ensin päästä allowlistille. Täytä allowlist-hakemus aloittaaksesi matkasi Frosted-yhteisössä.
            </p>
            <Link to="/allowlist-application">
              <Button size="lg" className="gap-2">
                Täytä Allowlist-hakemus
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Allowlist;
