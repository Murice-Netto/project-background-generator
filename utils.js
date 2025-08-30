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
  const bgDataUrl = await fileToDataURL(patternImage);

  Object.assign(bgPattern.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    pointerEvents: "none",
    backgroundImage: `url('${bgDataUrl}')`,
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

export async function setProjectLogo(logo, innerShadowColor) {
  const logoDataUrl = await fileToDataURL(logo);

  ProjectLogo.style.backgroundImage = `
      linear-gradient(to bottom right, ${innerShadowColor}, rgba(0,0,0, 0.1), ${innerShadowColor}),
      url('${logoDataUrl}')
    `;
  ProjectLogo.style.backgroundSize = "cover";
  ProjectLogo.style.backgroundPosition = "center";
  ProjectLogo.style.zIndexbackgroundPosition = 2;
}
