import React from "react";

export default function Statistics({ stats }) {
  return (
    <div class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map((stat) => (
          <li key={stat.id} class="item">
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
