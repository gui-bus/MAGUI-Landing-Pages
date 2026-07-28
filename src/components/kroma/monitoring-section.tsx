import { monitoring } from "./data";
import { alexandria } from "./fonts";

const indicators = [
  ["98%", "disponibilidade acompanhada"],
  ["24/7", "leitura de geração"],
  ["30 dias", "rotina preventiva"],
];

export function KromaMonitoringSection() {
  return (
    <section
      id="monitoramento"
      className="bg-[#1E1E1E] text-white py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1560px]">

        <div className="kroma-reveal max-w-5xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FFBC4F]">
            [ 04
          </div>
          <h2
            className={`mt-6 text-5xl font-light tracking-[-0.03em] sm:text-7xl md:text-8xl xl:text-[100px] leading-[0.95] ${alexandria.className}`}
          >
            Energia medida não vira promessa.
          </h2>
        </div>


        <hr className="my-20 border-white/10" />


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 space-y-16">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md">
              A KROMA acompanha de perto a economia real, mitigando desvios e
              alarmes operacionais para manter seu ativo exatamente no
              desempenho projetado.
            </p>


            <div className="space-y-8 border-l-2 border-[#FFBC4F] pl-6">
              {indicators.map(([value, label]) => (
                <div key={label} className="flex flex-col transition duration-300 hover:translate-x-2">
                  <span
                    className={`kroma-drift text-4xl md:text-5xl font-medium tracking-tight ${alexandria.className}`}
                  >
                    {value}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>


          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {monitoring.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="kroma-reveal group flex flex-col items-start"
                >

                  <div className="p-3 bg-white/5 border border-white/10 mb-6 text-[#FFBC4F] transition duration-300 group-hover:border-[#FFBC4F]">
                    <Icon size={20} weight="light" />
                  </div>

                  <span className="font-mono text-[10px] text-white/30 tracking-widest block">
                    0{index + 1} . MONITORAMENTO
                  </span>

                  <h3
                    className={`text-2xl font-normal tracking-tight text-white mt-3 ${alexandria.className}`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
