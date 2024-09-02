import '../../styles/home/our-team.css';

function OurTeam() {
    const teamPics = [
        {
            src: require('../../images-and-icons/team-member-1.jpg'),
            name: 'Christy Lightner',
            role: 'Owner/Designer'
        },
        {
            src: require('../../images-and-icons/team-member-2.jpg'),
            name: 'Aleisha Riddell',
            role: 'Designer'
        }
    ];

    return (
        <div className="our-team-content">
            <div className='our-team-text'>
                <h1>Meet Our Team</h1>
            </div>
            <div className="team-pics-container">
                {teamPics.map((pic, index) => (
                    <div key={index} className="team-pic-container">
                        <img src={pic.src} alt={`Team member ${index + 1}`} className="team-pic" />
                        <div className="hover-text">
                            <strong>{pic.name}</strong><br />
                            {pic.role}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
