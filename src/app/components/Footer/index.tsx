import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
    
      <div className={styles.logoContainer}>
        <img src="/footer/footer_sase_logo.png"></img>
        <img src="/footer/footer_sjsu_logo.png"></img>
      </div>

      <div className={styles.address}>
        <p>San Jose State University​, 1 Washington Sq, San Jose, CA </p>
        <p>SASE at SJSU © 2025</p>
      </div>

      <div  className={styles.creator}>
        made with 💙💚
        <p>SASE SJSU webdev team</p>
      </div>

    </footer>
  )
}