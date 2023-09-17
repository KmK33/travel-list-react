export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your amazing journey ☁ 🚢 ✈</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! You are ready to go 🏃‍♂️🏃‍♂️"
          : `You have ${numItems} items on your list , and you already packed
        ${packedItems} (${percentage ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
