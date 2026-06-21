import ServicesGrid from "../../components/ServicesGrid/ServicesGrid";

export const metadata = {
  title: "Our Services | DevService Tech (Development and service technology)",
  description: "Explore our web design, software development, and SEO services.",
};

export default function Services() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: "-2rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          What We <span className="text-gradient">Do</span>
        </h1>
        <p style={{ color: "var(--foreground-muted)", fontSize: "1.125rem", maxWidth: "800px", margin: "0 auto" }}>
          We provide a 360° suite of digital services designed to elevate your brand. From corporate identity to website development and digital campaigns, we help brands dazzle their audience.
        </p>
      </div>
      <ServicesGrid />
    </div>
  );
}
