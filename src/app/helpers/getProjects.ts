import { manualProjects } from "../data/manualProjects";
import { Project } from "../types/Project";

const verifyHasVideo = async (repoName: string) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/luigimdev/${repoName}/main/portfolio/video.gif`
  );

  return res.ok;
};

export const getProjects = async () => {
  const res = await fetch("https://api.github.com/users/luigimdev/repos", {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  });

  if (!res.ok) {
    console.log("Ocorreu um erro ao buscar os projetos!");
    return [];
  }

  const data = await res.json();

  const projectsData: Project[] = data
  .filter((project: Project) =>
    project.topics?.includes("portfolio")
  )
  .map((project: Project) => (
    {
      ...project,
      topics: project.topics?.filter((topic) => topic !== "portfolio")
    }
  ))

  const projects = await Promise.all(
    projectsData.map(async (project) => {
      const hasVideo = await verifyHasVideo(project.name);

      return {
        id: project.id,
        name: project.name,
        description: project.description,
        homepage: project.homepage,
        github: `https://github.com/LuigiMDev/${project.name}`,
        topics: project.topics || [],
        media: hasVideo
          ? `https://raw.githubusercontent.com/luigimdev/${project.name}/main/portfolio/video.gif`
          : `https://raw.githubusercontent.com/luigimdev/${project.name}/main/portfolio/thumb.png`,
      };
    })
  );

  return [...projects, ...manualProjects];
};
