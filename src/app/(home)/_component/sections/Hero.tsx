import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center px-8 pt-10 md:items-end">
        <Image
          alt="Logo Domus Petra"
          src={'/logo/logoHorizontalWhite.png'}
          width={800}
          height={800}
          className="w-full md:h-auto"
        />

        <div className="w-full">
          <h1
            className={`text-right text-xl text-white md:h-28 md:text-center md:text-4xl`}
          >
            <span className="font-black text-[#93B3DA]">Aprimore</span> seu
            negócio
          </h1>
        </div>
      </div>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="absolute -z-10 h-screen w-full object-cover object-left brightness-50"
        src={'/videos/video-banner02.webm'}
      ></video>
    </section>
  )
}
