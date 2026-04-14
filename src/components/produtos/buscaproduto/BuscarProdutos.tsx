import { useEffect, useState } from "react";
import type Produto from "../../../models/Produtos";
import { buscar } from "../../../service/Service";
import CardProduto from "../cardproduto/CardProduto";
import { motion } from "motion/react";

interface BuscarProdutosProps {
    hideActions?: boolean;
}

function BuscarProdutos({ hideActions }: BuscarProdutosProps) {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    async function buscarProdutos() {
        try {
            setIsLoading(true);
            await buscar("/produtos", setProdutos);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading ? (
                <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#EAF4FF] to-white">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-[#2BB673] border-t-transparent rounded-full animate-spin" />
                        <p className="text-[#2BB673] font-medium animate-pulse">
                            Carregando...
                        </p>
                    </div>
                </div>
            ) : (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="min-h-screen px-6 md:px-10 py-10 bg-linear-to-br from-[#EAF4FF] to-white"
                >
                    <h1 className="title text-3xl md:text-4xl font-bold text-[#333] mb-8">
                        Produtos
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {produtos.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} hideActions={hideActions} />
                        ))}
                    </div>
                </motion.section>
            )}
        </>
    )
}

export default BuscarProdutos;