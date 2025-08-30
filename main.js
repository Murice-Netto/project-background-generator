import {
  BackgroundPatternImageInput,
  ColorOneInput,
  ColorThreeInput,
  ColorTwoInput,
  GenerateBtn,
  GitHubUsernameInput,
  PreviewDiv,
  ProjectDescriptionInput,
  ProjectLogoInput,
  ProjectTitleInput,
  RealNameInput,
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
    colorOne: ColorOneInput.value,
    colorTwo: ColorTwoInput.value,
    colorThree: ColorThreeInput.value,
    projectTitle: ProjectTitleInput.value,
    projectDescription: ProjectDescriptionInput.value,
    projectLogo: ProjectLogoInput.files[0],
    backgroundPatternImage: BackgroundPatternImageInput.files[0],
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
  // downloadPreview();
});

function downloadPreview() {
  html2canvas(PreviewDiv, { scale: 2 }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "preview.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
