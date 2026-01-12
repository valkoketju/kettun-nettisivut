import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// Discord-logo poistettu napista
import frostedLogo from "@/assets/frosted-logo.png";
import frostedBanner from "@/assets/frosted-banner.png";

const Navigation = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleDiscordLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
    if (error) console.error("Error logging in:", error);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  
  const navItems = [
    { path: "/", label: "Etusivu" },
    { path: "/rules", label: "Säännöt" },
    { path: "/guides", label: "Oppaat" },
    { path: "/penal-code", label: "Lakikirja" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img src={frostedBanner} alt="Frosted Roleplay Banner" className="w-full h-16 object-cover" />
        </div>
        <div className="relative z-10 container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <img src={frostedLogo} alt="Frosted Roleplay" className="h-10 md:h-12" />
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className="text-sm text-white hover:text-white"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Avaa valikko</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Navigointi</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-2 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button
                    variant={location.pathname === item.path ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t">
              {user ? (
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || "Käyttäjä"} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.user_metadata?.full_name?.[0] || user.email?.[0] || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.user_metadata?.full_name || user.email}</p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={handleLogout} className="w-full">
                    Kirjaudu ulos
                  </Button>
                </div>
              ) : (
                <a href="https://discord.gg/EkF8GPX2pv" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    Liity Discordiin
                  </Button>
                </a>
              )}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center space-x-2">
          {user ? (
            <>
              <Button variant="outline" onClick={handleLogout} size="sm" className="text-sm">
                Kirjaudu ulos
              </Button>
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || "Käyttäjä"} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user.user_metadata?.full_name?.[0] || user.email?.[0] || "U"}
                </AvatarFallback>
              </Avatar>
            </>
          ) : (
            <a href="https://discord.gg/EkF8GPX2pv" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-sm">
                Liity Discordiin
              </Button>
            </a>
          )}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
