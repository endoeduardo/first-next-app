import Navbar from "../components/navbar";
import ChartCard from "../components/chart";

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <form className="flex gap-4 my-4 justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Valor Financiado */}
                    <div className="md:col-span-3">
                        <div className="flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-gray-300 bg-gray-100 text-gray-700 text-sm">
                                R$
                            </span>
                            <input
                                type="text"
                                id="valorFinanciado"
                                placeholder="Valor financiado"
                                className="border border-gray-300 rounded-r-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Entrada */}
                    <div className="md:col-span-3">
                        <div className="flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-gray-300 bg-gray-100 text-gray-700 text-sm">
                                R$
                            </span>
                            <input
                                type="text"
                                id="entrada"
                                placeholder="Entrada"
                                className="border border-gray-300 rounded-r-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Taxa de Juros */}
                    <div className="md:col-span-2">
                        <div className="flex rounded-md shadow-sm">
                            <input
                                type="text"
                                id="taxaJuros"
                                placeholder="Taxa de Juros"
                                className="border border-gray-300 rounded-l-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-100 text-gray-700 text-sm">
                                %
                            </span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded-md">
                        Calcular
                    </button>
                </div>
            </form>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <ChartCard />
            </main>
        </>
    );
}
