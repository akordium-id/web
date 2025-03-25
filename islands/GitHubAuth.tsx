import { useEffect, useState } from "preact/hooks";

export default function GitHubAuth() {
  const [token, setToken] = useState<string>("Not authenticated yet");
  const [emails, setEmails] = useState<string>("Not authenticated yet");

  const handleAuth = () => {
    const clientId = "Ov23liJSf1T2kc8slkHe";
    // Update this to match your GitHub OAuth App settings
    const redirectUri = "https://www.akordium.id/api/auth";
    const scope = "user";

    // Redirect to GitHub OAuth
    globalThis.location.href =
      `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  const loadGitHubUserEmails = async (accessToken: string) => {
    try {
      const response = await fetch("https://api.github.com/user/emails", {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${accessToken}`,
        },
      });
      const data = await response.json();
      return JSON.stringify(data);
    } catch (error) {
      console.error("Error fetching emails:", error);
      return "Error fetching emails";
    }
  };

  useEffect(() => {
    // Check for access token in URL after OAuth redirect
    const urlParams = new URLSearchParams(globalThis.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Exchange code for token
      fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          setToken(data.access_token);
          const emailsData = await loadGitHubUserEmails(data.access_token);
          setEmails(emailsData);
        })
        .catch((error) => {
          console.error("Error:", error);
          setToken("Authentication failed");
        });
    }
  }, []);

  return (
    <div class="space-y-4">
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleAuth();
          }}
          class="text-blue-500 hover:underline"
        >
          Authenticate
        </a>
      </p>
      <p>
        Token: <span class="font-mono text-sm">{token}</span>
      </p>
      <p>
        User emails: <span class="font-mono text-sm">{emails}</span>
      </p>
    </div>
  );
}
