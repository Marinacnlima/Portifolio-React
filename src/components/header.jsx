function Header() {
  return (
    <section className="HEADER">
      <header id="header">
        
        <div className="header__left">
          <h1>Marina Cabral Nogueira Lima.</h1>
          <h3>Curso: Sistemas de Informação</h3>
          <p>
            Estudante, com forte interesse nas áreas de tecnologia, aprendizado contínuo e colaboração multicultural. 
            Valorizo o trabalho em equipe, a comunicação eficaz e a construção de soluções que gerem impacto. 
            Minha vivência com esportes reforçou minha disciplina, resiliência e capacidade de adaptação — 
            qualidades que levo para minha trajetória no setor da tecnologia.
          </p>
        </div>

        <div className="header__right">
          <div className="header__image">
            <img 
              src="/assets/IMG_06222.jpg" 
              alt="Marina" 
              className="marina"
            />
          </div>
        </div>

      </header>
    </section>
  )
}

export default Header