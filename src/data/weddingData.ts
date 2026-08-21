import { EventDetail } from '../types';

export const WEDDING_DATA = {
  groom: {
    name: 'ANAND K.',
    degree: 'B.E. – HPE, Bangalore',
    fullName: 'Anand K. B.E. (HPE, Bangalore)',
  },
  bride: {
    name: 'SUBHASHINI R.',
    degree: 'M.E. – Infosys, Coimbatore',
    fullName: 'Subhashini R. M.E. (Infosys, Coimbatore)',
  },
  coupleNames: 'Anand & Subhashini',
  datesSummary: '12 & 13 September 2026',
  
  invitationCover: {
    eyebrow: 'WEDDING INVITATION',
    subtitle: 'Together with our families,\nwe invite you to celebrate\nthe wedding of Anand & Subhashini.',
    receptionDate: 'Reception • Saturday, 12 September 2026',
    weddingDate: 'Wedding Ceremony • Sunday, 13 September 2026',
  },

  events: [
    {
      id: 'reception',
      title: 'EVENING RECEPTION',
      subtitle: 'An evening of love, laughter & celebration.',
      date: 'Saturday, 12 September 2026',
      dateFormatted: '12 Sep 2026',
      time: '6:30 PM onwards',
      timeHighlight: '6:30 PM Onwards',
      venueName: 'K.P. Mahal',
      venueAddress: 'Pallapatti, Karur District, Tamil Nadu',
      description: 'An evening of love, laughter, and cherished moments as we celebrate the newlyweds with family and friends',
      iconName: 'reception',
    },
    {
      id: 'wedding-ceremony',
      title: 'WEDDING CEREMONY',
      subtitle: 'Sacred vows, cherished traditions & blessings.',
      date: 'Sunday, 13 September 2026',
      dateFormatted: '13 Sep 2026',
      time: '7:00 AM – 8:15 AM',
      timeHighlight: '7:00 AM – 8:15 AM',
      venueName: 'K.P. Mahal',
      venueAddress: 'Pallapatti, Karur District, Tamil Nadu',
      description: 'Witness the sacred union of two hearts and two families, followed by cherished traditions, blessings, and a festive feast.',
      iconName: 'ceremony',
    },
  ] as EventDetail[],

  venue: {
    name: 'K.P. Mahal',
    location: 'Pallapatti, Karur District',
    fullAddress: 'K.P. Mahal, Pallapatti Main Road, Pallapatti, Karur District, Tamil Nadu 639205',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=KP+Mahal+Pallapatti+Karur',
    appleMapsUrl: 'https://maps.apple.com/?q=KP+Mahal+Pallapatti+Karur',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=KP+Mahal+Pallapatti+Karur',
    coordinates: {
      lat: 10.7441,
      lng: 77.8928,
    },
  },

  countdownTarget: '2026-09-13T07:00:00+05:30', // 13 Sept 2026 7:00 AM IST

  share: {
    title: 'Anand & Subhashini Wedding Invitation',
    text: 'Together with their families, Anand & Subhashini warmly invite you to celebrate their wedding on 12 & 13 September 2026 at K.P. Mahal, Pallapatti.',
    whatsappMessage: `✨ *Wedding Invitation: Anand & Subhashini* ✨\n\nTogether with their families, we warmly invite you to celebrate our wedding!\n\n📅 *Evening Reception:* Saturday, 12 Sept 2026, 6:30 PM onwards\n📅 *Wedding Ceremony:* Sunday, 13 Sept 2026, 7:00 AM – 8:15 AM\n📍 *Venue:* K.P. Mahal, Pallapatti, Karur District\n\nTap the link to view our interactive invitation:\n`,
  },
};

export function generateGoogleCalendarUrl(): string {
  const startTime = '20260912T130000Z'; // 12 Sep 6:30 PM IST (UTC+5:30)
  const endTime = '20260913T090000Z';   // 13 Sep 2:30 PM IST
  const title = encodeURIComponent('Wedding of Anand & Subhashini');
  const details = encodeURIComponent(
    'Wedding celebration of Anand K. B.E. & Subhashini R. M.E.\n\n' +
    '• Evening Reception: Saturday, 12 Sep 2026 (6:30 PM onwards)\n' +
    '• Wedding Ceremony: Sunday, 13 Sep 2026 (7:00 AM – 8:15 AM)\n\n' +
    'Venue: K.P. Mahal, Pallapatti, Karur District'
  );
  const location = encodeURIComponent('K.P. Mahal, Pallapatti, Karur District, Tamil Nadu');
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
}

export function downloadIcsFile() {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Anand & Subhashini Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:wedding-anand-subhashini-2026@invitation',
    'DTSTAMP:20260901T000000Z',
    'DTSTART:20260912T130000Z',
    'DTEND:20260913T090000Z',
    'SUMMARY:Wedding of Anand & Subhashini',
    'DESCRIPTION:Wedding celebration of Anand K. B.E. & Subhashini R. M.E.\\nReception: 12 Sep 2026 (6:30 PM onwards)\\nWedding Ceremony: 13 Sep 2026 (7:00 AM - 8:15 AM)\\nVenue: K.P. Mahal\\, Pallapatti\\, Karur District',
    'LOCATION:K.P. Mahal\\, Pallapatti\\, Karur District\\, Tamil Nadu',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Anand-Subhashini-Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
