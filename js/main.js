import {
  GenerateBtn,
  GitHubUsernameInput,
  PreviewDiv,
  ProjectDescriptionInput,
  ProjectTitleInput,
  RealNameInput,
  DownloadBtn,
  ProgrammingLanguageSelect,
} from "./html-elements.js";
import { typescript, rust } from "./programming-language-data.js";

import {
  applySelectedGradientToPreviewBackground,
  setBackgroundImagePattern,
  setProjectInfo,
  setProjectLogo,
} from "./utils.js";

GenerateBtn.addEventListener("click", async () => {
  const userInfo = {
    realName: RealNameInput.value,
    githubUsername: GitHubUsernameInput.value,
    projectTitle: ProjectTitleInput.value,
    projectDescription: ProjectDescriptionInput.value,
  };

  if (ProgrammingLanguageSelect.value === "typescript") {
    // Gradiente do preview
    applySelectedGradientToPreviewBackground(typescript.colors);

    await setBackgroundImagePattern(typescript.backgroundImageFilePath);

    // Conteúdo do preview
    setProjectInfo(
      userInfo.projectTitle,
      userInfo.projectDescription,
      userInfo.githubUsername,
      userInfo.realName
    );

    await setProjectLogo(typescript.logoFilePath, typescript.colors);
  }

  if (ProgrammingLanguageSelect.value === "rust") {
    // Gradiente do preview
    applySelectedGradientToPreviewBackground(rust.colors);

    await setBackgroundImagePattern(rust.backgroundImageFilePath);

    // Conteúdo do preview
    setProjectInfo(
      userInfo.projectTitle,
      userInfo.projectDescription,
      userInfo.githubUsername,
      userInfo.realName
    );

    await setProjectLogo(rust.logoFilePath, rust.colors);
  }

  // Baixar preview
  DownloadBtn.disabled = false;
});

DownloadBtn.addEventListener("click", () => {
  downloadPreview();
});

function downloadPreview() {
  html2canvas(PreviewDiv, { scale: 2 }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "preview.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
