/**
 * FLIGHT400 Lab — Event Configuration
 * =====================================
 * Copy the entire _template/ folder and rename it for your event (e.g. contoso/).
 * Edit only this file. Everything else (CSS, JS, tracks) is shared from ../
 *
 * FIELDS
 * ──────
 * companyName   Display name shown in the hero badge and page footer.
 * eventName     Full event title, e.g. "TechConnect 2026".
 * eventDate     Human-readable date, e.g. "Tuesday, September 9, 2026".
 * primaryColor  Hex — overrides --primary CSS token. Default: IBM Blue #0F62FE.
 * accentColor   Hex — overrides --accent CSS token. Default: IBM Gold #F0AB00.
 *
 * boxFolderUrl  URL to the Box folder containing the IBM i credentials and
 *               ssh_private_key.pem for this engagement. Rendered as a link in
 *               Setup step 5 (Connect Bob IDE to IBM i). Omit or set to null to
 *               hide the link.
 *
 * agendaItems   Array of agenda sessions rendered into the "Event Agenda" modal.
 *               Remove or set to [] to hide the Agenda button entirely.
 *               Each item: { time: string, title: string, bullets: string[] }
 *
 * attendeeTable Array of attendee rows rendered into the Setup card assignment
 *               table, replacing the generic 1–50 table.
 *               Each row: { student: number, attendeeName?: string, library: string, devPort: number, reactUrl: string }
 *               attendeeName is optional — when any row includes it, an "Attendee Name" column
 *               is automatically injected into the table header and each row.
 *               Pattern: library = 'FLGHT4' + zero-padded(student),
 *                        devPort = 3000 + student,
 *                        reactUrl = 'http://localhost:' + devPort
 *
 * tracks        Optional. Array of track slugs to display, in order.
 *               Omit this field entirely to show all 8 tracks (the default).
 *               When provided, this list completely replaces the default —
 *               only the specified tracks will load, in the order given.
 *               Valid slugs: 'setup', 'track-1', 'track-2', 'track-3',
 *                            'track-4', 'track-5', 'track-6', 'track-7'
 *               Example (show only setup + tracks 1, 3, 4):
 *                 tracks: ['setup', 'track-1', 'track-3', 'track-4']
 *
 *               Local track overrides: if you place a file at
 *               <eventslug>/tracks/<slug>.html it will be used instead of the
 *               shared docs/tracks/<slug>.html for that slug only.
 *               All other slugs still load from the shared folder.
 */

