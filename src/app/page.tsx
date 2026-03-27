import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#172335",
      }}
    >
      <Header />
      <Timeline />
      <Footer />
    </main>
  );
}
