import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [attendance, setAttendance] = useState(85);
  const [studyHours, setStudyHours] = useState(12);
  const [internalScore, setInternalScore] = useState(70);
  const [assignmentScore, setAssignmentScore] = useState(75);

  // Dummy prediction (replace with ML logic later)
  const predictedScore = Math.round(
    attendance * 0.3 +
      studyHours * 1.5 +
      internalScore * 0.2 +
      assignmentScore * 0.2
  );

  return (
    <div className="page">
      {/* TOP BAR */}
      <header className="topbar">
        <h1>
          EduGuide 
        </h1>
        <nav>
          <a>Home</a>
        </nav>
      </header>

      <div className="dashboard">
        {/* LEFT PANEL */}
        <div className="card input-card">
          <h2>Enter Student Data</h2>

          <label>Attendance (%)</label>
          <div className="range-row">
            <input
              type="range"
              min="0"
              max="100"
              value={attendance}
              onChange={(e) => setAttendance(Number(e.target.value))}
            />
            <span>{attendance}%</span>
          </div>

          <label>Study Hours Per Week</label>
          <select
            value={studyHours}
            onChange={(e) => setStudyHours(Number(e.target.value))}
          >
            {[6, 8, 10, 12, 14, 16].map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>

          <label>Internal Exam Score</label>
          <select
            value={internalScore}
            onChange={(e) => setInternalScore(Number(e.target.value))}
          >
            {[50, 60, 70, 80, 90].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <label>Assignment Score</label>
          <select
            value={assignmentScore}
            onChange={(e) => setAssignmentScore(Number(e.target.value))}
          >
            {[50, 60, 70, 80, 90].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button className="predict-btn">Predict Performance</button>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* SCORE CARD */}
          <div className="card score-card">
            <div>
              <p>Predicted Score</p>
              <h3>
                Expected Marks: <span>{predictedScore}</span>
              </h3>
            </div>
            <div className="check">✔</div>
          </div>

          {/* WEAK AREAS */}
          <div className="card">
            <h3>Key Weak Areas</h3>
            <ul className="weak-list">
              {studyHours < 12 && <li>⏰ Low Study Hours</li>}
              {attendance < 90 && <li>⚠ Irregular Attendance</li>}
            </ul>
          </div>

          {/* IMPROVEMENT PLAN */}
          <div className="plan">
            <div className="plan-card yellow">
              <h4>Study More Hours</h4>
              <p>• Study 2 hours daily</p>
              <p>• Review class notes</p>
            </div>

            <div className="plan-card blue">
              <h4>Improve Attendance</h4>
              <p>• Attend all classes</p>
              <p>• Be punctual</p>
            </div>

            <div className="plan-card pink">
              <h4>Focus on Weak Subjects</h4>
              <p>• Revise difficult topics</p>
              <p>• Take practice tests</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        © 2026 EduGuide — <span>AI-Powered Academic Guidance</span>
      </footer>
    </div>
  );
}
