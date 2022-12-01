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
    this.press.key = key
    this.press.isDown = true
  }

  private applyRulePressInKeyUpEvent(): void {
    this.press.isDown = false
  }

  private handlerKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    this.applyRuleClickInKeyDownEvent(key);
    this.applyRulePressInKeyDownEvent(key);
  };

  private handlerKeyUp = () => {
    this.applyRuleClickInKeyUpEvent();
    this.applyRulePressInKeyUpEvent();
  };

  private activeEvents(): void {
    addEventListener("keydown", this.handlerKeyDown);
    addEventListener("keyup", this.handlerKeyUp);
  }
}
