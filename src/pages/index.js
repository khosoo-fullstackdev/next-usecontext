import Header from "@/components/Header";
import Right from "@/components/Right";
import Left from "@/components/Left";

export default function Home() {
  return (
    <div className="m-auto w-[1000px] h-[300px]">
      <Header />
      <div className="flex">
        <div className="w-1/2 h-[300px] m-auto items-center justify-between">
          <Left />
        </div>
        <div className="w-1/2 h-[300px] m-auto items-center justify-between">
          <Right />
        </div>
      </div>
    </div>
  );
}
