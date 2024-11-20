import { Separator } from "@/components/ui/separator";
import StatItem from "@/components/user/profile/user-stats/stat-item";

const Stats = [
  { label: "Films", value: "183" },
  { label: "This year", value: "23" },
  { label: "Following", value: "5" },
  { label: "Followers", value: "6" },
];

const UserStats = () => {
  return (
    <div className="flex h-full items-center">
      {Stats.map((stat, i) => (
        <div className="flex h-1/3" key={i}>
          <StatItem label={stat.label} value={stat.value} />
          {i < Stats.length - 1 && (
            <Separator className="mx-4" orientation="vertical" />
          )}
        </div>
      ))}
    </div>
  );
};
export default UserStats;
