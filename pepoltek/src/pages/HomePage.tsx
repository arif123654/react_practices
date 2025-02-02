import { FC } from "react";
import { expertises } from "../lib/constants/expertises";
import ServicesCard from "../components/ServicesCard";
import { processes } from "../lib/constants/processes";
import ProcessCard from "../components/ProcessCard";
import Footer from "../components/common/Footer";
import TeamMemberCard from "../components/TeamMemberCard";
import { members } from "../lib/constants/team_members";
import TestimonialSlider from "../components/TestimonialSlider";
import { Card } from "../components/CommonCard";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title }) => (
  <h3 className="text-2xl font-bold text-center">{title}</h3>
);



const HomePage: FC = () => {
  return (
    <div className="bg-[#fee] text-[#333]">
      
      
      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold">We Built What You Desire</h2>
        <button className="mt-4 bg-red-500 text-white px-6 py-3 rounded">View More</button>
      </section>
      
      {/* About Us Section */}
      <section className="p-6 text-center">
        <SectionHeader title="One of the Fastest Way to Business Growth" />
        <button className="mt-4 bg-gray-800 text-white px-6 py-3 rounded">Get a Professional Advice</button>
      </section>
      
      {/* Process Section */}
      <section className="p-6 text-center">
        <SectionHeader title="Our Process" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-6 justify-evenly">
          {processes.map((process) => {
            return (
                <ProcessCard key={process.number} icon={process.icon} title={process.title} description={process.description} number={process.number} />
            );
          })}
        </div>
      </section>
      
      {/* Services Section */}
      <section className="p-6">
        <SectionHeader title="Our Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-6 justify-evenly">
          {expertises.map((expertise) => {
            return (
                <ServicesCard key={expertise.number} icon={expertise.icon} title={expertise.title} description={expertise.description} number={expertise.number} />
            );
          })}
        </div>
      </section>
      
      {/* Team Section */}
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
      </section>
      
      {/* Testimonials Section */}
      <section className="p-8 text-center ">
        <SectionHeader title="Testimonials" />
        <div className="bg-gray-100 p-10">
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="p-6 bg-gray-900 text-white text-center">
        <SectionHeader title="Hey! Let's Talk" />
        <form className="mt-4">
          <input type="text" placeholder="Your Message" className="p-2 w-full rounded" />
          <button className="mt-4 bg-red-500 px-6 py-3 rounded">Submit</button>
        </form>
      </section>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default HomePage;
