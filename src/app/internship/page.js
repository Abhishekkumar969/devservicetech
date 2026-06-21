import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Internship Programs | DevService Tech",
  description: "Kickstart your career in software development, web design, and software development with DevService Tech's internship programs.",
};

const internships = [
  { id: 1, role: "Frontend Developer Intern", type: "Remote / On-site", duration: "3 Months", skills: "React, Next.js, CSS" },
  { id: 2, title: "Software Development Intern", type: "On-site", duration: "6 Months", skills: "SEO, API, Content" },
  { id: 3, title: "UI/UX Design Intern", type: "Remote", duration: "3 Months", skills: "Figma, Wireframing" },
  { id: 4, title: "Backend Developer Intern", type: "Remote / On-site", duration: "6 Months", skills: "Node.js, MongoDB" },
];

export default function InternshipPage() {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Kickstart Your Career with <br/><span className="text-gradient">DevService Tech</span></h1>
          <p className={styles.description}>
            Join our dynamic team and get hands-on experience working on live projects. We are looking for passionate learners to innovate with us.
          </p>
        </div>

        <div className={styles.grid}>
          {internships.map((intern) => (
            <div key={intern.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.role}>{intern.role || intern.title}</h3>
                <span className={styles.badge}>{intern.type}</span>
              </div>
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <strong>Duration:</strong> {intern.duration}
                </div>
                <div className={styles.detailItem}>
                  <strong>Skills Needed:</strong> {intern.skills}
                </div>
              </div>
              <Link href={`/contact?service=Internship%20Application`} className="btn btn-primary" style={{ width: "100%", marginTop: "1.5rem" }}>
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.benefits}>
          <h2 className={styles.benefitsTitle}>Why Intern With Us?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>🚀</div>
              <h4>Live Projects</h4>
              <p>Work on real-world projects that impact businesses directly.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>🧠</div>
              <h4>Mentorship</h4>
              <p>Learn directly from industry experts with years of experience.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}>📜</div>
              <h4>Certificate</h4>
              <p>Get a verified letter of recommendation and internship certificate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
