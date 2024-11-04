export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 flex items-center justify-center h-full">
      {children}
    </div>
  );
}
