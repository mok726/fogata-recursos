// scripts/normalize-skills.js

const fs = require("fs");
const path = require("path");

const replacements = {

  // ===== Conciencia ambiental =====

  "Conciencia Ambiental": "Conciencia ambiental",
  "Conciencia ecológica": "Conciencia ambiental",
  "Conocimiento ecológico": "Conciencia ambiental",
  "Comprensión ecológica": "Conciencia ambiental",
  "Ecología práctica": "Conciencia ambiental",

  // ===== Investigación =====

  "Investigación científica": "Investigación",
  "Investigación y análisis": "Investigación",
  "Investigación cultural": "Investigación",
  "Investigación histórica": "Investigación",
  "Investigación intercultural": "Investigación",
  "Investigación de campo": "Investigación",

  // ===== Creatividad =====

  "creatividad": "Creatividad",

  // ===== Pensamiento crítico =====

  "Pensamiento Crítico": "Pensamiento crítico",
  "pensamiento crítico": "Pensamiento crítico",
  "Análisis crítico": "Pensamiento crítico",

  // ===== Trabajo en equipo =====

  "trabajo en equipo": "Trabajo en equipo",
  "Trabajo en Equipo": "Trabajo en equipo",
  "Trabajo colaborativo": "Trabajo en equipo",
  "Colaboración": "Trabajo en equipo",

  // ===== Comunicación =====

  "Comunicación oral": "Comunicación",
  "Comunicación escrita": "Comunicación",
  "Comunicación visual": "Comunicación",
  "Comunicación creativa": "Comunicación",
  "Comunicación científica": "Comunicación",
  "Comunicación audiovisual": "Comunicación",
  "Comunicación digital": "Comunicación",
  "Comunicación efectiva": "Comunicación",

  // ===== Observación =====

  "Observación científica": "Observación",
  "Observación detallada": "Observación",

  // ===== Conocimiento científico =====

  "Comprensión científica": "Conocimiento científico",
  "Curiosidad científica": "Conocimiento científico",

  // ===== Pensamiento sistémico =====

  "Pensamiento Sistémico": "Pensamiento sistémico",

  // ===== Responsabilidad =====

  "Responsabilidad ambiental": "Responsabilidad",
  "Responsabilidad cívica": "Responsabilidad",

  // ===== Autoconciencia =====

  "Autoconocimiento": "Autoconciencia",

  // ===== Aprendizaje práctico =====

  "Aprendizaje Práctico": "Aprendizaje práctico",

  // ===== Planificación y organización =====

  "Organización": "Planificación y organización",
  "Planificación": "Planificación y organización",

  // ===== Liderazgo =====

  "Liderazgo y organización": "Liderazgo",
  "Liderazgo y comunicación": "Liderazgo",
  "Liderazgo comunitario": "Liderazgo",
  "Liderazgo ambiental": "Liderazgo",
  "Organización y liderazgo": "Liderazgo",

  // ===== Resolución de problemas =====

  "Solución de problemas": "Resolución de problemas",

  // ===== Conciencia global =====

  "Ciudadanía global": "Conciencia global",

  // ===== Conciencia social =====

  "Ciudadanía activa": "Conciencia social",

  // ===== Conservación =====

  "Conservación práctica": "Conservación",
  "Conocimiento de conservación": "Conservación",

  // ===== Expresión artística =====

  "Expresión creativa": "Expresión artística",
  "Expresión gráfica": "Expresión artística",

  // ===== Empatía =====

  "empatía": "Empatía",
  "Empatía ambiental": "Empatía",
  "Empatía ecológica": "Empatía",
  "Empatía histórica": "Empatía",
  "Empatía intercultural": "Empatía",
  "Empatía intergeneracional": "Empatía",
  "Empatía literaria": "Empatía",
  "Empatía social": "Empatía",

  // ===== Alfabetización digital =====

  "Tecnología": "Alfabetización digital",

  // ===== Hábitos sostenibles =====

  "Consumo responsable": "Hábitos sostenibles",

  // ===== Experimentación =====

  "Experimentación Científica": "Experimentación",

  // ===== Pensamiento científico =====

  "Método científico": "Pensamiento científico"


};

const removeValues = new Set([
  "Aprendizaje práctico",
  "Aprendizaje Práctico"
]);

const dir = "content/activities";

for (const file of fs.readdirSync(dir)) {

  if (!file.endsWith(".md")) continue;

  const fullPath = path.join(dir, file);

  let text = fs.readFileSync(fullPath, "utf8");

  const lines = text.split("\n");

  let insideSkills = false;

  const output = [];

  for (let line of lines) {

    if (line.startsWith("skills:")) {
      insideSkills = true;
      output.push(line);
      continue;
    }

    if (insideSkills) {

      if (
        line.length &&
        !line.startsWith("  -") &&
        !line.startsWith(" ")
      ) {
        insideSkills = false;
      }
    }

    if (insideSkills && line.trim().startsWith("- ")) {

      let value = line.trim().substring(2);

      if (removeValues.has(value)) {
        continue;
      }

      if (replacements[value]) {
        value = replacements[value];
      }

      output.push(`  - ${value}`);
    } else {
      output.push(line);
    }
  }

  fs.writeFileSync(
    fullPath,
    output.join("\n"),
    "utf8"
  );
}

console.log("Skills normalizadas");
