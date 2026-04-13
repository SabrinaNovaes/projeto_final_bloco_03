import { motion } from "motion/react"
import imginicial from "../../assets/img/imginicial.png"
import BuscarProdutos from "../../components/produtos/buscaproduto/BuscarProdutos"
import { Link } from "react-router-dom"
import BuscarCategoria from "../../components/categorias/buscarcategoria/BuscarCategoria"
import { useState } from "react"

function Home() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <>

            {isLoading && (
                <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#EAF4FF] to-white">
                    <div className="flex flex-col items-center gap-4">

                        {/* CIRCLE SPINNER */}
                        <div className="w-12 h-12 border-4 border-[#2BB673] border-t-transparent rounded-full animate-spin"></div>

                        <p className="text-[#2BB673] font-medium animate-pulse">
                            Carregando...
                        </p>

                    </div>
                </div>)}
            <section className="w-full p-10 items-center justify-center px-10 md:px-10 from-[#6ED3A3]/30 to-[#4A90E2]/30 backdrop-blur-sm">

                <article className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

                    <figure
                        className="flex justify-center items-center order-first md:order-last"
                        aria-label="Imagem ilustrativa da farmácia online"
                    >
                        <motion.img
                            src={imginicial}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            alt="Imagem Página Home"
                            className="shadow-2xl shadow-green-500 rounded-full w-full max-w-[300px] md:max-w-[1000px]"
                        />
                    </figure>

                    <div className="flex flex-col items-center gap-2 md:gap-4 md:text-center">

                        <span className="title font-bold text-[#098f55] text-2xl md:text-3xl">
                            Sua
                        </span>

                        <h1 className="title text-3xl md:text-5xl font-bold text-[#098f55] my-1 md:my-2">
                            Farmácia online
                        </h1>

                        <span className="title font-bold text-[#098f55] text-2xl md:text-4xl">
                            de Confiança
                        </span>

                        <p className="body text-gray-500 my-3 md:my-5 text-base md:text-xl text-center md:text-left">
                            Cuidando da sua saúde com praticidade
                        </p>

                        <Link
                            to="/produtos"
                            type="button"
                            aria-label="Ver todos os produtos da farmácia"
                            className="bg-[#20925b] hover:bg-[#21bb70]
                    text-white px-5 md:px-6 py-2 md:py-3 rounded-full transition 
                    hover:scale-105 shadow-sm shadow-green-500 hover:shadow-md"
                        >
                            Ver produtos
                        </Link>
                    </div>
                </article>
            </section>
            <BuscarProdutos />
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#2BB673] to-trasnparent" />
            <BuscarCategoria />
        </>
    )
}

export default Home