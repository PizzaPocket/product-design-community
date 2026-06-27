import type { TeamMember } from "@/types/content";

interface TeamGridProps {
  members: TeamMember[];
  heading?: string;
}

export function TeamGrid({ members, heading = "Meet the volunteers" }: TeamGridProps) {
  return (
    <div className="flex flex-col gap-8">
      <h2
        className="font-bold text-nearly-black"
        style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
      >
        {heading}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col gap-3">
            {member.photo && (
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-0.5">
              <p
                className="font-semibold text-nearly-black"
                style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
              >
                {member.name}
              </p>
              <p
                className="text-just-grey"
                style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
