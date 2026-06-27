import { SectionWrapper } from "@/components/organisms/SectionWrapper";

interface ValuePillar {
  illustration: string;
  heading: string;
  body: string;
}

interface ValuePillarsProps {
  pillars: ValuePillar[];
  sectionHeading?: string;
}

export function ValuePillars({
  pillars,
  sectionHeading = "What our community stands for",
}: ValuePillarsProps) {
  return (
    <SectionWrapper className="py-20 flex flex-col gap-12 bg-literally-white">
      <h2
        className="font-bold text-nearly-black text-center"
        style={{
          fontSize: "var(--text-h2)",
          lineHeight: "var(--lh-h2)",
        }}
      >
        {sectionHeading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pillars.map((pillar) => (
          <div key={pillar.heading} className="flex flex-col gap-4">
            <img src={pillar.illustration} alt="" className="w-40 h-40 object-contain self-center" />
            <h3
              className="font-semibold text-nearly-black"
              style={{
                fontSize: "var(--text-h3)",
                lineHeight: "var(--lh-h3)",
              }}
            >
              {pillar.heading}
            </h3>
            <p
              className="text-really-dark-grey"
              style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
            >
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
