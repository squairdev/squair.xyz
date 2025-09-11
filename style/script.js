const blob = document.getElementById("blob");
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let targetX = x;
let targetY = y;
window.addEventListener("pointermove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});
function tick() {
  const ease = 0.04; 
  x += (targetX - x) * ease;
  y += (targetY - y) * ease;

  blob.style.setProperty("--x", x + "px");
  blob.style.setProperty("--y", y + "px");

  requestAnimationFrame(tick);
}
tick();
window.addEventListener("resize", () => {
  if (!Number.isFinite(targetX) || !Number.isFinite(targetY)) {
    targetX = window.innerWidth / 2;
    targetY = window.innerHeight / 2;
  }
});

document.getElementById("desk-btn-a").addEventListener("click", () => btnMoveDesk('a'));
document.getElementById("desk-btn-b").addEventListener("click", () => btnMoveDesk('b'));
document.getElementById("desk-btn-c").addEventListener("click", () => btnMoveDesk('c'));
document.getElementById("desk-btn-d").addEventListener("click", () => btnMoveDesk('d'));

function btnMoveDesk(int) {
  console.log(int);
  document.getElementById(`desk-btn-${int}`).classList.add("bg-indigo-700", "transform", "duration-300", "transition-all");
  if (int === 'a') {
    document.getElementById(`desk-btn-b`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-c`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-d`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  } else if (int === 'b') {
    document.getElementById(`desk-btn-a`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-c`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-d`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  } else if (int === 'c') {
    document.getElementById(`desk-btn-a`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-b`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-d`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  } else if (int === 'd') {
    document.getElementById(`desk-btn-a`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-b`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`desk-btn-c`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  }
}

document.getElementById("mobile-btn-a").addEventListener("click", () => btnMovemobile('a'));
document.getElementById("mobile-btn-b").addEventListener("click", () => btnMovemobile('b'));
document.getElementById("mobile-btn-c").addEventListener("click", () => btnMovemobile('c'));
document.getElementById("mobile-btn-d").addEventListener("click", () => btnMovemobile('d'));

function btnMovemobile(int) {
  console.log(int);
  document.getElementById(`mobile-btn-${int}`).classList.add("bg-indigo-700", "transform", "duration-300", "transition-all");
  if (int === 'a') {
    document.getElementById(`mobile-btn-b`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-c`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-d`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  } else if (int === 'b') {
    document.getElementById(`mobile-btn-a`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-c`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-d`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  } else if (int === 'c') {
    document.getElementById(`mobile-btn-a`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-b`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-d`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  } else if (int === 'd') {
    document.getElementById(`mobile-btn-a`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-b`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
    document.getElementById(`mobile-btn-c`).classList.remove("bg-indigo-700", "transform", "duration-300", "transition-all");
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const userId = '1039340580012036106';
    const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;

    const userCard = document.getElementById('user-card');
    const avatar = document.getElementById('avatar');
    const lanyardUsername = document.getElementById('lanyard-username');
    const lanyardDiscordTag = document.getElementById('lanyard-discord-tag');
    const lanyardServerTag = document.getElementById('lanyard-server-tag');
    const statusIcon = document.getElementById('status-icon');
    const activityWrapper = document.getElementById('activity-wrapper');
    const activitySection = document.getElementById('activity-section');

    const statusMap = {
        online: { colorClass: 'status-online', iconClass: 'fa-circle' },
        idle: { colorClass: 'status-idle', iconClass: 'fa-moon' },
        dnd: { colorClass: 'status-dnd', iconClass: 'fa-minus-circle' },
        offline: { colorClass: 'status-offline', iconClass: 'fa-circle' }
    };

    async function fetchLanyardData() {
        if (!userCard) return;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const { data } = await response.json();

            updateProfile(data);
            updateStatus(data.discord_status);
            updateActivities(data.activities);
            
            userCard.classList.remove('opacity-0');

        } catch (error) {
            console.error("Failed to fetch Lanyard data:", error);
            lanyardUsername.textContent = "Error";
            lanyardDiscordTag.textContent = "Could not load data.";
            updateStatus('offline');
            userCard.classList.remove('opacity-0');
        }
    }

    function updateProfile(data) {
        const user = data.discord_user;
        const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
        
        avatar.src = avatarUrl;
        avatar.onerror = () => { avatar.src = `https://placehold.co/80x80/1f2937/ffffff?text=${user.username.charAt(0)}`; };
        lanyardUsername.textContent = user.global_name || user.username;
        lanyardDiscordTag.textContent = `@${user.username}`;

        if (data.kv && data.kv.sev) {
            lanyardServerTag.textContent = data.kv.sev;
            lanyardServerTag.classList.remove('hidden');
        } else {
            lanyardServerTag.classList.add('hidden');
        }
    }

    function updateStatus(status) {
        const statusInfo = statusMap[status] || statusMap.offline;
        
        Object.values(statusMap).forEach(s => {
            statusIcon.classList.remove(s.colorClass, s.iconClass);
        });

        statusIcon.classList.add(statusInfo.colorClass, statusInfo.iconClass);
    }

    function updateActivities(activities) {
        activitySection.innerHTML = '';

        const spotifyActivity = activities.find(activity => activity.id === 'spotify:1');
        const spotifyTrack = spotifyActivity?.sync_id;
        const gameActivities = activities.filter(activity => activity.type === 0);

        if (spotifyActivity) {
            createSpotifyCard(spotifyActivity, spotifyTrack);
        }

        gameActivities.forEach(createActivityCard);

        if (spotifyActivity || gameActivities.length > 0) {
            activityWrapper.classList.remove('hidden');
        } else {
            activityWrapper.classList.add('hidden');
        }
    }

    function createSpotifyCard(activity, trackId) {
        const albumArtUrl = `https://i.scdn.co/image/${activity.assets.large_image.replace('spotify:', '')}`;
        const song = activity.details;
        const artist = activity.state;
        const url = trackId;

        const spotifyCardHTML = `
            <div onclick="window.open('https://open.spotify.com/track/${url}', '_blank').focus();" style="cursor: pointer;" class="bg-green-800/30 p-4 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-opacity-20 border-green-300 transform hover:-translate-y-2 hover:translate-x-2 transition-transform duration-300">
                <div class="flex items-center space-x-4">
                    <img src="${albumArtUrl}" class="w-16 h-16 rounded-md shadow-lg transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300" alt="Album Art for ${song}">
                    <div style="overflow:hidden;white-space:nowrap">
                        <div class="flex items-center space-x-2 mb-1">
                            <i class="fab fa-spotify text-green-400"></i>
                            <p class="text-sm font-medium text-slate-300">Listening to Spotify</p>
                        </div>
                        <p class="font-bold text-white truncate" title="${song}">${song}</p>
                        <p class="text-sm text-slate-400 truncate" title="by ${artist}">by ${artist}</p>
                    </div>
                </div>
            </div>
        `;
        activitySection.insertAdjacentHTML('beforeend', spotifyCardHTML);
    }

    function createActivityCard(activity) {
        let imageUrl = 'https://placehold.co/64x64/2c3e50/ffffff?text=Game';
        if (activity.assets && activity.assets.large_image) {
            const appId = activity.application_id;
            imageUrl = `https://cdn.discordapp.com/app-assets/${appId}/${activity.assets.large_image}.png`;
        }

        const activityCardHTML = `
            <div class="border border-opacity-20 border-slate-400 bg-slate-700/50 p-4 rounded-lg flex items-center space-x-4 transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300">
                <img src="${imageUrl}" class="w-16 h-16 rounded-md transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300" onerror="this.onerror=null;this.src='https://placehold.co/64x64/2c3e50/ffffff?text=App'"/>
                <div>
                    <p class="font-semibold">${activity.name}</p>
                    <p class="text-sm text-slate-300">${activity.details || ''}</p>
                    <p class="text-sm text-slate-400">${activity.state || ''}</p>
                </div>
            </div>
        `;
        activitySection.insertAdjacentHTML('beforeend', activityCardHTML);
    }

    fetchLanyardData();
    setInterval(fetchLanyardData, 15000);
});

if (screen.width <= 700) {
        document.getElementsByClassName("nav-mobile")[0].style.display = "block";
    }



// i did NOT steal this code from @Hyperplexed i have no idea what youre talking about
const letters = "AbCdEfGhIjKlMnOpQrStUvWxYz";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


//kitty :3
const wrapper = document.getElementById('kitty');

document.querySelectorAll('.kitty').forEach((wrapper) => {
  const kitty = wrapper.querySelector('.kittySrc');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = kitty.getBoundingClientRect(); // <<< use the image's box
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // normalized -1..1
    let percentX = (x / rect.width) * 2 - 1;
    let percentY = (y / rect.height) * 2 - 1;

    // clamp
    percentX = Math.max(-1, Math.min(1, percentX));
    percentY = Math.max(-1, Math.min(1, percentY));

    const maxTilt = 15; // deg
    const rotateX = percentY * -maxTilt; // tilt toward cursor vertically
    const rotateY = percentX *  maxTilt; // tilt toward cursor horizontally

    kitty.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    kitty.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});