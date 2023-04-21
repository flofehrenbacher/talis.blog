export function PageTitle({ children }: { children: string }) {
  return (
    <div className="isolate relative flex flex-col items-center">
      <h1 className="text-4xl inline">{children}</h1>
      <Wave className="relative -top-3 -z-10" />
    </div>
  );
}

function Wave({ className }: { className: string }) {
  return (
    <svg viewBox="3 19 100 18" className={className}>
      <path
        d="M0,25 
  C25,10 25,40 50,25 
  S75,40 100,25 
  S125,10 150,25 
  S175,40 200,25"
        className="stroke-blue-700"
        stroke-width="3"
        fill="none"
      />
      <path
        d="M0,25 
  C25,10 25,40 50,25 
  S75,40 100,25 
  S125,10 150,25 
  S175,40 200,25"
        className="stroke-blue-400 translate-y-1"
        stroke-width="3"
        fill="none"
      />
    </svg>
  );
}
