import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative flex-1 min-h-screen flex flex-col items-center gap-12 bg-zinc-950">
      <Header />
      <main className="max-w-7xl flex-1 w-full flex flex-col items-center gap-20 justify-center">
        <h1>Hello motion</h1>
      </main>
      <Footer />
    </div>
  );
}
