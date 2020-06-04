# Scattergories

<img src="https://cdn.shopify.com/s/files/1/0405/0381/products/5912_5aabb211530792.87318145_scattergories_20box_large_0ea8028d-1914-4f62-95a6-bbd9e93958cc_grande.jpg?v=1583771441" width="250px" />

## Instructions

0. Each round begins as follows.
1. 12 categories are chosen at random from a large library, but kept hidden until the timer starts.
2. A letter is chosen at random to be the starting letter for the round.
3. A timer of 120 seconds is started and the categories are revealed.
4. Players, in secret, do their best to name one thing of each category with the specified starting letter, making a personal list.
5. When the timer reaches 0, players stop writing and compare their answers.
6. Category by category, players reveal their answers to each other and points are assigned. If a player has a valid, unique answer for a category, they score 1 point. If their answer is deemed invalid, OR another player has the same answer, they score 0 points for that category.
7. The round ends and the next round may begin.
8. Scores for each round are added to the player's total. The player with the highest total at the end of the game wins.

---

## Code Requirements

### 1. Timer

- Default 120 seconds
- Adjustable to custom value
- Resettable to default
- Button to start/stop
- Clicking start reveals categories, stop hides them again
- Plays sound(s) to announce nearing end and end

### 2. Random Letter

- Re-roll function
- Exclusion characters
  - Checkboxes for Q, X, Z
  - Manual entry of comma-separated string eg q, x, z

### 3. Category Library

- ~100+ categories
- Add/remove categories
- Reset to default
- Sort alphabetically
- Visual indicator of user-added categories
- Difficulty indicator?? eg for filtering easy/hard settings
- Rating?? eg to filter by high rated only and build best possible library

### 4. Round Scattergories

- 12 default
- Length adjustable
- Randomly chosen from library
- Non-repeating
- Non-repetition carries over between rounds
- Save set somewhere in memory for later reference?? eg at game end, review all the rounds/categories played

### 5. Next Round

- Button to continue to next round
- New letter
- Timer reset
- New categories
- Persistence rules (unique scattergories) observed
