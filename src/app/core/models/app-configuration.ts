import { NavLink } from './nav-link';

export interface AppConfiguration {
  header: HeaderSection;
}

export interface HeaderSection {
  links: NavLink[];
}
