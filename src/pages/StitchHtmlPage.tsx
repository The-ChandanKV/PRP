import React from "react";

/** Experimental Stitch HTML wrapper for: Implement Jira issue SCRUM-38 for The-ChandanKV/PRP. Summary: UI/UX: Add a Setti */
export default function StitchHtmlPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <h1 className="text-xl font-semibold mb-4">
        Implement Jira issue SCRUM-38 for The-ChandanKV/PRP. Summary: UI/UX: Add
        a Setti
      </h1>
      {/* Raw HTML from stitch_experimental — replace with real components */}
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings - PRPilot</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #030712;
            --surface: rgba(15,23,42,0.8);
            --border: rgba(51,65,85,0.6);
            --text: #f8fafc;
            --muted: #94a3b8;
            --accent: #6366f1;
            --accent2: #22d3ee;
        }
        body {
            background-color: var(--bg);
            font-family: 'Inter', sans-serif;
            color: var(--text);
            margin: 0;
            padding: 0;
        }
        .container {
            display: flex;
            flex-direction: column;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            margin-bottom: 20px;
        }
        .tabs {
            display: flex;
            border-bottom: 2px solid var(--border);
        }
        .tab {
            padding: 10px 20px;
            cursor: pointer;
        }
        .tab:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        .active {
            border-bottom: 2px solid var(--accent);
            font-weight: bold;
        }
        .card {
            backdrop-filter: blur(16px);
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            margin: 16px 0;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .input-group {
            margin-bottom: 16px;
        }
        .button {
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            color: var(--text);
            border: none;
            border-radius: 8px;
            padding: 10px 16px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .button:hover {
            transform: scale(1.03);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }
        .reveal { 
            opacity: 0; 
            transform: translateY(24px); 
            transition: opacity 0.5s ease, transform 0.5s ease; 
        }
        .reveal.visible { 
            opacity: 1; 
            transform: translateY(0); 
        }
        @media (max-width: 768px) {
            .tabs {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Settings</h1>
            <p>Manage your account preferences.</p>
            <button class="button" type="button">Back to Dashboard</button>
        </div>
        <div class="tabs">
            <div class="tab active">Profile</div>
            <div class="tab">Notifications</div>
            <div class="tab">Security</div>
        </div>
        <div class="card reveal" id="profile">
            <h2 class="reveal">Profile Settings</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input id="username" type="text" value="Username" readonly>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input id="email" type="email" value="user@example.com" readonly>
            </div>
            <div class="input-group">
                <label for="timezone">Timezone</label>
                <select id="timezone">
                    <option value="GMT">GMT</option>
                    <option value="EST">EST</option>
                    <option value="PST">PST</option>
                </select>
            </div>
            <button class="button" id="saveProfile" type="button">Save</button>
        </div>
        <div class="card reveal" id="notifications">
            <h2 class="reveal">Notifications Settings</h2>
            <div class="input-group">
                <label><input type="checkbox"> PR Review Ready</label>
            </div>
            <div class="input-group">
                <label><input type="checkbox"> CI Failed</label>
            </div>
            <div class="input-group">
                <label><input type="checkbox"> Security Alerts</label>
            </div>
            <button class="button" id="saveNotifications" type="button">Save Notifications</button>
        </div>
        <div class="card reveal" id="security">
            <h2 class="reveal">Security Settings</h2>
            <div class="input-group">
                <label for="newPassword">New Password</label>
                <input id="newPassword" type="password">
            </div>
            <div class="input-group">
                <label for="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password">
            </div>
            <button class="button" id="changePassword" type="button">Change Password</button>
        </div>
    </div>
    <script>
        document.querySelector('.tabs').addEventListener('click', function(e) {
            if (e.target.classList.contains('tab')) {
                document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                e.target.classList.add('active');
                document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
                document.getElementById(e.target.textContent.toLowerCase()).style.display = 'block';
            }
        });

        function saveProfile() {
            // logic to save profile
            console.log('Profile saved!');
        }

        function saveNotifications() {
            // logic to save notifications
            console.log('Notifications saved!');
        }

        function changePassword() {
            // logic to change password
            console.log('Password changed!');
        }

        document.getElementById('saveProfile').addEventListener('click', saveProfile);
        document.getElementById('saveNotifications').addEventListener('click', saveNotifications);
        document.getElementById('changePassword').addEventListener('click', changePassword);

        // Intersection Observer for scroll animation
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        });

        revealElements.forEach(element => {
          observer.observe(element);
        });
    </script>
</body>
</html>`,
        }}
      />
    </div>
  );
}
