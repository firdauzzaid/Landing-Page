export default function Testimonials() {
  const data = [
    {name:'Andi Pratama', text:'Pengerjaan rapi, komunikasi jelas. Hasil memuaskan.'},
    {name:'Clara Santoso', text:'Website kami jauh lebih profesional — banyak leads datang.'}
  ]

  return (
    <section className="pt-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Testimoni</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((t, i) => (
            <div key={i} className="p-4 border rounded">
              <p className="text-gray-700">"{t.text}"</p>
              <p className="mt-3 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}