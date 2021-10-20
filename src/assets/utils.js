function getCurrentDate() {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();
    return `${d}.${m}.${y}`;
}

export { getCurrentDate }