import React from "react";
import theme from "../theme";

function SummaryCards({
  totalCalls,
  appointments,
  frontDeskCalls,
  silentCalls,
  isMobile = false,
}) {
  const cards = [
    [
      "Total Calls",
      totalCalls,
      theme.gradients.primary,
    ],
    [
      "Appointments",
      appointments,
      theme.gradients.success,
    ],
    [
      "Front Desk Calls",
      frontDeskCalls,
      theme.gradients.warning,
    ],
    [
      "Silent Calls",
      silentCalls,
      theme.gradients.accent,
    ],
  ];

  return (
    <div
      className="summary-grid"
      style={{
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(4, minmax(0, 1fr))",
      }}
    >
      {cards.map(([title, value, color]) => (
        <div
          key={title}
          className="summary-card"
          style={{
            background: color,
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.soft,
            color: "#fff",
            padding: "20px",
            border: `1px solid rgba(255,255,255,0.18)`,
            minWidth: 0,
          }}
        >
          <h4>{title}</h4>
          <h2>{value}</h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
