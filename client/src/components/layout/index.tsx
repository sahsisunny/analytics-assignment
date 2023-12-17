import Header from "../header";
import Footer from "../footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-6">{children}</main>
      <Footer />
    </>
  );
}
