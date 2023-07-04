'use client'

export default function Home() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">Dados pra jogar jogos</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">dados de 0 ou 1</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Se você joga algum jogo que precise de dados com os valores "sim e não" ou 0 e 1, ou a soma desses valores 0 e 1, fiz isso pra você.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/dices" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Jogar agora
          </a>
        </div>
      </div>
    </main>
  )
}
