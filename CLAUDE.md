# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a browser-based adventure game inspired by "The Big Lebowski" film. The game is built with vanilla JavaScript using HTML5 Canvas for rendering. Players control "The Dude" character through various levels/scenes from the movie, navigating environments and interacting with characters.

## Development Commands

This is a static website with no build process. To develop:

- **Run locally**: Open `index.html` in a web browser, or serve via a local web server
- **Test**: Manual testing only - open the game in browser and play through levels

## Architecture

### Core Game Engine (`scripts/allLevels.js`)

The main game engine contains:
- **Canvas setup and animation loop**: `myGameArea` object manages the canvas, animation loop using `requestAnimationFrame`, and keyboard input handling
- **Component constructor**: All game objects (characters, obstacles, backgrounds) are instances of the `component()` function with properties like position, size, type, sprite frames, collision boundaries
- **Collision detection**: `crashWith()`, `touch()`, `obstacleCheck()` methods handle object interactions
- **Movement system**: Characters support 4-directional sprite animation with methods like `pieceMoveFourWays()`, `pieceMoveSwim()`, `pieceMovePin()`
- **Set piece management**: Arrays track `setPieces` (all objects), `obstacles` (collidable objects), and `movingSet` (objects that move during scene transitions)
- **Scene transitions**: `setChange()` and `loadLevel()` handle moving between game levels

### Level Structure

Each level is a separate JavaScript file in `scripts/`:
- `start.js` - Opening scene at Dude's entrance
- `dudeHome.js` - Dude's apartment with thugs
- `bowlingAlley.js` - Bowling alley with characters
- `beach.js`, `parkingLot.js`, `studio.js`, etc. - Various scenes from the movie

**Level anatomy**: Each level file contains:
1. Level-specific variable declarations at the top
2. `startGame()` function that instantiates all components (backgrounds, characters, obstacles)
3. `updateGameArea()` function containing the game logic/state machine for that level
4. Optional helper functions for level-specific mechanics

### Key Patterns

**Component types** (defined by the `type` parameter):
- `'image'` - Static image
- `'spriteFour'` - 4-directional animated sprite (16 frames: 4 directions × 4 animation frames)
- `'sprite'`, `'spriteLong'`, `'spriteSwim'`, `'spritePin'` - Various sprite animation patterns
- `'fixedSprite'` - Animated sprite with fixed interval (e.g., flickering signs)
- `'text'` - Text rendering for dialogue
- `''` (empty) - Colored rectangle for borders/collision boxes

**Global characters** are defined in `allLevels.js`:
- `dude` - The main player character
- `walter` - Companion character
- `badDude` - Antagonist

**Scene transitions**: When a character reaches a door/exit:
1. Set `setChanging = true` to trigger transition
2. `setChange()` moves all objects in `movingSet` array in the specified direction
3. When `pixelsMoved` reaches threshold, call `loadLevel()` with next level's script path
4. `loadLevel()` uses jQuery AJAX to dynamically load and execute the next level's JavaScript

**Dialogue system**:
- Dialogue stored in `talk1`, `talk2`, etc. components of type `'text'`
- Displayed with `character.talk(talkName, xOffset, yOffset)` method
- Text boxes (`textBox`, `textBoxLeft`, `textBoxRight`) provide speech bubble backgrounds
- `getLines()` function wraps text to fit within text box width

**Collision and depth sorting**:
- `obstacles` array contains all collidable objects
- `negativeHeight` parameter on components creates 3D-like perspective (objects appear behind/in front based on Y position)
- `behindObject()` method redraws objects in correct z-order

## File Organization

- `index.html` - Entry point, loads jQuery and initial scripts
- `style.css` - Styling with neon text effects for title
- `scripts/allLevels.js` - Core game engine and shared utilities
- `scripts/*.js` - Individual level files
- `img/` - All game sprites and backgrounds
- `.babelrc` - Babel configuration (unused in current implementation)

## Important Notes

- The game uses jQuery 3.4.1 from CDN for AJAX level loading and keyboard event handling
- Arrow keys are prevented from scrolling the page via jQuery event binding
- All game state is managed through global variables (no module system)
- Keyboard input is tracked via `myGameArea.keys` array (indices are keyCodes)
- Frame-based timing uses `everyinterval(n)` to execute logic every N frames
