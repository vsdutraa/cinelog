import { Button } from "@/components/ui/button";

interface PersonCardProps {
  name: string;
  role?: string;
  showRole: boolean;
}

export function PersonCard({ name, role, showRole }: PersonCardProps) {
  return (
    <Button
      variant="secondary"
      className="h-auto justify-start bg-secondary/50 px-3 py-2 text-xs hover:bg-secondary/70"
    >
      <div className="flex flex-col items-start md:flex-row md:space-x-2">
        <p>{name}</p>
        {showRole && role && <p className="text-muted-foreground">{role}</p>}
      </div>
    </Button>
  );
}
