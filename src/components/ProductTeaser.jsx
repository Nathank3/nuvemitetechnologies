import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ecosystemData, getThemeColors } from '../data/ecosystemData';

const ProductTeaser = () => {
    // Convert object to array
    const products = Object.entries(ecosystemData).map(([key, data]) => ({
        id: key,
        ...data
    }));

    return (
        <section className="py-20 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Ecosystem</h2>
                        <p className="text-slate-500">Integrated solutions for every operational need.</p>
                    </div>
                    <Link 
                        to="/products"
                        className="group flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Explore the Ecosystem
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">
                    {products.map((product) => {
                        const colors = getThemeColors(product.theme);
                        return (
                            <Link 
                                to="/products" 
                                key={product.id}
                                className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 transition-colors text-center"
                            >
                                <div className={`p-3 rounded-xl bg-white border border-slate-100 group-hover:scale-110 transition-transform duration-300 ${colors.text} ${colors.shadow} shadow-md`}>
                                    <product.icon size={24} />
                                </div>
                                <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 line-clamp-2">
                                    {product.name}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductTeaser;
