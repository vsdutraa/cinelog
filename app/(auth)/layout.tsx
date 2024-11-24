function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
        {children}
      </div>
    </section>
  );
}

export default AuthLayout;
