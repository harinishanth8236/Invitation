export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  dateFormatted: string;
  time: string;
  timeHighlight: string;
  venueName: string;
  venueAddress: string;
  description: string;
  iconName: 'reception' | 'ceremony' | 'venue';
}

export interface Blessing {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}
