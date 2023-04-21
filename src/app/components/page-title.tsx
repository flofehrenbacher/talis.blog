export function PageTitle({ children }: { children: string }) {
  return (
    <h1 className="text-4xl inline border-cyan-600 border-b-4">{children}</h1>
  );
}
