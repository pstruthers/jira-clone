import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { Button } from "../../../components/ui/button";
import { PlusIcon } from "lucide-react";
import { DottedSeparator } from "../../../components/dotted-separator";
import Link from "next/link";
import { Card, CardContent } from "../../../components/ui/card";
import { Project } from "@/features/projects/types";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";

interface ProjectListProps {
  data: Project[];
  total: number;
}

export const ProjectList = ({ data, total }: ProjectListProps) => {
  const workspaceId = useWorkspaceId();

  const { open: createProject } = useCreateProjectModal();

  return (
    <div className="flex flex-col col-span-1 gap-y-4">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Projects ({total})</p>
          <Button onClick={createProject} variant="secondary" size="icon">
            <PlusIcon className="size-4 text-neutral-400" />
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.map((project) => (
            <li key={project.$id}>
              <Link href={`/workspaces/${workspaceId}/projects/${project.$id}`}>
                <Card className="shadow-none rounded-lg hover:opacity-75 transition">
                  <CardContent className="flex items-center gap-x-2.5 p-4">
										<ProjectAvatar
											name={project.name}
											image={project.imageUrl}
											className="size-12"
											fallbackClassName="text-lg"
										/>
										<p className="text-lg font-medium truncate">{project.name}</p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
            No projects found
          </li>
        </ul>
      </div>
    </div>
  );
};
