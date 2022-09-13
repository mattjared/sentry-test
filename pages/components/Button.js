export default function Button({text, funcProp, classesToAdd}) {
  const classes = `bg-purple-600 block hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 ${classesToAdd}`
  return (
    <button onClick={funcProp} className={classes}>{text}</button>
  )
}