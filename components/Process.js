export default function Process() {
  const steps = [
    'Konsultasi Gratis',
    'Requirement Analysis',
    'Design Mockup (UI/UX)',
    'Development',
    'Revisi',
    'Launch + Training',
    'Support After Live'
  ]

  return (
    <section className="pt-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">Proses Pengerjaan</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-7 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="p-3 border rounded text-center text-sm">
              <div className="font-semibold">Step {i+1}</div>
              <div className="mt-2 text-gray-600">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}