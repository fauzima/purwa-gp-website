import HomeHero from "@/components/HomeHero";
import HomeDrivers from "@/components/HomeDrivers";
import HomeSubHero from "@/components/HomeSubHero";
import UpNext from "@/components/UpNext";

export default function HomePage() {
  return (
    <div className="mt-[60px] flex flex-col">
      <HomeHero />
      <HomeSubHero />
      <UpNext />
      <HomeDrivers />
    </div>
  );
}
