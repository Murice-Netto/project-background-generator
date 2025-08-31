class ProgrammingLanguageData {
  #colors = [];
  #logoFileUrl = "";
  #backgroundImageUrl = "";
  #logoFilePath = "";
  #backgroundImagePath = "";

  constructor(colors, logoFilePath, backgroundImagePath) {
    this.#colors = colors;
    this.#logoFileUrl = URL.createObjectURL(logoFilePath);
    this.#backgroundImageUrl = URL.createObjectURL(backgroundImagePath);
    this.#backgroundImagePath = backgroundImagePath;
    this.#logoFilePath = logoFilePath;
  }

  get linearGradientToRight() {
    return `linear-gradient(to right, ${this.#colors.join(",")}`;
  }

  get colors() {
    return this.#colors;
  }

  get logoFileUrl() {
    return this.#logoFileUrl;
  }

  get backgroundImageUrl() {
    return this.#backgroundImageUrl;
  }

  get logoFilePath() {
    return this.#logoFilePath;
  }

  get backgroundImageFilePath() {
    return this.#backgroundImagePath;
  }
}

const typescript = new ProgrammingLanguageData(
  ["#87CEEB", "#007ACC", "#000080"],
  "./assets/ts-logo.png",
  "./assets/ts-logo-white.png"
);

export { typescript };
