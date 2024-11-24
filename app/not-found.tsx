export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="rotate-90 text-3xl font-semibold">{":("}</h1>
        <h2 className="text-xl font-semibold">404. Not Found</h2>
      </div>
    </div>
  );
}
