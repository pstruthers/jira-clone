import { Models } from "node-appwrite";

export enum TaskStatus {
	BACKLOG = "BACKLOG",
	TODO = "TODO",
	IN_PROGRESS = "IN_PROGRESS",
	IN_REVIEW = "IN_REVIEW",
	DONE = "DONE"
};

export type Task = Models.Document & {
	name: string;
	status: TaskStatus;
	projectId: string;
	assigneeId: string;
	position: number;
	dueDate: string;
};