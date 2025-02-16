import "@react95/core/GlobalStyle";
import "@react95/core/themes/win95.css";
import "@styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
