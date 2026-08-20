import { useEffect, useState } from "react";

export default function SearchBar({
  search,
  setSearch,
}) {
  const [value, setValue] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value, setSearch]);

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}