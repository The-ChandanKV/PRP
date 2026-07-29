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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #030712;
            --surface: rgba(15, 23, 42, 0.8);
            --border: rgba(51, 65, 85, 0.6);
            --text: #f8fafc;
            --muted: #94a3b8;
            --accent: #6366f1;
            --accent2: #22d3ee;
        }

        body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background-color: var(--bg);
            color: var(--text);
        }

        header {
            position: sticky;
            top: 0;
            background-color: var(--bg);
            padding: 16px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .tabs {
            display: flex;
            border-bottom: 2px solid var(--border);
        }

        .tab {
            flex: 1;
            padding: 12px 16px;
            cursor: pointer;
            transition: color 0.2s;
        }

        .tab:hover {
            color: var(--accent);
        }

        .panel {
            display: none;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            backdrop-filter: blur(16px);
            margin-top: 16px;
        }

        .visible {
            display: block;
        }

        .button {
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .button:hover {
            transform: scale(1.03);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 768px) {
            .tabs {
                flex-direction: column;
            }
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

    </style>
    <title>Settings - PRPilot</title>
</head>
<body>
<header>
    <h1>Settings</h1>
</header>
<main>
    <div class="tabs">
        <div class="tab" data-tab="profile">Profile</div>
        <div class="tab" data-tab="notifications">Notifications</div>
        <div class="tab" data-tab="security">Security</div>
    </div>
    <div class="panel" id="profile" class="visible">
        <h2 class="reveal">Profile Settings</h2>
        <p class="reveal">Manage your profile details.</p>
    </div>
    <div class="panel" id="notifications">
        <h2 class="reveal">Notification Settings</h2>
        <p class="reveal">Adjust your notification preferences.</p>
    </div>
    <div class="panel" id="security">
        <h2 class="reveal">Security Settings</h2>
        <p class="reveal">Manage your security options.</p>
    </div>
    <div class="action-buttons">
        <button type="button" class="button">Save</button>
        <button type="button" class="button">Cancel</button>
    </div>
</main>
<script>
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Hide all panels
            document.querySelectorAll('.panel').forEach(panel => {
                panel.classList.remove('visible');
            });
            // Show the selected panel
            const selectedPanel = document.getElementById(this.dataset.tab);
            selectedPanel.classList.add('visible');
            // Add visible class for reveal animation
            const reveals = selectedPanel.querySelectorAll('.reveal');
            reveals.forEach(reveal => {
                reveal.classList.add('visible');
            });
        });
    });

    // Initial display of the Profile tab
    document.querySelector('.tab[data-tab="profile"]').click();
</script>
</body>
</html>`,
        }}
      />
    </div>
  );
}
