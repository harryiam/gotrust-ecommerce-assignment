export default function CategoryFilter({
  products,
  category,
  setCategory,
}) {
  const categories = [
    "all",
    ...new Set(
      products.map((product) => product.category)
    ),
  ];

  return (
    <select
      className="category-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}