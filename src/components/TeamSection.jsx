import "./AboutSection.css";

function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700",
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Finance Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Business Consultant",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700",
    },
  ];

  return (
    <section className="team-section">

      <div className="team-heading">
        <span>Meet Our Experts</span>
        <h2>Our Team</h2>
        <p>
          We are a team of experienced professionals committed to helping
          businesses grow with confidence and smart financial solutions.
        </p>
      </div>

      <div className="team-container">

        {team.map((member) => (
          <div className="team-card" key={member.id}>

            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="team-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TeamSection;