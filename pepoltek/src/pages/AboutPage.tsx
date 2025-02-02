import Footer from '../components/common/Footer'
import { members } from '../lib/constants/team_members'
import TeamMemberCard from '../components/TeamMemberCard'
import { Card } from '../components/CommonCard'
import AbountUsHero from '../components/HeroSection/AboutUs'

function AboutPage() {
  return (
    <>
        <section className="p-6 text-center">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">\ Team \</h2>
            <h3 className="text-2xl font-bold text-center mb-8">Our Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 align-middle">
            {members.map((member) => {
                return (
                    <Card key={member.id}>
                    <TeamMemberCard name={member.name} title={member.title} imageUrl={member.imageUrl} id={member.id} />
                    </Card>
                );
            })}
            </div>
        <AbountUsHero />
        </section>
        <Footer />
    </>
  )
}

export default AboutPage;