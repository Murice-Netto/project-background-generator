class ProgrammingLanguageData {
  #colors = [];
  logoFileUrl = "";
  backgroundImageUrl = "";

  constructor(colors, logoFilePath, backgroundImagePath) {
    this.#colors = colors;
    this.logoFileUrl = URL.createObjectURL(logoFilePath);
    this.backgroundImageUrl = URL.createObjectURL(backgroundImagePath);
  }

  get linearGradientToRight() {
    return `linear-gradient(to right, ${this.#colors.join(",")}`;
  }
}

const typescript = new ProgrammingLanguageData(
  ["#87CEEB", "#007ACC", "#000080"],
  "./assets/ts-logo.png",
  "./assets/ts-logo-white.png"
);

export { typescript };
