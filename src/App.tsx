import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rules from "./pages/Rules";
import Guides from "./pages/Guides";
import Reports from "./pages/Reports";
import PenalCode from "./pages/PenalCode";
import Allowlist from "./pages/Allowlist";
import GovernmentApplication from "./pages/GovernmentApplication";
import CommunityApplication from "./pages/CommunityApplication";
import AllowlistApplication from "./pages/AllowlistApplication";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/penal-code" element={<PenalCode />} />
          <Route path="/allowlist" element={<Allowlist />} />
          <Route path="/government-application" element={<GovernmentApplication />} />
          <Route path="/community-application" element={<CommunityApplication />} />
          <Route path="/allowlist-application" element={<AllowlistApplication />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
