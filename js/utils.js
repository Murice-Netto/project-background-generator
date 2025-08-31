import {
  UserInfo,
  bgPattern,
  ProjectDescription,
  ProjectLogo,
  ProjectTitle,
  PreviewDiv,
} from "./html-elements.js";

export function fileToDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => resolve(e.target.result);

    reader.readAsDataURL(file);
  });
}

export function applySelectedGradientToPreviewBackground(colors) {
  PreviewDiv.style.backgroundImage = `linear-gradient(to right, ${colors.join(
    ","
  )})`;
  PreviewDiv.style.position = "relative";
}

export async function setBackgroundImagePattern(patternImage) {
  Object.assign(bgPattern.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    pointerEvents: "none",
    backgroundImage: `url('${patternImage}')`,
    backgroundRepeat: "repeat",
    backgroundSize: "50px 50px",
    opacity: "0.03",
  });
}

export function setProjectInfo(title, description, githubUsername, realName) {
  ProjectTitle.textContent = title;
  ProjectTitle.style.zIndex = 2;

  ProjectDescription.textContent = description;
  ProjectDescription.style.zIndex = 2;

  UserInfo.textContent = `${githubUsername} — ${realName} — @${new Date().getFullYear()}`;
  UserInfo.style.zIndex = 2;
}

export async function setProjectLogo(logo, colors) {
  ProjectLogo.style.backgroundImage = `
      linear-gradient(to bottom right, ${hexToRGBA(
        colors[0],
        0.3
      )}, ${hexToRGBA(colors[1], 0.3)}, ${hexToRGBA(colors[2], 0.3)}),
      url('${logo}')
    `;
  ProjectLogo.style.backgroundSize = "cover";
  ProjectLogo.style.border = `1px solid ${colors[0]}`;
  ProjectLogo.style.backgroundPosition = "center";
  ProjectLogo.style.zIndexbackgroundPosition = 2;
}

export function hexToRGBA(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) return `rgba(${r},${g},${b},${alpha})`;
  return `rgba(${r},${g},${b},1)`;
}
