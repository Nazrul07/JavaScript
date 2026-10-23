/*
    How do production teams organize large-scale applications cleanly so code doesn't become a giant messy file?

    Answer: In modern web Engineering (and inside React, Next.js and Node.js),
    every file is trated as an isolated Module.
    This ensures reusability, testability, maintainability, and scalability.
*/

/*
    1. Keep your files small and focused (Single Responsibility Principle).
    2. Export only what is necessary to use.
    3. Import only what is needed.
*/

/*
    The Golden Rule of Modules:
        Variables created inside a module are private to that file.
        Other files cannot see them unless we explicitly export them
        and the other file explicitly **import**s them.
*/

/*
    - Javascript gives us two ways to share code between files:
        1. Named Exports (Exports multiple items)
        2. Default Export (Exports a single item)
*/

/*
    Named Export:
        - We can export multiple items from a module.
        - We can export any kind of values (variables, functions, classes, etc.).
        - Must use curly braces: import { variable1, variable2 } from './file.js'
        - Must match the exact exported name (unless aliased with as).
        - Best Use: Utility functions, helpers, constants, single-purpose functions.
*/

/*
    Default Export:
        - We can export only ONE item per file.
        - The exported item can be anything (variable, function, class, etc.).
        - We don't need curly braces when importing: import variableName from './file.js'
        - We can choose any name when importing.
        - Best Use: The main function/class of the file.
*/