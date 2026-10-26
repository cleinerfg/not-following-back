import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import DataUploadSection from "./components/DataUploadSection";
import StatsOverview from "./components/StatsOverview";
import NonFollowersList from "./components/NonFollowersList";
import DataProvider from "./context/DataProvider";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-neutral-950">
      <Header />

      <DataProvider>
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 flex flex-col gap-8">
          <HeroSection />
          <DataUploadSection />
          <StatsOverview />
          <NonFollowersList />
        </main>
      </DataProvider>
      <Footer />
    </div>
  );
}
