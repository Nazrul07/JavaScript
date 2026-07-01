/*
How Events Actually Work — The Big Picture

User clicks a button
        ↓
Browser detects the action
        ↓
Browser creates an Event object (full of info about what happened)
        ↓
Browser dispatches it through the DOM tree
        ↓
Your listener functions run
        ↓
You respond
*/


/*
The DOM tree has 3 phases every event travels through:

CAPTURING PHASE (top → down)
         
document → html → body → div → button
                                  ↑
                             TARGET PHASE
                                  ↓
document ← html ← body ← div ← button

         BUBBLING PHASE (bottom → up)

This is called event propagation
*/


/*
addEventListener — Full Syntax

element.addEventListener(type, handler, options);
*/