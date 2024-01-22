import Header from "@/components/Header";
import Right from "@/components/Right";
import Left from "@/components/Left";

export default function Home() {
  return (
    <div className="m-auto w-[1000px]">
      <Header />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
}
