import { Separator } from "@/components/ui/separator";

interface SectionHeaderProps {
  title: string;
  children?: React.ReactNode;
}
const SectionHeader = ({ title, children }: SectionHeaderProps) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs uppercase text-muted-foreground md:text-sm">
        <p className="">{title}</p>
        {children}
      </div>
      <Separator />
    </div>
  );
};
export default SectionHeader;
