import sys
import json
import requests
import os

def add_contributor(username):
    # Fetch GitHub user data
    url = f"https://api.github.com/users/{username}"
    response = requests.get(url)

    if response.status_code != 200:
        print("❌ GitHub user not found.")
        sys.exit(1)

    github_data = response.json()

    # Load existing contributors
  
    json_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'contributors.json')

    print(f"📂 Loading contributors from {json_path}")
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            contributors = json.load(f)
    except (FileNotFoundError, json.decoder.JSONDecodeError):
        contributors = []

    # Check for duplicates
    if any(c.get('github','').lower() == username.lower() for c in contributors):
        print("⚠️  Username already exists in contributors.")
        sys.exit(0)

    # Input additional details
    print(f"\n👋 Hello {github_data.get('name') or username}!")
    full_name = input("📝 Enter your full name (with spaces): ").strip()
    short_bio = input("🚀 Write somthing everybody can see : ").strip()

    # New: Input languages as comma-separated string, then convert to list
    languages_input = input("💬 Enter programming languages (comma separated): ").strip()
    languages = [lang.strip() for lang in languages_input.split(',') if lang.strip()]

    if not full_name or not short_bio:
        print("❌ Full name and bio are required.")
        sys.exit(1)

    # Create contributor object with languages list
    new_contributor = {
    "id": len(contributors) + 1,
    "github": username,
    "full_name": full_name,
    "avatar": github_data.get("avatar_url"),
    "profile": github_data.get("html_url"),
    "short_bio": short_bio or github_data.get("bio") or "No bio available.",
    "blog": github_data.get("blog") or "null",
    "location": github_data.get("location") or "Unknown",
    "languages": languages, 
    "created_at": github_data.get("created_at"),
}

    # Append and save updated contributors list
    contributors.append(new_contributor)
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(contributors, f, indent=2)

    print("\n✅ Contributor added successfully!")
    print("💾 Please commit the updated contributors.json file.")

# CLI entry point
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("📦 Usage: python contributor_add.py <github-username>")
        sys.exit(1)

    github_username = sys.argv[1]
    add_contributor(github_username)
