export default function Detalhes() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-850 text-white">
        <div>
          <h1 className="text-6xl font-bold mb-10">Detalhes</h1>
        </div>
        <div className="flex justify-around mx-10 gap-20 mt-10">
          <div className="detalheLargada h-[50%] w-[50%] flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">
              Projeto 1 - Luzes de Largada
            </h2>
          </div>
          <div className="detalheReflexo h-[50%] w-[50%] flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">
              Projeto 2 - Jogo de Reflexo
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
