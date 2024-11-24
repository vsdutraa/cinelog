import { Separator } from "@/components/ui/separator";

const SearchResultsLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ query: string }>;
}) => {
  const { query } = await params;
  const decodedQuery = decodeURIComponent(query);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase text-muted-foreground">
          Showing matches for "{decodedQuery}"
        </p>
        <Separator />
      </div>
      {children}
    </div>
  );
};

export default SearchResultsLayout;
