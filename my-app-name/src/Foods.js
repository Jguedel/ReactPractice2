function Food() {
  let fruits = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥑",
  ];
  const index = Math.floor(Math.random() * fruits.length);
  let toRemove = fruits.splice(index, 1);

  return (
    <div className="return">
      <p>I'd like one {toRemove}, please</p>
      <p>Here you go: {toRemove}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {fruits.length} left.</p>
    </div>
  );
}

export default Food;
