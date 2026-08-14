/**
 * FLIGHT400 Lab — First Acceptance Bobathon
 * Example of a filled-in company event config.
 */
window.FLIGHT400_CONFIG = {

  companyName:  'First Acceptance',
  eventName:    'First Acceptance Bobathon 2026',
  eventDate:    'Tuesday, August 18, 2026',

  primaryColor: '#0F62FE',
  accentColor:  '#F0AB00',

  // Box folder containing IBM i credentials & ssh_private_key.pem for this engagement.
  // Set to null to hide the link.
  boxFolderUrl: 'https://ibm.ent.box.com/folder/408846604410?s=7zs4ogbqxm3ssbp412orimsvl5td5u81', // ← REPLACE with the actual Box folder URL

  agendaItems: [
    {
      time:    '9:00 – 9:15 AM',
      title:   'Welcome & Introduction',
      bullets: ['Welcome by Acme leadership', 'Event objectives and format', 'Housekeeping / logistics']
    },
    {
      time:    '9:15 – 9:30 AM',
      title:   'Environment Setup',
      bullets: ['Connect Bob IDE to IBM i', 'Install Premium Package for i', 'Find your library number below']
    },
    {
      time:    '9:30 – 11:30 AM',
      title:   'Hands-On Lab Exercises',
      bullets: ['Self-select your track (Exercises 1–7)', 'Instructors available for questions', 'Independent exploration and practice']
    }
  ],

  attendeeTable: [
    { student: 1,  attendeeName: 'Roy Chester',      library: 'FLGHT402', devPort: 3002, reactUrl: 'http://localhost:3002' },
    { student: 2,  attendeeName: 'Tawanda Bryant',   library: 'FLGHT403', devPort: 3003, reactUrl: 'http://localhost:3003' },
    { student: 3,  attendeeName: 'Michael Catalani', library: 'FLGHT404', devPort: 3004, reactUrl: 'http://localhost:3004' },
    { student: 4,  attendeeName: 'Dan Hass',         library: 'FLGHT405', devPort: 3005, reactUrl: 'http://localhost:3005' },
    { student: 5,  attendeeName: 'Pon Phanbandith',  library: 'FLGHT406', devPort: 3006, reactUrl: 'http://localhost:3006' },
    { student: 6,  attendeeName: 'Kieth Duffek',     library: 'FLGHT407', devPort: 3007, reactUrl: 'http://localhost:3007' },
    { student: 7,  attendeeName: 'Mabel Mapepa',     library: 'FLGHT408', devPort: 3008, reactUrl: 'http://localhost:3008' },
    { student: 8,  attendeeName: 'Kahlid Akhtar',    library: 'FLGHT409', devPort: 3009, reactUrl: 'http://localhost:3009' },
    { student: 9,  attendeeName: 'Richard Kwon',     library: 'FLGHT410', devPort: 3010, reactUrl: 'http://localhost:3010' },
    { student: 10, attendeeName: 'Richard Barker',   library: 'FLGHT411', devPort: 3011, reactUrl: 'http://localhost:3011' },
    { student: 11, attendeeName: 'Rich Barker',      library: 'FLGHT412', devPort: 3012, reactUrl: 'http://localhost:3012' },
    { student: 12, attendeeName: 'Justin Barrett',   library: 'FLGHT413', devPort: 3013, reactUrl: 'http://localhost:3013' },
    { student: 13, attendeeName: 'Jillena Smets',    library: 'FLGHT414', devPort: 3014, reactUrl: 'http://localhost:3014' },
    { student: 14, attendeeName: 'Chris Elledge',    library: 'FLGHT415', devPort: 3015, reactUrl: 'http://localhost:3015' }
  ]

};
