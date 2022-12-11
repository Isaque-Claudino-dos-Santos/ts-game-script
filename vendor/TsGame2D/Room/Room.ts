import TypeRoom from '../Types/TypeRoom';
import InterfaceRoom from './InterfaceRoom';

export default class Room implements InterfaceRoom {
  private readonly rooms: { [index: string]: TypeRoom.Room };
  private currentRoom: TypeRoom.Room;

  private existRoom(name: string): boolean {
    return typeof this.rooms[name] !== 'undefined';
  }

  private existCurrentRoom(): boolean {
    return typeof this.currentRoom !== 'undefined';
  }

  public create(name: string): void {
    if (!this.existRoom(name))
      this.rooms[name] = {
        name,
        active: false,
        render: () => {},
        update: () => {},
      };
  }

  public active(name: string): void {
    if (!this.existRoom(name)) return;
    const nextRoom = this.rooms[name];
    nextRoom.active = true;

    if (this.existCurrentRoom()) this.currentRoom.active = false;
    this.currentRoom = nextRoom;
  }

  public setLoop(name: string, render: () => void, update: () => void): void {
    if (!this.existRoom(name)) return;

    this.rooms[name].render = render;
    this.rooms[name].update = update;
  }

  public callUpdate(): void {
    if (!this.existCurrentRoom()) return;
    this.currentRoom.update();
  }

  public callRender(): void {
    if (!this.existCurrentRoom()) return;
    this.currentRoom.render();
  }
}
