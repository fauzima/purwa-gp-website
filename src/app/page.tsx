import HomeHero from "@/components/HomeHero";
import HomeDrivers from "@/components/HomeDrivers";
import HomeSubHero from "@/components/HomeSubHero";
import UpNext from "@/components/UpNext";

export default function HomePage() {
  return (
    <div className="flex flex-col mt-[60px]">
      <HomeHero />
      <HomeSubHero />
      <UpNext />
      <HomeDrivers />
    </div>
  );
}
