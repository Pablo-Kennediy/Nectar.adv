import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Templates from "./pages/Templates";
import Administrativo from "./pages/templates/Administrativo";
import Ambiental from "./pages/templates/Ambiental";
import Civil from "./pages/templates/Civil";
import Empresarial from "./pages/templates/Empresarial";
import Imobiliario from "./pages/templates/Imobiliario";
import Penal from "./pages/templates/Penal";
import Previdenciario from "./pages/templates/Previdenciario";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/template/administrativo" element={<Administrativo />} />
          <Route path="/template/ambiental" element={<Ambiental />} />
          <Route path="/template/civil" element={<Civil />} />
          <Route path="/template/empresarial" element={<Empresarial />} />
          <Route path="/template/imobiliario" element={<Imobiliario />} />
          <Route path="/template/penal" element={<Penal />} />
          <Route path="/template/previdenciario" element={<Previdenciario />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
