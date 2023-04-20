import "./globals.css";

const title = "Talis Blog";
const description = "Jan und Flo unterwegs auf der Ostsee im Sommer 2023";

export const metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Talis Blog</title>
        <meta name="description" content={description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
