// Data Source: Issues of the Newspaper
const issues = [
    {
        id: 'issue-1',
        vol: 'Expedition Day 1',
        date: 'November 20, 2025',
        lead: {
            headline: 'WESTGATE BREACHED!',
            subhead: 'The Company of Dwarves enters the Mines of Moria once more.',
            author: 'Gimli, Lockbearer',
            tag: 'Expedition Update',
            image: 'moria_gameplay.png', // Image for the lead story
            body: `
                <p><span class="drop-cap">A</span>t long last, the doors of Durin have opened to us! The air is stale, and the darkness is absolute, but the spirit of the company is high. We have established a forward camp in the first hall.</p>
                <p>Lord Gimli struck the first blow against the rubble blocking our path, and with a mighty crash, the way was clear. "Baruk Khazâd!" he cried, and the echoes rang like thunder in the deep.</p>
                <p>We have found traces of the old colony—broken tools, scattered armor—but no sign of the enemy yet. We must be cautious. The deep places of the world hold secrets that are best left undisturbed, but we are stubborn. We are Dwarves.</p>
                <p>Tomorrow, we press on towards the Bridge of Khazad-dûm. May Aulë guide our pickaxes.</p>
            `
        },
        sidebar: [
            { type: 'widget', title: 'Resource Watch', content: '<ul><li>Iron: High</li><li>Gold: Low</li><li>Ale: Critical</li></ul>' },
            { type: 'wanted', name: 'Cave Troll', reward: '500 Gold' },
            { type: 'widget', title: 'Rune of the Day', content: '<p style="font-size: 2rem; text-align: center;">ᚠ (Fehu) - Wealth</p>' }
        ],
        secondary: [
            { title: 'Mithril Found?', excerpt: 'Rumors of a new vein near the lower deeps...' },
            { title: 'Orc Patrols', excerpt: 'Scouts report movement in the shadows...' },
            { title: 'Best Brews', excerpt: 'How to brew ale in the dark...' }
        ]
    },
    {
        id: 'issue-2',
        vol: 'Expedition Day 5',
        date: 'November 24, 2025',
        lead: {
            headline: 'SHADOW IN THE DEEP',
            subhead: 'Strange noises heard from the lower levels.',
            author: 'Balin (Spirit)',
            tag: 'Warning',
            body: `
                <p><span class="drop-cap">D</span>rums. We hear drums in the deep. They are coming.</p>
                <p>The excavation of the Third Hall has been halted. The miners report a feeling of dread that cannot be explained by mere darkness. Torches flicker and die without wind.</p>
                <p>We have doubled the guard. If there is something down there, we will be ready for it. We did not come this far to be frightened by ghosts.</p>
            `
        },
        sidebar: [
            { type: 'widget', title: 'Casualties', content: 'None (Yet)' },
            { type: 'wanted', name: 'Goblin King', reward: '1000 Gold' }
        ],
        secondary: [
            { title: 'Lost Pickaxe', excerpt: 'Reward for return of masterwork tool...' },
            { title: 'Mushroom Stew', excerpt: 'A delicacy of the deep...' },
            { title: 'Echoes', excerpt: 'Are the walls speaking to us?' }
        ]
    }
];

// DOM Elements
const issueList = document.getElementById('issue-list');
const paperVol = document.getElementById('paper-vol');
const paperDate = document.getElementById('paper-date');
const leadTag = document.getElementById('lead-tag');
const leadHeadline = document.getElementById('lead-headline');
const leadSubhead = document.getElementById('lead-subhead');
const leadAuthor = document.getElementById('lead-author');
const leadBody = document.getElementById('lead-body');
const leadMedia = document.getElementById('lead-media'); // New media container
const sidebarContent = document.getElementById('sidebar-content');
const secondaryStories = document.getElementById('secondary-stories');

// Initialize Newsstand
function initNewsstand() {
    issues.forEach((issue, index) => {
        const preview = document.createElement('div');
        preview.classList.add('issue-preview');
        if (index === 0) preview.classList.add('active');

        preview.innerHTML = `
            <span class="preview-date">${issue.date}</span>
            <div class="preview-headline">${issue.lead.headline}</div>
        `;

        preview.addEventListener('click', () => {
            // Remove active class from all
            document.querySelectorAll('.issue-preview').forEach(el => el.classList.remove('active'));
            // Add active class to clicked
            preview.classList.add('active');
            // Load content
            loadIssue(issue);
        });

        issueList.appendChild(preview);
    });

    // Load first issue by default
    loadIssue(issues[0]);
}

// Load Issue Content
function loadIssue(issue) {
    // Update Header
    paperVol.textContent = issue.vol;
    paperDate.textContent = issue.date;

    // Update Lead Story
    leadTag.textContent = issue.lead.tag;
    leadHeadline.textContent = issue.lead.headline;
    leadSubhead.textContent = issue.lead.subhead;
    leadAuthor.textContent = issue.lead.author;
    leadBody.innerHTML = issue.lead.body;

    // Handle Media (Image/Video)
    leadMedia.innerHTML = ''; // Clear previous media
    if (issue.lead.image) {
        const img = document.createElement('img');
        img.src = issue.lead.image;
        img.alt = "Gameplay Screenshot";
        leadMedia.appendChild(img);
        leadMedia.style.display = 'block';
    } else {
        leadMedia.style.display = 'none';
    }

    // Update Sidebar
    sidebarContent.innerHTML = '';
    issue.sidebar.forEach(widget => {
        const widgetDiv = document.createElement('div');
        if (widget.type === 'wanted') {
            widgetDiv.classList.add('widget', 'wanted-poster');
            widgetDiv.innerHTML = `
                <h3>WANTED</h3>
                <div class="wanted-name">${widget.name}</div>
                <div class="reward">REWARD: ${widget.reward}</div>
            `;
        } else {
            widgetDiv.classList.add('widget');
            widgetDiv.innerHTML = `
                <h3>${widget.title}</h3>
                <div>${widget.content}</div>
            `;
        }
        sidebarContent.appendChild(widgetDiv);
    });

    // Update Secondary Stories
    secondaryStories.innerHTML = '';
    issue.secondary.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story-card');
        storyDiv.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.excerpt}</p>
        `;
        secondaryStories.appendChild(storyDiv);
    });
}

// Start the app
initNewsstand();
