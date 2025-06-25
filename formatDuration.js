function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const units = [
    { name: "year",   value: 31536000 },
    { name: "day",    value: 86400 },
    { name: "hour",   value: 3600 },
    { name: "minute", value: 60 },
    { name: "second", value: 1 }
  ];

  const parts = [];

  for (let unit of units) {
    const amount = Math.floor(seconds / unit.value);
    if (amount > 0) {
      parts.push(`${amount} ${unit.name}${amount > 1 ? "s" : ""}`);
      seconds %= unit.value;
    }
  }

  if (parts.length === 1) return parts[0];

  // Join with commas and 'and' before the last unit
  return parts.slice(0, -1).join(", ") + " and " + parts.slice(-1);
}
