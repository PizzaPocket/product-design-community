import type { TeamMember } from "@/types/content";

interface ProfileGridProps {
  members: TeamMember[];
  heading: string;
}

export function ProfileGrid({ members, heading }: ProfileGridProps) {
  return (
    <div className="flex flex-col gap-8">
      <h2
        className="font-bold text-nearly-black text-center"
        style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
      >
        {heading}
      </h2>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-3 w-56">
            {member.photo && (
              <div className="w-52 h-52 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-0.5 text-center">
              <p
                className="text-nearly-black"
                style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
              >
                {member.name}
              </p>
              {member.role && (
                <p
                  className="text-really-dark-grey"
                  style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
                >
                  {member.role}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
