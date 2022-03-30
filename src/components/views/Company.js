import styles from './Company.module.css'

function Company(){
  return(
    <div className={styles.cardAbout}>
    <h1>
      Quem Somos
    </h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>
    <iframe width="400" height="225" src="https://www.youtube.com/embed/jJiQA1tWYK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Company