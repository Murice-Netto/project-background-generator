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

  // Gradiente do preview
  applySelectedGradientToPreviewBackground([
    userInfo.colorOne,
    userInfo.colorTwo,
    userInfo.colorThree,
  ]);

  // Imagem de background pattern
  if (userInfo.backgroundPatternImage)
    await setBackgroundImagePattern(userInfo.backgroundPatternImage);

  // Conteúdo do preview
  setProjectInfo(
    userInfo.projectTitle,
    userInfo.projectDescription,
    userInfo.githubUsername,
    userInfo.realName
  );

  // Logo do projeto
  if (userInfo.projectLogo)
    await setProjectLogo(userInfo.projectLogo, userInfo.colorThree);

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
