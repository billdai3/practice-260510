export default function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="flex gap-2 p-4">
      <button
        className={filter === "all" ? "font-bold" : ""}
        onClick={() => onFilterChange("all")}
      >
        全部
      </button>
      <button
        className={filter === "saved" ? "font-bold" : ""}
        onClick={() => onFilterChange("saved")}
      >
        已收藏
      </button>
    </div>
  );
}
