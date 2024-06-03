import FeaturesSection from "@/components/index/FeaturesSection";
import HeaderSection from "@/components/index/Header";
import HeroSection from "@/components/index/HeroSection";
import StepsSection from "@/components/index/StepsSection";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col">
      <HeaderSection />
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
    </div>
  );
}
