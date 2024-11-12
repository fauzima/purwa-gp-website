import HeroHomePage from "@/components/HeroHomePage";
import SubHeroHomePage from "@/components/SubHeroHomePage";
import UpNext from "@/components/UpNextHomePage";

export default function HomePage() {
  return (
    <div className="flex flex-col mt-[60px]">
      <HeroHomePage />
      <SubHeroHomePage />
      <UpNext />
    </div>
  );
}
