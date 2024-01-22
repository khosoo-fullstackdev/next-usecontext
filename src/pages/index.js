import Header from "@/components/Header";
import Left from "@/components/Left";
import Right from "@/components/Right";

const data = {
  question: {},
};

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
}
