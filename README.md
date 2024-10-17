# Kay principles of Redux

## ✅ State is an immutable object

## ✅ We can't mutate application state, we will always return a new,modified state

## ✅ All state changes are initiated through actions

## ✅ Reducers take current state, action as arguments & returns a new state ((state, action) => newState)

## ✅ Unidirectional Data Flow => state --> action --> reducer --> state --> action --> reducer

## ✅ Redux is inspired by Elm architecture that encourages functional programming principles like pure function

## ✅ That means pure functions output is always same for same input

## ✅ Every single state change in reducers has to be taken care of by developers explicitly

## ✅ Reducers are supposed to be pure & that's where the predictability comes from

## Why Redux is predictable?

## => because using redux you will know what every single action in application will do and how state will change
