import { useState } from "react";
import Card from "./Card";
import FilterBar from "./FilterBar";
import PostList from "./PostList";

const cards = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "前端開發工作台",
    description: "整潔的桌面與清晰流程，讓你更專注在元件設計與互動細節。",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    title: "協作設計流程",
    description: "從需求到介面實作，透過一致的設計語言提升團隊協作效率。",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    title: "產品上線檢查",
    description: "在發布前快速檢視品質與體驗，確保每次更新都穩定且順暢。",
  },
];

function App() {
  const [savedIds, setSavedIds] = useState([]);
  const [filter, setFilter] = useState("all");

  function toggleSave(id) {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((savedId) => savedId !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  }

  const visibleCards =
    filter === "all"
      ? cards
      : cards.filter((card) => savedIds.includes(card.id));

  return (
    <div>
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <div className="flex flex-wrap gap-4 p-4">
        {visibleCards.length === 0 ? (
          <p>還沒有收藏任何文章</p>
        ) : (
          visibleCards.map((card) => (
            <Card
              key={card.id}
              {...card}
              isSaved={savedIds.includes(card.id)}
              onToggleSave={() => toggleSave(card.id)}
            />
          ))
        )}
      </div>
      <PostList />
    </div>
  );
}

export default App;
