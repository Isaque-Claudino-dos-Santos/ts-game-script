declare global {
    namespace NodeJS {
      interface ProcessEnv {
      readonly CANVAS_ELEMENT_ID: string;
      readonly CANVAS_WIDTH: string;
      readonly CANVAS_HEIGHT: string;
    }
  }
}

export {}