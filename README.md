# MemoryCardGame

This is a simple memory card matching game with only 3 colors for now.


🧾Algorithm:

Keep possible colors/images inside an array.

Duplicate colors and update the array with their duplicates and keep them in pickedColors array.

Shuffle the pickedColors array.

Reach to pickedColors array items one by one, And for each item, create a div and set its CSS color type accordingly. and give it a class name card. and give an id too.

(Modify the cards such that their color will be the same first as default. Or you can put a background image for that.)

Once the user clicks on a card its color should change to its original color ( card flips) and give it a property: flipped.

User clicks to the second card and it flips too.

Create an Event listener that checks when there is two cards "flipped" with the same color. change the display properties of the matched cards to none.

User can not flip more than two cards at once. Therefore everytime a card is clicked on, code should check if there is more than two cards already "flipped" using a counter.

If the flipped cards do not match, flip them back. toggle their flip property.

When user clicks on to a card, card's color will be kept inside a variable to be compared with the next card's color that will be clicked.

When user clicks to the second card. It's color will be kept inside an another variable and they will be compared with ifs.

Matching cards will be decreased in opacity and will stay ON.



✨New Features to be added soon:

When all the cards are ON , alert the user and ask to create a new board.

Allow the user to choose the number of cards to play with.

Display Score.

Ask the user to upload custom images on the cards.

Cool animations.

More styles.

Sound Effects.

Mobile Responsivity.
