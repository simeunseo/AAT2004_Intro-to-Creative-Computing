# p01_emotion-drawing-app
## 과제 : 나만의 드로잉 앱을 만들어라! [▶demo link](https://simeunseo.github.io/2nd-assignment-7/)
This drawing app is a diary that records the day's emotion
through brush colors. I wanted to design it so that if users
paint day by day, look back at it later and remember, "This is
what I've been feeling in the past." like looking at a diary. So I
added today’s date on the bottom of painting screen. This app
is recommended for people who like to record and remember.

### How to express one’s feelings in color
Good feelings are expressed as user’s favorite color, bad
feelings as user’s least favorite color. So I made gradations
using favorite colors and least favorite colors, And I created
‘Today’s color’ based on that gradations and today’s feeling,
the better user feels, the closer to the favorite color, and the
less user feels, the closer to the hate color. So the color of the
brush was used as a measure of how user felt that day.

### How to use
On the first screen, you have to choose the color you like most
and the color you hate most. **You can adjust the values of
R,G,B of favorite color with the key ‘q’,‘Q’,‘w’,‘W’,‘e’,‘E’ and
hate color with the key ‘a’,‘A’,‘s’,‘S’,‘d’,‘D’.** At this point, if you
want to keep changing the value, you should press the
keyboard several times instead of just holding it for seconds. If
you choose that two color, **you have to input your feeling as a
integer 0 to 100, the better you feel, the closer to 100.** And if
you press ‘Enter’, the today’s color is decided and you can
draw picture on the white screen. And if you press ‘back
space’, you can change your brush to eraser. And if you press
‘backspace’ again, eraser change to brush.
