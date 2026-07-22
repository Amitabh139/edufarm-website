async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) return;

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        element.innerHTML = await response.text();

        if (id === "header") {
            initializeMenu();
            highlightCurrentPage();
        }

        if (id === "footer") {
            const year = document.getElementById("year");
            if (year) {
                year.textContent = new Date().getFullYear();
            }
        }

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "assets/components/header.html");
    loadComponent("footer", "assets/components/footer.html");
});