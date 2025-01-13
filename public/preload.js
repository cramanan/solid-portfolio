try {
    const regex = new RegExp("(^|; )settings=([^;]*)");
    const value = document.cookie.match(regex);
    const parsed = JSON.parse(value[2]);
    if (parsed.dark) document.documentElement.classList.add("dark");
} catch {}
