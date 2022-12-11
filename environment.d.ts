declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly CANVAS_ELEMENT_ID: string;
      readonly CANVAS_WIDTH: string;
      readonly CANVAS_HEIGHT: string;
      readonly APP_DIR_SRC: string;
      readonly APP_FILE_ENTRY: string;
      readonly APP_DIR_GAME_OBJECT: string;
      readonly APP_DIR_GAME_ROOMS: string;
    }
  }
}

export {};
