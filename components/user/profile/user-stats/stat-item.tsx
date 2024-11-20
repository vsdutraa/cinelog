interface StatItemProps {
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs uppercase text-muted-foreground">{label}</p>
    </div>
  );
};
export default StatItem;
