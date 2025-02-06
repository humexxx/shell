import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
          natus ducimus minima, ad cumque quasi?
        </h1>
        <p className="text-lg text-gray-300 mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa,
          inventore cum delectus facere perspiciatis autem qui libero beatae
          tenetur, minus adipisci itaque aspernatur soluta hic debitis, amet id
          voluptates.
        </p>
        <div className="mt-16 flex justify-center gap-4">
          <Link
            href="/sign-up"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Get started
          </Link>
          <Link
            href="/sign-in"
            className="text-yellow-400 px-6 py-3 border-b border-transparent hover:border-yellow-400 transition"
          >
            Try demo →
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-yellow-400 font-semibold">LOREM</h3>
          <h2 className="text-xl font-bold mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
          natus ducimus minima, ad cumque quasi?
          </h2>
          <p className="text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
          natus ducimus minima, ad cumque quasi?
          </p>
        </div>
        <div>
          <h3 className="text-yellow-400 font-semibold">LOREM</h3>
          <h2 className="text-xl font-bold mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
          natus ducimus minima, ad cumque quasi?
          </h2>
          <p className="text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
          natus ducimus minima, ad cumque quasi?
          </p>
        </div>
      </div>
    </section>
  );
}
