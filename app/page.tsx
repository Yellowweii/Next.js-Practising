import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1366px] px-[60px] flex flex-1 items-center gap-[100px] ">
      <div className="flex flex-col gap-[50px]">
        <h1 className="text-[72px] bg-clip-text text-transparent bg-gradient-to-b from-[#194c33] to-[#bbb] font-bold">Better design for your digital products.</h1>
        <p className="text-[24px] font-light">Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button text="See Our Works" url="/portfolio" />
      </div>
      <div>
        <Image className="object-contain" src="/hero.png" alt="hero" width={1000} height={500} />
      </div>
    </main>
  );
}
