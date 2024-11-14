import CarHero from "@/components/CarHero";
import Leadership from "@/components/Leadership";
import Management from "@/components/Management";
import RnD from "@/components/RnD";
import TeamDrivers from "@/components/TeamDrivers";

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <CarHero />
      <TeamDrivers />
      <Leadership />
      <Management />
      <RnD />
    </div>
  );
}
