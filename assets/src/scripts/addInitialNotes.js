const sideBar = document.querySelector(".note__notes");
const pinned = document.querySelector("#pinned");
const normal = document.querySelector("#normal");
const blog = document.querySelector(".note__blog");

// Add Initial Notes
const initialNotesArray = [
  {
    title: " Experienced Frontend Developer ",
    author: "Mohammed Hedia",
    details: "Hello there! welcome to my notes-app...",
    isPinned: 1,
  },
  {
    title: "Welcome",
    author: "Mohammed Hedia",
    details: "Welcome to notes app...",
    isPinned: 0,
  },
];
// Function to clear existing notes
export const clearNotes = () => {
  normal.insertAdjacentHTML("afterend", "");
  pinned.insertAdjacentHTML("afterend", "");
};

export const addNote = (title, author, details, isPinned) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const newNote = `<div class="note__notes-noteItem">
    <h2 class="note__notes-noteItem-title">${title}</h2>
    <p class="note__notes-noteItem-details">${details}</p>
    <div class="note__notes-noteItem-last">
    <span class="note__notes-noteItem-last-date">${formattedDate}/ By ${author}</span>
    <button class="note__notes-noteItem-last-delete">Delete</button>
    </div>
    </div>`;

  if (isPinned) {
    pinned.insertAdjacentHTML("afterend", newNote);
  } else if (!isPinned) {
    normal.insertAdjacentHTML("afterend", newNote);
  }
  if (isPinned !== -1) {
    // Save the note to localStorage after adding it to the DOM
    clearNotes();
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({ title, author, details, isPinned });
    localStorage.setItem("notes", JSON.stringify(notes));
  }
};

export const addNoteOnly = (title, author, details, isPinned) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const newNote = `<div class="note__notes-noteItem">
    <h2 class="note__notes-noteItem-title">${title}</h2>
    <p class="note__notes-noteItem-details">${details}</p>
    <div class="note__notes-noteItem-last">
    <span class="note__notes-noteItem-last-date">${formattedDate}/ By ${author}</span>
    <button class="note__notes-noteItem-last-delete">Delete</button>
    </div>
    </div>`;

  if (isPinned) {
    pinned.insertAdjacentHTML("afterend", newNote);
  } else if (!isPinned) {
    normal.insertAdjacentHTML("afterend", newNote);
  }
};

initialNotesArray.forEach((note) => {
  addNoteOnly(note.title, note.author, note.details, note.isPinned);
});
if (window.matchMedia("(max-width: 600px)").matches) {
  blog.style.display = "block";
  sideBar.style.display = "none";
}

blog.innerHTML = `<h2 class="note__blog-title">
               Experienced
              <span class="note__blog-details-special">Frontend</span>
              Developer 
            </h2>
            <span class="note__blog-auther"
              >Mar 10, 2024 / By Mohammed Hedia</span
            >
            <p class="note__blog-details">
              Hello there! I am a dedicated
              <span class="note__blog-details-special">Frontend</span> developer
              . Proficient in HTML, CSS, JavaScript, and React, I also
              possess expertise in tools such as Figma, Sass,and Tailwind CSS
              .
              <br />
              <br />

              <span class="note__blog-details-special"
                >🛠️ Technical Proficiency:</span
              >
              <br />
              With a solid foundation in frontend technologies, I specialize in
              crafting visually appealing and highly functional user interfaces.
              My skill set extends to responsive web design, ensuring that the
              websites I develop are optimized for seamless performance across
              various screen sizes and devices, including mobile platforms. I
              pride myself on my ability to efficiently develop landing pages
              and complete full
              <span class="note__blog-details-special">Frontend</span> projects
              with multiple pages s.
              <br />
              <br />

              
              <span class="note__blog-details-special">🚀 Summary:</span>
              <br />
              As a
              <span class="note__blog-details-special">Frontend</span>
              developer, I bring a blend of technical proficiency and creative
              flair to every project. Whether it's collaborating with teams or
              working independently, my goal is to deliver high-quality
              solutions that exceed expectations. If you're seeking a skilled
              developer who can elevate your web projects with responsive design
              for mobile, let's connect and explore opportunities for
              collaboration!  #<span class="note__blog-details-special"
                >Frontend</span
              >Development #WebDevelopment #ResponsiveDesign
              <br />
              <br />
            </p>`;
