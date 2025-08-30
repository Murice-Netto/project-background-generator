import {
  BackgroundPatternImageInput,
  ColorOneInput,
  ColorThreeInput,
  ColorTwoInput,
  GenerateBtn,
  GitHubUsernameInput,
  PreviewDiv,
  ProjectDescription,
  ProjectDescriptionInput,
  ProjectLogo,
  ProjectLogoInput,
  ProjectTitle,
  ProjectTitleInput,
  RealNameInput,
  UserInfo,
  bgPattern,
} from "./html-elements.js";

import { fileToDataURL } from "./utils.js";

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
  PreviewDiv.style.backgroundImage = `linear-gradient(to right, ${userInfo.colorOne}, ${userInfo.colorTwo}, ${userInfo.colorThree})`;
  PreviewDiv.style.position = "relative"; // garante que as camadas fiquem no lugar

  // Imagem de background pattern
  if (userInfo.backgroundPatternImage) {
    const bgDataUrl = await fileToDataURL(userInfo.backgroundPatternImage);
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
      opacity: "0.1",
    });
  }

  // Conteúdo do preview
  ProjectTitle.textContent = userInfo.projectTitle;
  ProjectTitle.style.zIndex = 2;
  ProjectDescription.textContent = userInfo.projectDescription;
  ProjectDescription.style.zIndex = 2;
  UserInfo.textContent = `${userInfo.githubUsername} — ${
    userInfo.realName
  } — @${new Date().getFullYear()}`;
  UserInfo.style.zIndex = 2;

  // Logo do projeto
  if (userInfo.projectLogo) {
    const logoDataUrl = await fileToDataURL(userInfo.projectLogo);
    ProjectLogo.style.backgroundImage = `
      linear-gradient(to bottom right, ${userInfo.colorThree}, rgba(0,0,0, 0.1), ${userInfo.colorThree}),
      url('${logoDataUrl}')
    `;
    ProjectLogo.style.backgroundSize = "cover";
    ProjectLogo.style.backgroundPosition = "center";
    ProjectLogo.style.zIndexbackgroundPosition = 2;
  }

  // Baixar preview
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
