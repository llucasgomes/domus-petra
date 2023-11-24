import { montSerrat } from "@/app/ui/fonts";
import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section
      className={`${montSerrat.className} bg-red-100 h-screen md:h-auto md:py-10 w-full flex flex-col justify-center items-center`}
    >
      <h1 className="uppercase font-[600] pb-3 text-center text-[#343434]  dark:text-[#ffffff] md:mb-8">
        {"fabiano dell'agnoll"}
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row md:gap-8 md:px-5">
        <Image
          src={"/image/Profile.webp"}
          width={300}
          height={300}
          alt="Foto de PerfilFabiano Dell'Agnolo"
          className="w-full max-w-sm h-80 sm:rounded-xl "
        />
        <div className="w-full h-auto flex flex-col justify-center items-center py-4 md:h-80  px-4 text-justify text-lg md:max-w-md ">
          <p>
            Experiência por 20 anos na indústria, com ênfase no setor
            metal-mecânico e automotivo.{" "}
          </p>
          <p className="pt-2">
            Coordenou programas de Melhoria Contínua, Kaizen e Seis Sigma.
            Especialista em metodologias de gestão e de solução de problemas,
            ferramentas da qualidade e{" "}
            <span className=" italic">Lean Manufacturing</span>.
          </p>
          <Button
            variant={"outline"}
            className="max-w-[227px] mt-5 px-10 py-5 border-[#232323] border-solid border-2 bg-transparent text-[#232323] font-bold"
          >
            Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
}
