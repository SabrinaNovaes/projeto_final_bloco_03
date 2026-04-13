import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function BuscarCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        buscarCategorias();
    }, []);

    async function buscarCategorias() {
        try {
            setIsLoading(true);
            await buscar("/categorias", setCategorias);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="min-h-screen px-8 py-10 bg-linear-to-br from-[#EAF4FF] to-white">

            <h1 className="text-4xl font-bold text-[#333] mb-8">
                Categorias
            </h1>

            {isLoading && (
                <p className="text-gray-500">Carregando...</p>
            )}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria} />
                ))}

            </div>
        </section>
    );
}

export default BuscarCategoria;