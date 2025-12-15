
export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Английский для путешествий</h1>
        <p className="subtitle">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
        </p>
        <p className="lead">
          Этот курс научит вашего ребёнка реальному разговорному английскому!
        </p>
      </header>

      <section className="section">
        <h2>📌 Для кого курс</h2>
        <div className="audience-grid">
          <div className="audience-card">4–5 класс</div>
          <div className="audience-card">6–8 класс</div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-box">
          <h2>📢 Набор открыт!</h2>
          <p className="highlight">
            Запишитесь сейчас — и ребёнок заговорит по-английски без страха!
          </p>
          <button
            className="cta-button"
            onClick={() => alert('Спасибо! Свяжусь с вами в ближайшее время.')}
          >
            Записаться на курс
          </button>
        </div>
      </section>

      <footer className="footer">
        © 2025 Английский для путешествий
      </footer>
    </div>
  )
}
