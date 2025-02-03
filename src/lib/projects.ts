export interface Project {
    title: string;
    description: string;
    link?: string;
    image?: string;
    logo?: string;
    color?: ProjectColor;
    invertLogoOnDark?: boolean;
    cta?: string;
}

export type ProjectColor = { light: string; dark: string } | string;

export type ProjectSectionPresentation = 'carousel' | 'list';

export interface ProjectSection {
    title: string;
    presentation: ProjectSectionPresentation;
    projects: Project[];
}