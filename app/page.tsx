import Link from 'next/link';

const cards = [
  { label: 'Bitcoin', value: '$—', detail: 'Live price' },
  { label: 'Market', value: '—', detail: '24h change' },
  { label: 'Network', value: '—', detail: 'Latest block' },
];

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/" className="brand">BTC COR</Link>
        <span>MARKET OVERVIEW</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">BITCOIN INTELLIGENCE</p>
        <h1>Market data,<br /><em>clearly framed.</em></h1>
        <p className="intro">
          A focused dashboard for tracking Bitcoin market information and network activity.
        </p>
      </section>

      <section className="grid" aria-label="Market summary">
        {cards.map((card) => (
          <article key={card.label}>
            <p>{card.label}</p>
            <strong>{card.value}</strong>
            <span>{card.detail}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
