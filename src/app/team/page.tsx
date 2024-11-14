import CarHero from "@/components/CarHero";
import TeamDrivers from "@/components/TeamDrivers";

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <CarHero />
      <TeamDrivers />
    </div>
  );
}
