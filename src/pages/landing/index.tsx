import Box from "@/components/ui/layout/box";
import Introduce from "@/layouts/desktop/landing/introduce";
import Personal from "@/layouts/desktop/landing/personal";
import Projects from "@/layouts/desktop/landing/projects";
import Skill from "@/layouts/desktop/landing/skill";
import Work from "@/layouts/desktop/landing/work";

function Landing() {
  return (
    <Box className="h-screen overflow-y-auto">
      <Introduce />
      <Personal />
      <Work />
      <Skill />
      <Projects />
    </Box>
  );
}

export default Landing;
