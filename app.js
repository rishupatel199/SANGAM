// SANGAM LINKEDIN HUB
// Member data below was populated from profiles.xlsx.
// To add/edit people later, update the "groups" array.

const groups = [
  {
    "name": "Dev Growth",
    "description": "BUILD, LEARN, GROW",
    "logo": "assets/group-1.png",
    "members": [
      {
        "name": "Sachin Tripathi",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/sachin-tripathi-2314a6259?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Akshit Raj",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/akshit-raj-59bb34289?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Subham Saini",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/shubham-saini-b76741274?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Mukti Porwal",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/mukti-porwal-185a12323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Kartikey Saxena",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/kartikey-saxena-b16193290?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Yash Srivastava",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/yash-srivastava-46a02a28b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Naresh Kumar",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/naresh-kumar-6692a3324?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Shubham Prasad",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/subham-prasad-2952a3324?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Rishu Patel",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/rishu-patelofficial?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },{
        "name": "Shailja Kumari",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/shailja-kumari-479032397?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Srijan Sourav",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/srijan-sourav-2b474a392?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Prince Kumar",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/prince-kumar-7345aa383?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      
      {
        "name": "Astha Kumari",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/astha-kumari-4b04613bb?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Ankita Chandravansi",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/ankita-chandravanshi-b18aa0363?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      }
    ]
  },
  {
    "name": "Code Club",
    "description": "CODE, SOLVE, CREATE",
    "logo": "assets/group-2.png",
    "members": [
      {
        "name": "Maneesh Kumar",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/0aimaneesh?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Aryaveer Parihar",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/aryavsparihar?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        "name": "Tejas Singh",
        "role": "SANGAM / Tech Community",
        "linkedin": "https://www.linkedin.com/in/tejas-singh-4695a1386?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      }
    ]
  },
  {
    "name": "NULL CYBER SECURITY",
    "description": "SECURE, DEFEND, EXPLORE",
    "logo": "assets/group-3.png",
    "members": []
  },
  {
    "name": "AI/ML CLUB",
    "description": "LEARN, TRAIN, INNOVATE",
    "logo": "assets/group-4.png",
    "members": []
  }
];

const grid = document.getElementById("groupsGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0]).join("").toUpperCase();
}

function safeLink(url) {
  return url && url !== "#" ? url : "#";
}

function render(query = "") {
  const q = query.trim().toLowerCase();
  let visibleGroups = 0;
  let visibleMembers = 0;

  grid.innerHTML = "";

  groups.forEach((group, index) => {
    const matchingMembers = group.members.filter(m =>
      !q ||
      group.name.toLowerCase().includes(q) ||
      group.description.toLowerCase().includes(q) ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q)
    );

    if (q && !group.name.toLowerCase().includes(q) && matchingMembers.length === 0) return;

    visibleGroups++;
    visibleMembers += matchingMembers.length;

    const card = document.createElement("article");
    card.className = "group-card";
    card.innerHTML = `
      <div class="group-top" role="button" tabindex="0" aria-expanded="false">
        <img class="group-logo" src="${group.logo}" alt="${group.name} logo">
        <div>
          <div class="group-index">0${index + 1} / GROUP</div>
          <h3 class="group-name">${group.name}</h3>
          <p class="group-desc">${group.description}</p>
        </div>
        <button class="toggle" aria-label="Expand group">+</button>
      </div>
      <div class="members">
        ${
          matchingMembers.length
          ? matchingMembers.map(member => `
          <div class="member">
            <div class="member-info">
              <div class="avatar">${initials(member.name)}</div>
              <div>
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
              </div>
            </div>
            <a class="linkedin" href="${safeLink(member.linkedin)}"
               target="_blank" rel="noopener noreferrer">
              <b>in</b><span> LinkedIn ↗</span>
            </a>
          </div>
        `).join("")
          : `<div class="member"><div class="member-role">Member list coming soon.</div></div>`
        }
      </div>
    `;

    const top = card.querySelector(".group-top");
    const open = () => {
      const isOpen = card.classList.toggle("open");
      top.setAttribute("aria-expanded", String(isOpen));
    };
    top.addEventListener("click", e => {
      if (e.target.closest("a")) return;
      open();
    });
    top.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });

    grid.appendChild(card);
  });

  if (!visibleGroups) {
    grid.innerHTML = `<div class="no-results">NO MEMBERS OR GROUPS FOUND — TRY ANOTHER SEARCH.</div>`;
  }

  const totalMembers = groups.reduce((sum, g) => sum + g.members.length, 0);
  resultCount.textContent = q
    ? `${visibleGroups} GROUP${visibleGroups === 1 ? "" : "S"} · ${visibleMembers} MEMBER${visibleMembers === 1 ? "" : "S"}`
    : `${groups.length} GROUPS · ${totalMembers} MEMBERS`;
}

searchInput.addEventListener("input", e => render(e.target.value));
render();

const parallaxItems = document.querySelectorAll("[data-parallax]");
let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    parallaxItems.forEach(el => {
      const amount = Number(el.dataset.parallax || 0);
      el.style.transform = `translate3d(0, ${y * amount}px, 0)`;
    });
    ticking = false;
  });
}, { passive: true });
