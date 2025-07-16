export const addToRecentlyViewed = (product, fallbackCategory = 'default') => {
  const category = product.category || fallbackCategory;
  const key = `recentlyViewed_${category}`;
  let existing = JSON.parse(localStorage.getItem(key)) || [];

  existing = existing.filter(
    (item) => item.id !== product.id && item.name !== product.name
  );

  existing.unshift(product);
  localStorage.setItem(key, JSON.stringify(existing.slice(0, 10)));

  console.log('[✅ Saved]', product); 
  console.log('[📦 localStorage]', localStorage.getItem(key));

  window.dispatchEvent(new CustomEvent('recentlyViewedUpdated', { detail: { category } }));
};
