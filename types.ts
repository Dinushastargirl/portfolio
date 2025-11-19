
import { ReactNode } from 'react';

export enum WindowType {
  HOME = 'HOME',
  JOURNEY = 'JOURNEY',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
  QUALIFICATIONS = 'QUALIFICATIONS',
}

export interface WindowState {
  id: WindowType;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  content: ReactNode;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  color: string; // For card border/accent
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: 'education' | 'work' | 'tech';
}
