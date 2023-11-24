import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { montSerrat } from "@/app/ui/fonts";

export default function Service() {
  return (
    <section
      className={`${montSerrat.className} w-full h-auto  bg-[#d9d9d9] py-5 px-9`}
    >
      <h1
        className={`${montSerrat.className} w-full text-[#343434] text-3xl uppercase font-semibold text-center mb-8`}
      >
        serviços
      </h1>
      <div className="w-full h-auto flex justify-center items-center flex-wrap gap-6">
        <Card className="p-0 max-w-80 ">
          <CardContent className="px-0">
            <Image
              src={"/image/service01.webp"}
              width={300}
              height={300}
              alt="Imagem Ilustrativa"
              className=" w-full"
            />
          </CardContent>
          <CardFooter>
            <CardTitle className=" w-full text-center uppercase">
              palestras
            </CardTitle>
          </CardFooter>
        </Card>
        <Card className="p-0">
          <CardContent className="px-0">
            <Image
              src={"/image/service02.webp"}
              width={300}
              height={300}
              alt="Imagem Ilustrativa"
              className=" w-full"
            />
          </CardContent>
          <CardFooter>
            <CardTitle className=" w-full text-center uppercase">
              treinamentos
            </CardTitle>
          </CardFooter>
        </Card>
        <Card className="p-0">
          <CardContent className="px-0">
            <Image
              src={"/image/service03.webp"}
              width={300}
              height={300}
              alt="Imagem Ilustrativa"
              className=" w-full"
            />
          </CardContent>
          <CardFooter>
            <CardTitle className=" w-full text-center uppercase">
              consultoria
            </CardTitle>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
