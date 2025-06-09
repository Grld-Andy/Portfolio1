import { SiFramer } from 'react-icons/si';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'UI Designer (Intern)',
      company: 'Ideation Axis',
      duration: 'Sept 2024 – Nov 2024',
      tasks: [
        'Built wireframes for mobile and website development',
        'Created responsive UI/UX designs',
      ],
    },
    {
      role: 'UI/UX Designer (Freelance)',
      company: 'Freelancer',
      duration: 'Apr. 2022 — July 2022',
      tasks: [
        'Created wireframes, prototypes, and high-fidelity designs using Figma',
        'Improved user experience through intuitive design and accessibility',
      ],
    },
  ];

  const skills = [
    { name: 'UI Design', level: 100 },
    { name: 'UX Research', level: 90 },
    { name: 'Prototyping', level: 85 },
    { name: 'Visual Design', level: 95 },
  ];

  const tools = [
    { name: 'Figma' },
    { name: 'Framer', icon: <SiFramer className="text-blue-400" /> },
    { name: 'Adobe Illustrator' },
    { name: 'Adobe Photoshop'},
  ];

  return (
    <div className="p-6 text-white bg-black space-y-10">
      <div>
        <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-6">
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <p className="text-md font-semibold">{exp.company} — {exp.role}</p>
            <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">SKILLS</h3>
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-4">
            <p className="text-sm">{skill.name}</p>
            <div className="w-full h-2 bg-gray-300 rounded">
              <div
                className="h-2 bg-purple-600 rounded"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">TOOLS</h3>
        <div className="flex flex-wrap gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
