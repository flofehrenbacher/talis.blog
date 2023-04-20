// import './globals.css'

export const metadata = {
  title: "Talis Blog",
  description: "Jan und Flo auf der Ostsee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My test page</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
      html {
        height: 100%;
      }

      body {
        background: azure;
        font-family: Arial, Helvetica, sans-serif;
        display: grid;
        place-items: center;
        height: 100%;
      }

      .container {
        display: grid;
        place-items: center;
      }
    
    `,
          }}
        ></style>
      </head>
      <body>{children}</body>
    </html>
  );
}
