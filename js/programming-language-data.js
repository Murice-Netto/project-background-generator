class ProgrammingLanguageData {
  #colors = [];
  #logoFilePath = "";
  #backgroundImagePath = "";

  constructor(colors, logoFilePath, backgroundImagePath) {
    this.#colors = colors;
    this.#backgroundImagePath = backgroundImagePath;
    this.#logoFilePath = logoFilePath;
  }

  get linearGradientToRight() {
    return `linear-gradient(to right, ${this.#colors.join(",")}`;
  }

  get colors() {
    return this.#colors;
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

const rust = new ProgrammingLanguageData(
  ["#ffb371ff", "#E15B2A", "#993c1aff"],
  "../assets/rust-logo-blk.svg",
  "../assets/rust-logo-white.png"
);

export { typescript, rust };
