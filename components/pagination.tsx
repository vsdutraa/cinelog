import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PagingProps {
  baseRoute: string;
  currentPage: number;
}

const Pagination = ({ baseRoute, currentPage }: PagingProps) => {
  return (
    <div className="mt-3 space-y-1.5">
      <Separator />
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" disabled={currentPage === 1}>
          <Link
            href={`${baseRoute}/${currentPage - 1}`}
            className="flex items-center gap-2"
          >
            {/* <ChevronLeft className="-ml-1.5" /> */}
            <span className="text-xs md:text-sm">Previous</span>
          </Link>
        </Button>

        <Button variant="ghost" size="sm">
          <Link
            href={`${baseRoute}/${currentPage + 1}`}
            className="flex items-center gap-2"
          >
            <span className="text-xs md:text-sm">Next</span>
            {/* <ChevronRight className="-mr-1.5" /> */}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
