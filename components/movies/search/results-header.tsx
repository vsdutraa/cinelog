import { Separator } from "@/components/ui/separator";

interface ResultsHeaderProps {
  title: string;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ title }) => {
  return (
    <div>
      <h1 className="text-sm uppercase">{title}</h1>
      <Separator />
    </div>
  );
};

export default ResultsHeader;
