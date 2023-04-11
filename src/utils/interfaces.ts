export interface ISocialLink {
  id: number;
  icon: string;
  url: string;
}

export interface INavButton {
  id: number;
  label: string;
  sectionId: string;
}

export interface INavLink {
  id: number;
  label: string;
  path?: string;
  children?: Array<INavLink>;
}

export interface ICampaignCardData {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
}
