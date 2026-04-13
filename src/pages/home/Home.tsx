import { motion } from "motion/react"
import imginicial from "../../assets/img/imginicial.png"

function Home() {
    return (
        <>
            <section 
                className="min-w-full p-10 items-center justify-center px-35">
                <article
                    className="container grid grid-cols-1 md:grid-cols-2 py-6">
                    <figure 
                        className="flex justify-center items-center md:pb-0 order-first md:order-last">
                        <motion.img
                            src={imginicial}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            alt="Imagem Página Home"
                            className="rounded-full w-3/4 shadow-2xl shadow-green-500" />
                    </figure>
                    <div className="p-6 items-center text-start gap-4">
                        <span className="title font-bold text-[#098f55] text-3xl p-12">
                            Sua
                        </span>
                        <h1 className=" title text-5xl font-bold text-[#098f55] my-2">
                            Farmácia online
                        </h1>
                        <span className=" title font-bold text-[#098f55] text-4xl">
                            de Confiança
                        </span>
                        <p className="body text-gray-500 my-5 text-xl">
                            Cuidando da sua saúde com praticidade
                        </p>

                        <button className="bg-[#20925b] hover:bg-[#21bb70] text-white px-6 py-3 rounded-full transition hover:scale-105 shadow-sm shadow-green-500 hover:shadow-md hover-shadow-green-900">
                            Ver produtos
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Home