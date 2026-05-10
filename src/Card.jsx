export default function Card({ title, description, imageUrl }) {
    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <img
                src={imageUrl}
                alt={title}
                className="h-48 w-full object-cover"
            />
            <div className="space-y-2 p-4">
                <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
        </article>
    )
}