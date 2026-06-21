import styles from "./ShowcaseGraphics.module.css";

export default function ShowcaseGraphics() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.textContent}>
          <div className={styles.badge}>UI/UX & Graphic Design</div>
          <h2 className={styles.title}>
            Pixel-Perfect <span className="text-gradient">Brand Experiences</span>
          </h2>
          <p className={styles.description}>
            Elevate your brand's visual identity. We craft stunning graphics, compelling logos, and intuitive UI/UX designs using Figma that captivate your audience from the first glance.
          </p>
          
          <ul className={styles.servicesList}>
            <li>Figma UI/UX Prototyping</li>
            <li>Logo Design & Branding</li>
            <li>Graphic Design (Cards, Brochures)</li>
            <li>Social Media & Product Design</li>
          </ul>
        </div>

        {/* Visuals Container */}
        <div className={styles.visuals}>
          {/* Creative Layout Elements */}
          <div className={styles.designBoard} style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img 
              src="/images/animated_interface.png" 
              alt="Animated Website Interface" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'floatUI 6s ease-in-out infinite', transformOrigin: 'center' }} 
            />
            
            {/* Logo/Figma element */}
            <div className={styles.figmaCursor}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="var(--primary)" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 3 10.49 22 13 14 21 11.49 3 3"></polygon></svg>
              <div className={styles.cursorTag}>DevService Designer</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
