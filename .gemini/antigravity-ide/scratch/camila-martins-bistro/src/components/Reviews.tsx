export default function Reviews() {
  const reviews = [
    {
      text: "O cardápio salgado tem opções de pratos, massas, lanches e porções.",
      author: "Cliente via Google",
      rating: 5,
    },
    {
      text: "Absolutamente tudo lá é gostoso, todos os doces, salgados, comida.",
      author: "Cliente via Google",
      rating: 5,
    },
    {
      text: "Ki delicia Risoto com pera, salada primavera, e a sobremesa bolo olho da sogra.",
      author: "Cliente via Google",
      rating: 5,
    }
  ];

  return (
    <section className="py-32 bg-surface text-primary border-t border-b border-primary/10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 font-light">O que dizem sobre nós</h2>
          <div className="w-16 h-[1px] bg-secondary mx-auto mb-6"></div>
          <p className="font-sans text-primary/70 max-w-2xl mx-auto font-light">
            A satisfação dos nossos clientes é o nosso maior presente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-boutique-slate p-10 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="flex text-secondary mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-surface font-sans font-light italic mb-8 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center text-surface font-sans text-sm tracking-widest">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-sans text-surface text-sm uppercase tracking-wider">{review.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
