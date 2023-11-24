import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="w-full h-[calc(100vh-5rem)] flex justify-center flex-col items-center gap-10  relative">
      <h1 className="w-[80%] max-w-[400px]  font-bold text-4xl text-center text-white">
        Consultoria Empresarial e Treinamentos de{" "}
        <span className="text-yellow-400">Alta Performace</span>
      </h1>
      <Button
        variant={"outline"}
        className="max-w-[227px] px-10 py-5 border-red-50 border-solid border-2 bg-transparent text-white font-bold"
      >
        Clique Aqui
      </Button>
      <Image
        src={"/image/background.webp"}
        width={500}
        height={500}
        alt="bg"
        className="absolute w-full h-full z-[-1]"
      />
    </section>
  );
}
