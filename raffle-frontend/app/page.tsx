import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      <Header />
    </div>
  );
}
