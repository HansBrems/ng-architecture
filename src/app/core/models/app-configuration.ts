export interface AppConfiguration {
  header: HeaderSection;
}

export interface HeaderSection {
  links: HeaderLink[];
}

export interface HeaderLink {
  label: string;
  to: string;
}
