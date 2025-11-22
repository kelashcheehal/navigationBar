import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen scrollbar-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-[#2C1810] mb-4">
            Welcome to Wooden Bazar
          </h1>
          <p className="text-gray-600">Your premium furniture destination</p>
        </div>
      </main>
    </div>
  );
}
