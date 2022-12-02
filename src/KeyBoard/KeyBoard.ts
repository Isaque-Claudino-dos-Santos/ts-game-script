import InterfaceKeyBoard from "./InterfaceKeyBoard";
import KeyBoardClick from "./KeyBoardClick/KeyBoardClick";
import KeyBoardPress from "./KeyBoardPress";

export default class Keyboard implements InterfaceKeyBoard {
  public readonly click: KeyBoardClick = new KeyBoardClick();
  public readonly press: KeyBoardPress = new KeyBoardPress();

  constructor() {
    this.activeEvents();
  }

  private applyRuleClickInKeyDownEvent(key: string): void {
    this.click.key = key;
    if (!this.click.active) this.click.isDown = true;
  }

  private applyRuleClickInKeyUpEvent(): void {
    this.click.active = false;
  }

  private applyRulePressInKeyDownEvent(key: string): void {
    if (!this.press.existKey(key)) return;
    this.press.keys[key].isDown = true;
  }

  private applyRulePressInKeyUpEvent(key: string): void {
    if (!this.press.existKey(key)) return;
    this.press.keys[key].isDown = false;
  }

  private handlerKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    this.applyRuleClickInKeyDownEvent(key);
    this.applyRulePressInKeyDownEvent(key);
  };

  private handlerKeyUp = (event: KeyboardEvent) => {
    const { key } = event;
    this.applyRuleClickInKeyUpEvent();
    this.applyRulePressInKeyUpEvent(key);
  };

  private activeEvents(): void {
    addEventListener("keydown", this.handlerKeyDown);
    addEventListener("keyup", this.handlerKeyUp);
  }
}
