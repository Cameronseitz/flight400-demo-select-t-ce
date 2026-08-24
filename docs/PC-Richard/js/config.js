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

  companyName:  'P.C. Richard & Son',
  eventName:    'FLIGHT400 Lab',
  eventDate:    'Your Event Date',     // ← REPLACE e.g. "Tuesday, September 9, 2026"

  primaryColor: '#0F62FE',             // ← optional brand color override
  accentColor:  '#F0AB00',             // ← optional accent color override

  // ← REPLACE with the Box folder URL containing credentials & ssh_private_key.pem
  // Set to null to hide the link entirely.
  boxFolderUrl: null,

  /**
   * Agenda sessions — remove this array entirely to hide the Agenda button.
   */
  agendaItems: [
    {
      time:    '1:00 PM – 1:10 PM EST',
      title:   'Welcome & Agenda',
      bullets: ['Welcome and event objectives', 'Agenda overview']
    },
    {
      time:    '1:10 PM – 1:30 PM EST',
      title:   'Setup & Getting Started — Connecting to IBM i',
      bullets: ['Connect Bob IDE to IBM i', 'Install Premium Package for i', 'Confirm your library and environment']
    },
    {
      time:    '1:30 PM – 3:00 PM EST',
      title:   'How to Get the Most Out of Bob',
      bullets: [
        'How to use custom rules working in library list',
        'Workflows: modernization fixed to free',
        'Workflows: automate test creation',
        'Plan mode before longer workflows',
        'Walkthrough: how to add a new field'
      ]
    },
    {
      time:    '3:00 PM – 5:00 PM EST',
      title:   'Hackathon Portion',
      bullets: [
        'PC Richard attendees connect to their live IBM i',
        'IBM team present for guidance and Q&A',
        'Show and tell'
      ]
    },
    {
      time:    '5:00 PM – 5:20 PM EST',
      title:   'Wrap-Up & Next Steps',
      bullets: ['Key takeaways', 'Resources and next steps', 'Open Q&A']
    }
  ],

  /**
   * Attendee assignment table — PC Richard & Son, Flight 401+
   */
  attendeeTable: [
    { student:  1, attendeeName: 'Gregory Simmons',   library: 'FLGHT401', devPort: 3001, reactUrl: 'http://localhost:3001' },
    { student:  2, attendeeName: 'John Lynch',         library: 'FLGHT402', devPort: 3002, reactUrl: 'http://localhost:3002' },
    { student:  3, attendeeName: 'Mike R',             library: 'FLGHT403', devPort: 3003, reactUrl: 'http://localhost:3003' },
    { student:  4, attendeeName: 'Adam Lebit',         library: 'FLGHT404', devPort: 3004, reactUrl: 'http://localhost:3004' },
    { student:  5, attendeeName: 'Cathy Farrell',      library: 'FLGHT405', devPort: 3005, reactUrl: 'http://localhost:3005' },
    { student:  6, attendeeName: 'Chris Gomez',        library: 'FLGHT406', devPort: 3006, reactUrl: 'http://localhost:3006' },
    { student:  7, attendeeName: 'Steve Malark',       library: 'FLGHT407', devPort: 3007, reactUrl: 'http://localhost:3007' },
    { student:  8, attendeeName: 'Steve Morales',      library: 'FLGHT408', devPort: 3008, reactUrl: 'http://localhost:3008' },
    { student:  9, attendeeName: 'Matt',               library: 'FLGHT409', devPort: 3009, reactUrl: 'http://localhost:3009' },
    { student: 10, attendeeName: 'Walter Bellisio',    library: 'FLGHT410', devPort: 3010, reactUrl: 'http://localhost:3010' },
    { student: 11, attendeeName: 'Lloyd Bailey',       library: 'FLGHT411', devPort: 3011, reactUrl: 'http://localhost:3011' },
    { student: 12, attendeeName: 'Luke de Armas',      library: 'FLGHT412', devPort: 3012, reactUrl: 'http://localhost:3012' },
    { student: 13, attendeeName: 'Jared Fleming',      library: 'FLGHT413', devPort: 3013, reactUrl: 'http://localhost:3013' },
    { student: 14, attendeeName: 'Lisa Mele',          library: 'FLGHT414', devPort: 3014, reactUrl: 'http://localhost:3014' },
    { student: 15, attendeeName: "Debbie O'Brien",     library: 'FLGHT415', devPort: 3015, reactUrl: 'http://localhost:3015' },
    { student: 16, attendeeName: 'Ashish',             library: 'FLGHT416', devPort: 3016, reactUrl: 'http://localhost:3016' },
    { student: 17, attendeeName: 'Steve Molinaro',     library: 'FLGHT417', devPort: 3017, reactUrl: 'http://localhost:3017' },
    { student: 18, attendeeName: 'Nima Bank',          library: 'FLGHT418', devPort: 3018, reactUrl: 'http://localhost:3018' },
    { student: 19, attendeeName: 'Dylan Coyle',        library: 'FLGHT419', devPort: 3019, reactUrl: 'http://localhost:3019' },
    { student: 20, attendeeName: 'Mike Shepard',       library: 'FLGHT420', devPort: 3020, reactUrl: 'http://localhost:3020' },
    { student: 21, attendeeName: 'Lenny',              library: 'FLGHT421', devPort: 3021, reactUrl: 'http://localhost:3021' },
    { student: 22, attendeeName: 'Steve Wolk',         library: 'FLGHT422', devPort: 3022, reactUrl: 'http://localhost:3022' },
    { student: 23, attendeeName: 'Mike Zaringhalam',   library: 'FLGHT423', devPort: 3023, reactUrl: 'http://localhost:3023' }
  ],

  // tracks: ['setup', 'track-1', 'track-3', 'track-4']
  // ↑ Uncomment and edit to show only specific tracks. Omit to show all 8.

};
