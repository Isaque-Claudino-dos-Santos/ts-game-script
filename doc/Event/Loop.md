- [Home](../../README.md)

# Loop

Create game loop to run in canvas

To understand a game is executed in loop occurring a update and render in this order, to create this is necessary overwrite methods when to overwrite use arrowfunction to variable can be visible, create to rules in methods  [`onUpdate`](#onupdate) and [`onRender`](#onrender), after  call method [`init`](#init).

- [Loop](#loop)
  - [Instance](#instance)
  - [Methods](#methods)
    - [OnUpdate](#onupdate)
    - [OnRender](#onrender)
    - [Init](#init)

## Instance

```ts
  import Loop from '@Display/Loop'
  
  const loop = new Loop()
```

## Methods 

### OnUpdate

Method to overwrite, executes before onRender
 

```ts
  import Loop from '@Display/Loop'
  
  const loop = new Loop()

  loop.onUpdate = () => {
    //update data
  }
```

### OnRender

Method to overwrite, executes after onUpdate

```ts
  import Loop from '@Display/Loop'
  
  const loop = new Loop()

  loop.onRender = () => {
    // Render after update data
  }
```

### Init

Method initialize the loop

```ts
  import Loop from '@Display/Loop'
  
  const loop = new Loop()

  loop.onUpdate = () => {}

  loop.onRender = () => {}

  loop.init()
```
