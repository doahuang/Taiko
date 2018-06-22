# Taiko

![Taiko](gifs/drum.png)

Taiko, music rhythm game featured Japanese Taiko drum. Built with JavaScript and HTML5 Canvas.

__[Live](https://doahuang.github.io/Taiko)__

## Table of Contents

+ [Introduction](#introduction)
+ [Features](#features)
+ [Technologies](#technologies)
+ [Challenges](#challenges)
+ [Code snippets](#code-snippets)
+ [Bonus features](#bonus-features)

## Introduction

Taiko is a music rhythm game featured Japanese Taiko drum.

The player hits a drum in a stream of notes following a piece of music.

![Taiko screenshot](https://res.cloudinary.com/doahuang/image/upload/v1529641170/taiko.png)

## Features

In Taiko player is able to:

- Play three music pieces at random speed

- Hit the drum to play a music note

- View the score, fill up spirit gauge, and make combos

- Start, pause, restart the game

## Technologies

- Vanilla Javascript

- HTML5 Canvas

- Animate.CSS

## Challenges

__Synchronize notes with music tempo__

Due to time constraint I was not able to successfully implement this feature. Instead I came up with a workaround to manipulate the beats per minute of music piece and canvas frame rate, and added a random generator for variations in moving speed.

## Code snippets

```js
let bpm = music.bpm;
let delay = Math.floor(3600 / bpm - Math.random() * vel / 2);
let notesKeys = Object.keys(notes);

if (frames % delay === 0) {
  if (notesKeys.length < vel) {
    let note = new Note(vel);
    notes[note.id] = note;
    frames = 0;
  }
}
```

```js
let key = drumKeys[j];
if (key.pressed) {
  key.pressed = false;
  drum.flash();
  if (key.type === note.type) {
    combo.up();
    spiritGauge.up(combo.combo);
    score.up(spiritGauge.spirit);
    delete notes[id];
  } else {
    combo.reset();
  }
}
```

## Bonus features

- Synchronize moving notes with music tempo

- Add more music and difficulties

- Two-player mode
