export const metadata = {
  title: "Fail2Learn",
  description: "Experiments platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
