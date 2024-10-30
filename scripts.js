// Set the API endpoint
const API_BASE_URL = "https://tt00kp4a2b.execute-api.us-east-1.amazonaws.com/dev";

async function handleRegister(event) {
    event.preventDefault();
    const data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById("registerMessage").textContent = result.message || result.error;
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

async function handleLogin(event) {
    event.preventDefault();
    const data = {
        username: document.getElementById("loginUsername").value,
        password: document.getElementById("loginPassword").value
    };
    
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            localStorage.setItem("username", data.username);
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("loginMessage").textContent = result.error;
        }
    } catch (error) {
        console.error("Error logging in:", error);
    }
}

async function loadDashboard() {
    const username = localStorage.getItem("username");
    if (!username) {
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/dashboard?username=${username}`);
        const result = await response.json();
        if (response.ok) {
            document.getElementById("dashboardMessage").textContent = `Hello, ${result.username} (${result.email})`;
        } else {
            document.getElementById("dashboardMessage").textContent = result.error;
        }
    } catch (error) {
        console.error("Error loading dashboard:", error);
    }
}

document.getElementById("registerForm")?.addEventListener("submit", handleRegister);
document.getElementById("loginForm")?.addEventListener("submit", handleLogin);
document.getElementById("logout")?.addEventListener("click", () => {
    localStorage.removeItem("username");
    window.location.href = "login.html";
});

if (window.location.pathname.endsWith("dashboard.html")) {
    loadDashboard();
}
