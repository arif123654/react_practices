import { TeamMemberProps } from "../lib/services/TeamMemberProps";

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, title, imageUrl }) => {
  return (
      <section className="p-8">
        <div className="max-w-sm mx-auto mb-8">
        {/* Image */}
        <img src={imageUrl} alt={`${name} - ${title}`} className="w-full rounded-lg shadow-md" />

        {/* Name and Title */}
        <div className="mt-4 text-center">
            <h2 className="text-xl font-bold text-red-500">{name}</h2>
            <p className="text-blue-500">{title}</p>
        </div>
        </div>
      </section>
  );
};

export default TeamMemberCard;