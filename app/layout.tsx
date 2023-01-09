import Dashboard from "./dashboard/page";
import SideNav from "./SideNav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="bg-primary h-screen overflow-y-auto py-5">
          <div className="flex h-full">
            <div className="h-full">
              <SideNav />
            </div>
            <div> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