window.FLIGHT400_CONFIG = {

  companyName:  'Parts Authority',
  eventName:    'Parts Authority Bobathon',
  eventDate:    'September 25',

  primaryColor: '#0F62FE',             // ← optional brand color override
  accentColor:  '#F0AB00',             // ← optional accent color override

  // ← REPLACE with the Box folder URL containing credentials & ssh_private_key.pem
  // Set to null to hide the link entirely.
  boxFolderUrl: 'https://ibm.box.com/s/9jd4w4nbnjil64swptstmpvm0nzynfi1',

  /**
   * Agenda sessions — remove this array entirely to hide the Agenda button.
   */
  agendaItems: [
    {
      time:    '12:00 PM – 12:20 PM EST',
      title:   'Welcome & Bob Overview',
      bullets: [
        'Welcome and introductions',
        'Event objectives',
        'Agenda overview',
        'Overview of Bob and Bobalytics'
      ]
    },
    {
      time:    '12:20 PM – 12:40 PM EST',
      title:   'Setup & Getting Started: Connect to IBM i',
      bullets: [
        'Connect Bob IDE to sandbox IBM i',
        'Ensure all prerequisites are complete'
      ]
    },
    {
      time:    '12:40 PM – 2:00 PM EST',
      title:   'Hands-On Labs on IBM i',
      bullets: [
        'Exercise 1: Code Explanation & Architecture Documentation',
        'Exercise 2: Program-Level Explanation & RPG Modernization',
        'Exercise 3: Plan and implement an end-to-end application enhancement'
      ]
    },
    {
      time:    '2:00 PM – 2:20 PM EST',
      title:   'Break',
      bullets: []
    },
    {
      time:    '2:20 PM – 3:50 PM EST',
      title:   'IBM i Hackathon and Java Modernization (Breakout Sessions)',
      bullets: [
        'Track 1: IBM i Hackathon',
        'Connect Bob to your live IBM i environment',
        'Identify a use case or modernization challenge and innovate with Bob',
        'Or spend more time in the sandbox exploring other Bob features',
        'Track 2: Java Modernization Labs (Breakout Room)',
        'IBM will guide though Java-focused features of the premium package for Java',
        'Modernize a Java 17 application to Java 21'
      ]
    },
    {
      time:    '3:50 PM – 4:00 PM EST',
      title:   'Wrap-Up & Next Steps',
      bullets: [
        'Key takeaways',
        'Helpful resources',
        'Recommended next steps',
        'Open Q&A and feedback session'
      ]
    }
  ],

  /**
   * Attendee assignment table — Parts Authority, Sept 25
   * Students 1–20 mapped to FLGHT401–FLGHT420 (FLGHT400 kept unused)
   */
  attendeeTable: [
    { student:  1, attendeeName: 'Aaron Loo',                     library: 'FLGHT401', devPort: 3001, reactUrl: 'http://localhost:3001' },
    { student:  2, attendeeName: 'Konstantin Goldzberg',         library: 'FLGHT402', devPort: 3002, reactUrl: 'http://localhost:3002' },
    { student:  3, attendeeName: 'Muhammad Rizwan',               library: 'FLGHT403', devPort: 3003, reactUrl: 'http://localhost:3003' },
    { student:  4, attendeeName: 'Roger Guedikian',               library: 'FLGHT404', devPort: 3004, reactUrl: 'http://localhost:3004' },
    { student:  5, attendeeName: 'Sal Gonzalez',                  library: 'FLGHT405', devPort: 3005, reactUrl: 'http://localhost:3005' },
    { student:  6, attendeeName: 'Steve Mcdaniels',               library: 'FLGHT406', devPort: 3006, reactUrl: 'http://localhost:3006' },
    { student:  7, attendeeName: 'Aditya Anjani Kuma Patnala',    library: 'FLGHT407', devPort: 3007, reactUrl: 'http://localhost:3007' },
    { student:  8, attendeeName: 'Harshal Shah',                  library: 'FLGHT408', devPort: 3008, reactUrl: 'http://localhost:3008' },
    { student:  9, attendeeName: 'Debashish Tripathy',            library: 'FLGHT409', devPort: 3009, reactUrl: 'http://localhost:3009' },
    { student: 10, attendeeName: 'Kamal Rai',                     library: 'FLGHT410', devPort: 3010, reactUrl: 'http://localhost:3010' },
    { student: 11, attendeeName: 'Pramod Pillai',                 library: 'FLGHT411', devPort: 3011, reactUrl: 'http://localhost:3011' },
    { student: 12, attendeeName: 'Akash Gupta',                   library: 'FLGHT412', devPort: 3012, reactUrl: 'http://localhost:3012' },
    { student: 13, attendeeName: 'Cameron Seitz',                 library: 'FLGHT413', devPort: 3013, reactUrl: 'http://localhost:3013' },
    { student: 14, attendeeName: 'Helen Yao',                     library: 'FLGHT414', devPort: 3014, reactUrl: 'http://localhost:3014' },
    { student: 15, attendeeName: 'Rishika Soni',                  library: 'FLGHT415', devPort: 3015, reactUrl: 'http://localhost:3015' },
    { student: 16, attendeeName: 'SPARE',                         library: 'FLGHT416', devPort: 3016, reactUrl: 'http://localhost:3016' },
    { student: 17, attendeeName: 'SPARE',                         library: 'FLGHT417', devPort: 3017, reactUrl: 'http://localhost:3017' },
    { student: 18, attendeeName: 'SPARE',                         library: 'FLGHT418', devPort: 3018, reactUrl: 'http://localhost:3018' },
    { student: 19, attendeeName: 'SPARE',                         library: 'FLGHT419', devPort: 3019, reactUrl: 'http://localhost:3019' },
    { student: 20, attendeeName: 'SPARE',                         library: 'FLGHT420', devPort: 3020, reactUrl: 'http://localhost:3020' }
  ],

  // tracks: ['setup', 'track-1', 'track-3', 'track-4']
  // ↑ Uncomment and edit to show only specific tracks. Omit to show all 8.

};
