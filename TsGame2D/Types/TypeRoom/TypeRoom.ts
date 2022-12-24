namespace TypeRoom {
  export type Room = {
    active: boolean;
    name: string;
    update(): void;
    render(): void;
  };
}

export default TypeRoom;
