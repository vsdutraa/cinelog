function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <div className="h-screen flex items-center justify-center -mt-16">
        {children}
      </div>
    </section>
  );
}

export default AuthLayout;
