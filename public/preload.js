try {
    const regex = new RegExp("(^|; )settings=([^;]*)");
    const value = document.cookie.match(regex);
    const parsed = JSON.parse(value[2]);
    if (
        parsed &&
        typeof parsed === "object" &&
        "dark" in parsed &&
        typeof parsed.dark === "boolean" &&
        parsed.dark
    )
        document.documentElement.classList.add("dark");
} catch {}
